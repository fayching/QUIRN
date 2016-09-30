
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Animated,
    Easing,
} from 'react-native';

import Styles from './ActionSheet.css'
import Icon from '../Icon/Icon';



const ActionsheetType = ['normal','special'];

export default class ActionSheet extends Component {
  /**
   * This is ActionSheet constructor.
   * @param {string} props.tipText ------- 提示文本
   * @param {enum(ActionsheetType)} props.type ------- ActionSheet类型，可选参数：normal(默认)、special(可勾选)
   * @param {number} props.destructiveIndex ------- 否定性按钮位置 begin from 0
   * @param {array} props.options ------- 控制单个选项文本、样式、方法
      example options = [{
          text: '选项',
          underlayColor: 'red', //按下时颜色
          onPress: onPressFun,
          onPressIn: onPressInFun,
          onPressOut: onPressOutFun,
          textStyle: styles,
          optionStyle: styles
      }]
   */

  constructor(props) {
    super(props);
  }

  state = {
    bounceValue: new Animated.Value(0),
    opacityValue: new Animated.Value(0),
    status: 'hide',
    sheetHeight: 9999,
  }

  static propTypes = {
      tipText: PropTypes.string,
      wrapperStyle: Text.propTypes.style,
      tipTextStyle: Text.propTypes.style,
      tipWrapperStyle: Text.propTypes.style,
      options: PropTypes.array,
      destructiveIndex: PropTypes.number,
      actionsheetType: PropTypes.oneOf(ActionsheetType),
  };

  static defaultProps = {
    actionsheetType: 'normal',
    duration: 400,
  }

  showActionSheet() {
    if(this.state.status === 'hide') this._slipeUp();
  }

  _slipeUp() {
    this.setState({
      status: 'show',
      container: [Styles.container,Styles.fullContainer]
    })

    Animated.parallel([
      Animated.timing(this.state.bounceValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.easeIn
      }),
      Animated.timing(this.state.opacityValue, {
        duration: 300,
        toValue: 0.3,
      })
    ]).start();

  }
  _slipeDown() {

    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(()=> {
      this.setState({
        status: 'hide',
        container: [Styles.container]
      })
    }, 300);



    Animated.parallel([
      Animated.timing(this.state.bounceValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.easeIn
      }),
      Animated.timing(this.state.opacityValue, {
        duration: 300,
        toValue: 0,
      })
    ]).start();

  }

  _onLayout(event) {
    let height = event.nativeEvent.layout.height;
    this.setState({
      sheetHeight: height,
    });
  }

  render() {
    const {
      tipText,
      tipTextStyle,
      tipWrapperStyle,
      wrapperStyle,
      options,
      destructiveIndex,
      actionsheetType,
    } = this.props;

    const {
      bounceValue,
      opacityValue,
      status,
    } = this.state;

    let optionsView = [];
    console.log(actionsheetType);
    let ifSpecialItem = actionsheetType==='special'?true:false;

    if(options) {
      for (let i = 0; i < options.length; i++) {
        let ifDestructiveItem,
            ifNextToLastItem,
            ifOperateItem,
            optionProps,
            stylesProps;

        if(i===destructiveIndex) ifDestructiveItem = true;
        if(i===options.length-1) ifOperateItem = true;
        if(i===options.length-2) ifNextToLastItem = true;

        _onPress = ()=>{
          if(!ifOperateItem) {
            for(let j=0; j<options.length; j++){
              if(j!==i){
                this.refs[j].setState({
                  actived: false
                })
                //console.log(this.refs[j].state.actived);
              }
            }
          }
          if(ifOperateItem) {
            this._slipeDown();
          }
          options[i].onPress?options[i].onPress():null;
        }

        _onPressIn = ()=>{
          options[i].onPressIn?options[i].onPressIn():null;
        }

        _onPressOut = ()=>{
          options[i].onPressOut?options[i].onPressOut():null;
        }

        optionProps = {
          ifDestructiveItem: ifDestructiveItem,
          ifOperateItem: ifOperateItem,
          ifNextToLastItem: ifNextToLastItem,
          ifSpecialItem: ifSpecialItem,
          value: options[i].text,
          underlayColor: options[i].underlayColor,
          optionStyle: options[i].optionStyle,
          optionTextStyle: options[i].optionTextStyle,
          onPress: _onPress,
          onPressIn: _onPressIn,
          onPressOut: _onPressOut,
          ref: i,
          key: i
        }

        optionsView.push(
            <OptionButton {...optionProps} />
        )
      }
    }

    let containerStyle = [Styles.container,wrapperStyle];
    let sheetHeight = this.state.sheetHeight;



    return (
      <View style={containerStyle} >

        {this.props.children}

        {this.state.status==='show'&&<Animated.View style={[Styles.mask,
          {opacity: this.state.opacityValue}]} >
        </Animated.View>}

        <Animated.View
        style={[Styles.actionSheetWrapper,{bottom: -sheetHeight},{
          transform: [{
                      translateY: this.state.bounceValue.interpolate({
                          inputRange: [0,1],
                          outputRange: [0, -sheetHeight]
                      })
                  }]
                }]}>

          <View onLayout={this._onLayout.bind(this)}>
            {tipText&&
              <View style={[Styles.tipWrapper,Styles.borderBottom,tipWrapperStyle]}>
                <Text style={[Styles.tipTextStyle,tipTextStyle]}>{tipText}</Text>
              </View>
            }
          {optionsView}
          </View>
        </Animated.View>
        </View>
    )
  }
}

