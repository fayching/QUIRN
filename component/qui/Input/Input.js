import React, {
    Component,
    PropTypes
} from 'react';

import {
    Stylesheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';

import Styles from './Input.css';
import Border from '../base/Border.css';
import Icon from '../Icon/Icon';
/**
 * Input Component
 */

const CloseType = ['default', 'normal'];
export default class Input extends Component {
    /**
     * @param {object} props
     * @param {string} props.label - 输入框标签文本
     * @param {string} props.placeholderColor - 输入框提示文本颜色
     * @param {number} props.textSize - 文本字体大小
     * @param {number} props.labelTextCount - 标签最长字体数
     *  使同组的input label部分占位一致。设置在同组input而label字符数不一致时,字数较少的input内
     * @param {enum(CloseType)} props.closeType - 清除按钮类型 [default or normal]
     * @param {bool} props.inputBorderTop - Input上边框,默认有
     * @param {bool} props.inputBorderBottom - Input上边框,默认有
     * @param {style} props.inputStyle - 自定义输入框样式
     * @param {style} props.textStyle - 自定义输入框文本样式
     * @param {style} props.labelStyle - 自定义标签样式
     * @param {function} [props.onFocus] ------- 输入框获得焦点时执行函数
     * @param {function} [props.onChangeText] ------- 输入框文本改变时执行函数
     * @param {function} [props.onBlur] ------- 输入框失去焦点时执行函数
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        placeholderColor: '#bbbbbb',
        closeType: 'default',
        textSize: 16,
        inputBorderTop: true,
        inputBorderBottom: true
    };


    static propTypes = {
        label: PropTypes.string,
        placeholderColor: PropTypes.string,
        closeType: PropTypes.oneOf(CloseType),
        textSize: PropTypes.number,
        labelTextCount: PropTypes.number,
        inputBorderTop: PropTypes.bool,
        inputBorderBottom: PropTypes.bool,
        inputStyle: Text.propTypes.style,
        textStyle: Text.propTypes.style,
        labelStyle: Text.propTypes.style,
        onFocus: PropTypes.func,
        onChangeText: PropTypes.func,
        onBlur: PropTypes.func,
    };

    state = { closeBtn: 'hide',textValue: '' };

    render() {
        const {
            label,
            placeholderColor,
            closeType,
            textSize,
            labelTextCount,
            inputBorderTop,
            inputBorderBottom,
            inputStyle,
            textStyle,
            labelStyle,
            onFocus,
            onChangeText,
            onBlur,
            ...props
            } = this.props;

        const {
            closeBtn,
            textValue
            } = this.state;

            _onFocus = ()=> {
              if(textValue!==''){
                this.setState({
                  closeBtn: 'show',
                })
              }
              onFocus ? onFocus() : null
            };

            _onChangeText = (text)=> {
              // let value = text;
              this.setState({
                textValue: text,
              })
              if(text !== '') {
                if(closeBtn == 'hide') {
                  this.setState({
                    closeBtn: 'show',
                  })
                }
              }else{
                this.setState({
                  closeBtn: 'hide',
                })
              }

              onChangeText ? onChangeText() : null
            };

            _onBlur = ()=> {
              this.setState({
                closeBtn: 'hide',
              })

              onBlur ? onBlur() : null
            };

            _onPress = ()=> {
              this.refs.textin.clear();
              this.setState({
                closeBtn: 'hide',
                textValue: ''
              })
            };

            _onEndEditing = ()=> {

            }

            let borderTop = (inputBorderTop&&Border.borderTop),
                borderBottom = (inputBorderBottom&&Border.borderBottom);

            let fontSizeStyle = {fontSize:textSize},
                labelWidth = textSize*labelTextCount+12;

            let clearButtonMode = closeType==='default'?'while-editing':'never';

            let wrapperStyles = [
              Styles.default,
              borderTop,
              borderBottom,
              inputStyle
            ],

            labelStyles = [
              Styles.label,
              fontSizeStyle,
              labelStyle,
              {width: labelWidth}
            ],

            textInputStyles = [
              Styles.defaultInput,
              fontSizeStyle,
              textStyle,
            ];


            let textInputProps = {
               placeholderTextColor: placeholderColor,
               clearButtonMode: clearButtonMode,
               onFocus: _onFocus,
               onChangeText: _onChangeText,
               onBlur: _onBlur,
               ...props,
            },

            touchableProps = {
              onPress: _onPress
            };


        return (

          <View style={wrapperStyles}>
            {label && <Text style={labelStyles} numberOfLines={1}>{label}</Text>}

            <TextInput style={textInputStyles}
              {...textInputProps}
              ref={'textin'}
              value={textValue}
            />

            {Platform.OS !== 'ios'&&closeType === 'default'&&
              <TouchableOpacity {...touchableProps}>
                {closeBtn === 'show'&&<Icon name="close" />}
              </TouchableOpacity>}

            {closeType === 'normal'&&
              <TouchableOpacity {...touchableProps}>
                {closeBtn === 'show'&&
                  <Text>
                    <Image style={{width: 15,height: 15}} source={require('../img/clear.png')} />
                  </Text>
                }
              </TouchableOpacity>}
          </View>

        );
    }
}
