import React, {
    Component,
    PropTypes
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

export const TypeName = ['default', 'tips' ,'primary', 'danger', 'highlight', 'circle', 'circle-outline', 'progress'];
export const SizeName = ['small', 'middle','large'];
import Styles from './Button.css';
/**
 * Button Component
 * @example
 * <Button type="primary" value="确定" />
 */
export default class Button extends Component {
    /**
     * This is Button constructor.
     * @param {string} props.value ------- 按钮文本
     * @param {boolean} [props.disabled=false] ------- 为true时，禁止点击状态
     * @param {enum(TypeName)} props.type ------- 按钮主题样式，可选参数：default(默认)、tips、primary、danger、highlight、circle、circle-outline
     * @param {enum(SizeName)} props.size ------- 按钮大小，两个可选参数：small(默认)、middle、large
     * @param {style} props.style ------- 自定义按钮样式
     * @param {style} props.textStyle ------- 自定义按钮文本样式
     * @param {style} props.activeStyle ------- 自定义按压态样式
     * @param {style} props.activeTextStyle ------- 自定义按压态文本样式
     * @param {function} [props.onPress] ------- 按钮触摸回调执行函数
     * @param {function} [props.onPressIn] ------- 按钮触碰回调执行函数
     * @param {function} [props.onPressOut] ------- 按钮触摸离开时回调执行函数
     * @param {function} [props.onLongPress] ------- 按钮长按回调执行函数
     * @param {string} [children.props.childpos] ------- 子节点位置：before、beforePress、after、afterPress
     */
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        disabled: false,
        type: 'default',
        size: 'small',
    };
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        type: PropTypes.oneOf(TypeName),
        size: PropTypes.oneOf(SizeName),
        style: Text.propTypes.style,
        textStyle: Text.propTypes.style,
        activeStyle: Text.propTypes.style,
        activeTextStyle: Text.propTypes.style,
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        onLongPress: PropTypes.func,
    };
    state = { buttonState: 'Normal', customActive: false };

    render = () => {
        const {
            value,
            disabled,
            type,
            size,
            style,
            textStyle,
            activeStyle,
            activeTextStyle,
            onPress,
            onPressIn,
            onPressOut,
            onLongPress,
            children,
        } = this.props;
        const {
            buttonState,
            customActive
            } = this.state;

        let windowWidth = Dimensions.get('window').width;

        _onPress = () => {
            onPress ? onPress() : null
        }
        _onPressIn = () => {
            if (activeStyle) {
                this.setState({ customActive: true })
            } else {
                this.setState({ buttonState: 'Active' })
            }
            onPressIn ? onPressIn() : null
        }
        _onPressOut = () => {
            if (activeStyle) {
                this.setState({ customActive: false })
            } else {
                this.setState({ buttonState: 'Normal' })
            }
            onPressOut ? onPressOut() : null
        }
        _onLongPress = () => {
            onLongPress ? onLongPress() : null
        }

        // type style
        let state = disabled ? 'Disabled' : buttonState;
        let typeStyle = Styles[type+state];
        let typeTextStyle = Styles[type+'Text'+state];
        if ( type=='circle-outline' ) {
            typeStyle = Styles['circleLine'+state];
            typeTextStyle = Styles['circleLineText'+state];
        }

        // size style
        let sizeStyle = Styles[size+'Size'];
        let sizetextStyle = Styles[size+'SizeText'];
        if ( size=='middle' ) {
            sizeStyle = Styles['largeSize'];
            sizetextStyle = Styles['largeSizeText'];
        }

        // children
        let coalescedChildren = {}, beforeChild, afterChild;
        React.Children.map(children, function (child,index) {
            childPos = child.props['childpos'] ? child.props['childpos'] : index;
            coalescedChildren[childPos] = child;
            return coalescedChildren;
        })
        if ( buttonState=='Active' ){
            beforeChild = coalescedChildren.beforePress ? coalescedChildren.beforePress : coalescedChildren.before;
            afterChild = coalescedChildren.afterPress ? coalescedChildren.afterPress : coalescedChildren.after;
        } else {
            beforeChild = coalescedChildren.before;
            afterChild = coalescedChildren.after;
        }

        // 默认显示所有chlidren
        if ( !afterChild && !beforeChild ) {
            beforeChild = children;
        }

        // all style
        let containerStyles = [
           Styles.default,
           sizeStyle,
           typeStyle,
           style,
           type=='circle' || type=='circle-outline' ? Styles.circle : null,
           (type=='circle' || type=='circle-outline') && size=='large' ? Styles.CircleLarge : null,
           size=='middle' ? { flex: 1, marginLeft:windowWidth/5, marginRight:windowWidth/5 } : null,
           customActive ? activeStyle : null,
        ];
        let textStyles = [
           Styles.defaultText,
           sizetextStyle,
           typeTextStyle,
           textStyle,
           customActive ? activeTextStyle : null,
           coalescedChildren.before && value ? {marginLeft: 6} : null,
           coalescedChildren.after && value ? {marginRight: 6} : null,
        ];

        // progress button
        let progressStyles = [
           Styles.progress,
           {
              width: 20,
              height: 20,
              borderTopLeftRadius: 2,
              borderBottomLeftRadius: 2
           }
        ];

        // touch event
        let touchableProps = {
          activeOpacity: 1
        }
        if (!this.props.disabled){
            touchableProps.onPress = _onPress;
            touchableProps.onPressIn = _onPressIn;
            touchableProps.onPressOut = _onPressOut;
            touchableProps.onLongPress = _onLongPress;
        }

        return (
            <TouchableOpacity
                {...touchableProps}
                style={containerStyles}
            >
                { beforeChild }
                <Text
                    style={textStyles}
                >{value}</Text>
                { afterChild }
            </TouchableOpacity>
        )
    }
}
