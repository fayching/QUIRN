import React, { Component,PropTypes } from 'react';
import {
    Stylesheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Platform from 'Platform';
import Styles from './ListCell.css';
import Divider from '../Divider/Divider';
import Typo from '../base/Typo.css';

/**
 * List Component
 */
export default class ListCell extends Component {
    /**
     * @param {object} props
     * @param {string} props.primaryText - 列表单元格标题文本
     * @param {string} props.primaryColor - 列表单元格标题文本颜色
     * @param {number} props.primaryTextLines - 列表单元格标题文本行数
     * @param {number} props.primaryTextLineHeight - 列表单元格标题文本行高
     * @param {string} props.subText - 列表单元格段落文本
     * @param {number} props.subTextLines - 列表单元格段落行数
     * @param {boolean} [props.isListTopBorder=false] - 列表上边框线默认不显示
     * @param {boolean} [props.isListBottomBorder=false] - 列表下边框线默认不显示
     * @param {boolean} [props.isCellBorder=true] - 列表单元格上边框线默认显示,首单元格不显示上边框线
     * @param {number} props.borderLeft - 列表单元格上边框线左边距
     * @param {number} props.rowID - 列表单元格索引
     * @param {number} props.total - 列表数据长度
     * @param {string} props.defaultColor - 默认色
     * @param {string} props.defaultColor - 默认色
     * @param {object} props.leftIcon - 列表左侧Icon
     * @param {object} props.rightIcon - 列表右侧Icon
     * @param {object} props.subTextMore - 列表单元格第三行文本或其它自定义元素
     * @param {function} props.onPress - 按钮触摸回调执行函数
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        primaryTextLines: 1,
        primaryTextLineHeight: 24,
        subTextLines:1,
        primaryColor: '#000',
        defaultColor: '#777',
        isNoSpace: true,
        isCellBorder: true,
        isListTopBorder: false,
        isListBottomBorder: false
    };


    static propTypes = {
        primaryText: PropTypes.string,
        primaryColor: PropTypes.string,
        primaryTextLines: PropTypes.number,
        primaryTextLineHeight: PropTypes.number,
        subText: PropTypes.string,
        subTextLines: PropTypes.number,
        isNoSpace: PropTypes.bool,
        isListTopBorder: PropTypes.bool,
        isListBottomBorder: PropTypes.bool,
        isCellBorder: PropTypes.bool,
        borderLeft: PropTypes.number,
        rowID: PropTypes.string,
        total: PropTypes.number,
        defaultColor: PropTypes.string,
        leftIcon: PropTypes.element,
        rightIcon: PropTypes.element,
        subTextMore: PropTypes.element,
        onPress: PropTypes.func
    };

    _onPress() {}



    render() {
        const {
            style,
            elementStyles,
            captionText,
            primaryText,
            subText,
            leftIcon,
            rightIcon,
            isNoSpace,
            isListTopBorder,
            isListBottomBorder,
            isCellBorder,
            borderLeft,
            rowID,
            total,
            subTextLines,
            primaryTextLines,
            primaryTextLineHeight,
            primaryColor,
            defaultColor,
            subTextMore,
            onPress
            } = this.props;
        return (
            <TouchableHighlight underlayColor={'#e5e6e7'} onPress={this._onPress}>

                    <View style={[isListTopBorder &&(rowID ==0) &&Typo.borderTop,isListBottomBorder &&(rowID ==total-1)&& Typo.borderBottom, Styles.listContainer,style]}>
                        {leftIcon &&
                        <View style={[Styles.leftIcon, isNoSpace && Styles.noSpace,elementStyles && elementStyles.leftIcon]}>
                            {leftIcon}
                        </View>
                        }
                        <View style={[isCellBorder &&(rowID > 0) && Typo.borderTop,Styles.rightContainer,elementStyles && elementStyles.rightContainer]}>
                            <View style={[Styles.mainContainer,elementStyles && elementStyles.mainContainer]}>

                                {captionText &&
                                    <Text numberOfLines={1} style={[Styles.captionText,elementStyles && elementStyles.captionText]}>{captionText}</Text>
                                }
                                    <Text numberOfLines={primaryTextLines} style={[Styles.primaryText,{
                                    paddingTop:(Platform.OS === 'ios') ? (primaryTextLines>1 ? -4 : null) : null,
                                    lineHeight:primaryTextLines>1 ? 24 : null,
                                    color: primaryColor},elementStyles && elementStyles.primaryText]}>{primaryText}</Text>
                                {subText &&
                                <Text style={[Styles.subText,{color: defaultColor},elementStyles && elementStyles.subText]}
                                      numberOfLines={subTextLines}>{subText}</Text>
                                }
                                {subTextMore}

                            </View>
                            {rightIcon &&
                            <View style={[Styles.rightIcon,elementStyles && elementStyles.rightIcon]}>
                                {rightIcon}
                            </View>
                            }
                        </View>
                    </View>
            </TouchableHighlight>
        );
    }
}
