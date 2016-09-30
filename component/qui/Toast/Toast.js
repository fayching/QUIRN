import React, {
    Component,
    PropTypes
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Easing
} from 'react-native';
import Icon from '../Icon/Icon';
import Styles from './Toast.css';
export const TypeName = ['default', 'success', 'error', 'warn', 'rightPress', 'wholePress'];
export const StatusName = ['hide', 'show'];
/**
 * Toast Component
 * @example
 * <Toast type="default" value="这是一个Toast" />
 */
export default class Toast extends Component {
  /**
  * This is Button constructor.
  * @param {string} props.value ------- 提示文本
  * @param {enum(TypeName)} props.type ------- 按钮主题样式，可选参数：default(默认)、success、error、warn、rightPress、wholePress
  * @param {enum(StatusName)} props.status ------- 按钮大小，两个可选参数：hide(默认)、show
  * @param {style} props.style ------- 自定义Toast样式
  * @param {style} props.fontStyle ------- 自定义Toast内文字样式
  * @param {boolean} [props.autoHide] ------- 是否自动隐藏，默认为true
  * @param {number} [props.autoHideTime] ------- 自动隐藏等待时间，默认3000
  * @param {number} [props.duration] ------- 自动隐藏动画持续时间，默认400
  * @param {Icon} [props.leftIcon] ------- 左侧图标，为Icon组件
  * @param {Icon} [props.rightIcon] ------- 右侧图标，为Icon组件
  * @param {function} [props.onPress] ------- 按钮触摸回调执行函数
  * @param {function} [props.hideCallBack] ------- 自动隐藏函数，执行隐藏操作触发的回调函数
  * @param {string} [children.props.childpos] ------- 子节点位置：before、beforePress、after、afterPress
  */
  constructor(props) {
    super(props);

    this.preState = {};

    this.state = {
      bounceValue: new Animated.Value(0),
      opacityValue: new Animated.Value(0),
    }
  }

  static defaultProps =  {
    type: 'default',
    value: '',
    autoHide: true,
    autoHideTime: 3000,
    duration: 400,
    status: 'hide',
  };

  static proTypes = {
    type: PropTypes.oneOf(TypeName),
    status:PropTypes.oneOf(StatusName),
    onPressRightIcon: this._openPressRight
  };

  _slipeDown() {
    this.state.status = 'show';

    Animated.parallel([
      Animated.timing(this.state.bounceValue, {
        duration: this.state.duration,
        toValue: 45
      }),
      Animated.timing(this.state.opacityValue, {
        duration: this.state.duration/2,
        toValue: 1,
        delay: this.state.duration/2
      })
    ]).start();

    this.timer && clearTimeout(this.timer);
    if(this.state.autoHide){
      let that = this;
      this.timer = setTimeout(()=> {
        if(this.state.status === 'show'){
          that.hideCallBack && that.hideCallBack();
        }
      }, this.state.autoHideTime);
    }


  }
  _slipeUp() {
    this.state.status = 'hide';

    Animated.parallel([
      Animated.timing(this.state.bounceValue, {
        duration: this.state.duration,
        toValue: 0,
      }),
      Animated.timing(this.state.opacityValue, {
        duration: this.state.duration/2,
        toValue: 0,
        delay: this.state.duration/2
      })
    ]).start();
  }


  componentDidMount() {
    const {
      hideCallBack
    } = this.props;

    this.hideCallBack = hideCallBack;
  }

  render() {
    const {
      style,
      fontStyle,
      type,
      value,
      status,
      autoHide,
      autoHideTime,
      duration,
      leftIcon,
      rightIcon,
      onPress,
    } = this.props;

    this.state.status = status;
    this.state.autoHide = autoHide;
    this.state.autoHideTime = autoHideTime;
    this.state.duration = duration;

    if(status === 'show'){
      this._slipeDown();
    }else if(status === 'hide'){
      this._slipeUp();
    }

    //Toast栏自定义事件
    let rightTouchProps = {};
    _onPress = () => {
      onPress ? onPress() : this._slipeUp()
    }
    rightTouchProps.onPress = _onPress;

    let leftIconComponent;
    let rightIconComponent;
    switch(type){
      case 'default':
        leftIconComponent = <View style={Styles.leftIcon}>{leftIcon}</View>;
        rightIconComponent = <View style={Styles.rightIcon}>{rightIcon}</View>;
        break;
      case 'success':
        leftIconComponent = <View style={Styles.leftIcon}><Icon iconType='iconFont' name='success' size={30} style={{color:'#fff'}} /></View>;
        rightIconComponent = null;
        break;
      case 'error':
        leftIconComponent = <View style={Styles.leftIcon}><Icon iconType='iconFont' name='warn' size={30} style={{color:'#fff'}} /></View>;
        rightIconComponent = null;
        break;
      case 'info':
        leftIconComponent = <View style={Styles.leftIcon}><Icon iconType='iconFont' name='success' size={30} style={{color:'#fff'}} /></View>;
        rightIconComponent = null;
        break;
      case 'warn':
        leftIconComponent = <View style={Styles.leftIcon}><Icon iconType='iconFont' name='warn' size={30} style={{color:'#fff'}} /></View>;
        break;
      case 'rightPress':
        leftIconComponent = <View style={Styles.leftIcon}>{leftIcon}</View>;
        rightIconComponent = <TouchableOpacity style={Styles.rightIcon} {...rightTouchProps} >{rightIcon || <Icon iconType='iconFont' name='arrow' size={30} style={{color:'#fff'}} />}</TouchableOpacity>;
        break;
      case 'wholePress':
        leftIconComponent = <View style={Styles.leftIcon}>{leftIcon}</View>;
        rightIconComponent = <TouchableOpacity style={Styles.wholePressTouch} {...rightTouchProps} >{rightIcon}</TouchableOpacity>;
        break;
      default:
        break;
    }

    //更新Container样式
    let containerStyle = [Styles.default,
      Styles[type]
    ];


    return (
      <Animated.View style={[containerStyle,
          style,
          {
            transform: [
              {translateY: this.state.bounceValue},
            ],
            opacity: this.state.opacityValue,
          }
        ]}>

        {leftIconComponent}
        <View style={Styles.rightContainer}>
          <View style={[Styles.mainContainer]}>
            <Text style={[Styles.primaryText,fontStyle]}>{value}</Text>
          </View>
          {rightIconComponent}
        </View>
      </Animated.View>
    );
  }



}
