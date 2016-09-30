import React, {
    Component,
    PropTypes
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'
import Styles from './Slider.css'
/**
 * Slider Component
 * @example
 * <Slider autoplay={true} loop={true} />
 */
export default class Slider extends Component {
    /**
     * This is Button constructor.
     * @param {boolean} [props.autoplay=true] ------- 是否自动播放
     * @param {number} [props.autoplayTimeout={5}] -------- 自动播放时间
     * @param {boolean} [props.loop=true] ------- 是否循环播放
     * @param {boolean} [props.horizontal=true] ------- 是否水平方向轮播
     * @param {boolean} [props.bounces=true] ------- 是否惯性回弹
     * @param {boolean} [props.showsButtons=true] ------- 是否显示切换按钮
     * @param {number} [props.index={0}] -------- 设置初始索引
     * @param {number} [props.aspectRatio={.666}] -------- 自适应宽高比
     */
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        autoplay: true,
        autoplayTimeout: 5,
        loop: true,
        horizontal: true,
        bounces: true,
        showsButtons: false,
        index: 0,
        aspectRatio: .666,
    };
    static propTypes = {
        showsButtons: PropTypes.bool,
        loop: PropTypes.bool,
        autoplay: PropTypes.bool,
        autoplayTimeout: PropTypes.number,
        index: PropTypes.number,
        horizontal: PropTypes.bool,
        bounces: PropTypes.bool,
        aspectRatio: PropTypes.number,
        paginationStyle: View.propTypes.style,
        pressStyle: View.propTypes.style,
    };

    state = { pressState: false };

    render = () => {
        const {
            aspectRatio,
            children,
        } = this.props;
        const {
            pressState
            } = this.state;

        let windowWidth = Dimensions.get('window').width,
            windowHeight = Dimensions.get('window').height;

        // 设置容器高度、图片高度
        let heightStyle,sliderHeight;
        if ( aspectRatio == 0 ) {
            sliderHeight = null;
            heightStyle = {height: windowHeight};
        } else {
            sliderHeight = windowWidth*aspectRatio;
            heightStyle = {height: sliderHeight};
        }

        let coalescedChildren = [];
        React.Children.map(children, function (child,index) {
            let childProps = {
                key: index,
                style: [
                    Styles.slideChild,
                    heightStyle ? heightStyle : null,
                    Styles['slideChild'+index],
                    child.props.style
                ]
            }
            coalescedChildren[index] = React.cloneElement(child, childProps);
            return coalescedChildren;
        })

        // 索引圆点样式
        let dotParentStyle = {
            position: 'absolute',
            bottom: 10,
            right: 10,
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent'
        }

        let dotStyle = {
            backgroundColor: 'rgba(0,0,0,.4)',
            width: 7,
            height: 7,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
        };
        let dotEle = React.createElement(View, {style:dotStyle});
        let dotActiveEle = React.createElement(View, {style:[dotStyle,{backgroundColor:'#fff'}]});

        // 轮播图设置
        let props= {
            showsButtons: this.props.showsButtons,
            loop: this.props.loop,
            autoplay: this.props.autoplay,
            autoplayTimeout: this.props.autoplayTimeout,
            height: sliderHeight,
            index: this.props.index,
            horizontal: this.props.horizontal,
            bounces: this.props.bounces,
            paginationStyle: this.props.paginationStyle || dotParentStyle,
            dot: dotEle,
            activeDot: dotActiveEle,
            onMomentumScrollEnd: function(e, state, context){
                console.log('index:', state.index);
            },
            // showsHorizontalScrollIndicator: false, // 显示底部进度条
            // showsVerticalScrollIndicator: false, // 显示底部进度条
        }


        // 按压态
        let touchableProps = {
          activeOpacity: 1
        }
        _onPressIn = () => {
            this.setState({ pressState: true });
        }
        _onPressOut = () => {
            this.setState({ pressState: false });
        }
        let pressStyle = null;

        // if ( pressState ) {
        //     pressStyle = {
        //         opacity: .7,
        //     }
        // }

        // touchableProps.onPress = _onPress;
        // touchableProps.onPressIn = _onPressIn;
        // touchableProps.onPressOut = _onPressOut;

        return (
            <Swiper
              style={Styles.wrapper, pressStyle}
              {...props}
              >
                {
                  React.Children.map(coalescedChildren, function (childs,index) {
                      return <TouchableOpacity {...touchableProps} style={[Styles.slide,Styles['slide'+index]]}>{childs}</TouchableOpacity>
                  })
                }
            </Swiper>
        )
    }
}
