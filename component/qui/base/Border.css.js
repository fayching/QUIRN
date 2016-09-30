import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = StyleSheet.create({
    borderTop: {
        borderTopColor: '#e9e9e9',
        borderTopWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
    },
    borderBottom: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
    },
    borderLeft: {
        borderLeftColor: '#e9e9e9',
        borderLeftWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
    },
    borderRight: {
        borderRightColor: '#e9e9e9',
        borderRightWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
    },
    border:{
        borderColor: '#e9e9e9',
        borderWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
    },
    borderRadius:{
        borderColor: '#e9e9e9',
        borderWidth: 1/PixelRatio.get(),
        borderStyle: 'solid',
        borderRadius: 4,
    }

})
