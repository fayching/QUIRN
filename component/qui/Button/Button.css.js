import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports =  StyleSheet.create({
    default: {
        height: 30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 1/PixelRatio.get(),
        borderColor: '#C3C8CC',
        backgroundColor: '#fff',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
    },
    defaultText: {
        fontSize: 15,
        backgroundColor: 'transparent'
    },
    //  尺寸大小
    smallSize: {
        height: 30,
        borderRadius: 2,
    },
    smallSizeText: {
        fontSize: 15,
    },
    largeSize: {
        height: 44,
        borderRadius: 3,
        flex: 1
    },
    largeSizeText: {
        fontSize: 18,
    },
    // 默认类型
    defaultNormal: {
    },
    defaultActive: {
        borderColor: '#D0D1D2',
        backgroundColor: "#F0F0F0",
    },
    defaultDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    defaultTextNormal: {
        color: '#000',
    },
    defaultTextActive: {
        color: '#000',
    },
    defaultTextDisabled: {
        color: '#BBB',
    },
    // 提示类型
    tipsNormal: {
        borderColor: '#12B7F5',
        backgroundColor: "#fff",
    },
    tipsActive: {
        borderColor: '#12B7F5',
        backgroundColor: "#e3eef2",
    },
    tipsDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    tipsTextNormal: {
        color: '#12B7F5',
    },
    tipsTextActive: {
        color: '#35c6f2',
    },
    tipsTextDisabled: {
        color: '#BBB',
    },
    // 确认、发送、操作类型
    primaryNormal: {
        borderColor: 'transparent',
        backgroundColor: '#12B7F5',
    },
    primaryActive: {
        borderColor: 'transparent',
        backgroundColor: "#0E98CB",
    },
    primaryDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    primaryTextNormal: {
        color: '#FFF',
    },
    primaryTextActive: {
        color: '#FFF',
    },
    primaryTextDisabled: {
        color: '#BBB',
    },
    // 红色警告类型
    dangerNormal: {
        borderColor: 'transparent',
        backgroundColor: '#FB6155',
    },
    dangerActive: {
        borderColor: 'transparent',
        backgroundColor: "#CC3428",
    },
    dangerDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    dangerTextNormal: {
        color: '#fff',
    },
    dangerTextActive: {
        color: 'rgba(255, 255, 255, .9)',
    },
    dangerTextDisabled: {
        color: '#BBB',
    },
    // 反白类型
    highlightNormal: {
        borderColor: '#fff',
        backgroundColor: 'transparent',
    },
    highlightActive: {
        borderColor: '#fff',
        backgroundColor: "rgba(255,255,255,.5)",
    },
    highlightDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    highlightTextNormal: {
        color: '#fff',
    },
    highlightTextActive: {
        color: 'rgba(255, 255, 255, .9)',
    },
    highlightTextDisabled: {
        color: '#BBB',
    },
    // 圆形类
    circle: {
        borderRadius: 60,
        width: 60,
        height: 60,
        flex: 0
    },
    CircleLarge: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    circleNormal: {
        borderColor: 'transparent',
        backgroundColor: '#38c7f3',
    },
    circleActive: {
        borderColor: 'transparent',
        backgroundColor: "#23a9d3",
    },
    circleDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#E9EBEC",
    },
    circleTextNormal: {
        color: 'transparent',
    },
    circleTextActive: {
        color: 'transparent',
    },
    circleTextDisabled: {
        color: 'transparent',
    },
    // 空心圆
    circleLineNormal: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#38c7f3',
        backgroundColor: 'transparent',
    },
    circleLineActive: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#23a9d3',
        backgroundColor: "transparent",
    },
    circleLineDisabled: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#eeeff0',
        backgroundColor: "transparent",
    },
    circleLineTextNormal: {
        color: 'transparent',
    },
    circleLineTextActive: {
        color: 'transparent',
    },
    circleLineTextDisabled: {
        color: 'transparent',
    },
    // 进度按钮
    progress: {
        backgroundColor: '#1EB9F2',
        position: 'absolute',
        left: -1/PixelRatio.get(),
        top: -1/PixelRatio.get(),
    }
});