class OptionButton extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
      underlayColor: '#F0F0F0',
  };

  static propTypes = {
      ifDestructiveItem: PropTypes.bool,
      ifNextToLastItem: PropTypes.bool,
      ifOperateItem: PropTypes.bool,
      ifSpecialItem: PropTypes.bool,
      value: PropTypes.string,
      underlayColor: PropTypes.string,
      optionStyle: Text.propTypes.style,
      optionTextStyle: Text.propTypes.style,
      onPressIn: PropTypes.func,
      onPressOut: PropTypes.func,
      onPress: PropTypes.func,
  };

  state = { actived: false};

  render() {
    const {
      underlayColor,
      key,
      ifDestructiveItem,
      ifNextToLastItem,
      ifOperateItem,
      ifSpecialItem,
      value,
      optionStyle,
      optionTextStyle,
      onPressIn,
      onPressOut,
      onPress,
      ...props
    } = this.props

    const {
      actived,
    } = this.state

    _onPressIn = ()=> {
      onPressIn ? onPressIn():null
    }
    _onPressOut = ()=> {
      onPressOut ? onPressOut():null
    }
    _onPress = ()=> {
      if(ifSpecialItem&&!ifOperateItem){
        if(!this.state.actived){
          this.setState({
            actived: true
          })
        }
      }
      onPress ? onPress():null;
    }

    let touchableStyle = [
      Styles.optionsStyle,
      Styles.borderBottom,
      (ifNextToLastItem||ifOperateItem)&&{borderBottomWidth: 0},
      (ifOperateItem)&&{marginTop: 10},
      optionStyle,
    ]
    let textStyle = [
      Styles.textStyle,
      ifDestructiveItem&&{color:'#ff4222'},
      optionTextStyle,
    ]

    let touchableProps = {
      underlayColor: underlayColor,
      onPressIn: _onPressIn,
      onPressOut: _onPressOut,
      onPress: _onPress
    }
    return (
      <TouchableHighlight
        style={touchableStyle}
        {...touchableProps}
        >
        <View style={Styles.textWrapper}>
          <Text style={textStyle}>{value}</Text>
          {actived&&<View style={Styles.iconStyle}><Icon iconType={'iconFont'} name={'checked'} size={25} /></View>}
        </View>
      </TouchableHighlight>
    )
  }
}
