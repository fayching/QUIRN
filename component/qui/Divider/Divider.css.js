
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    borderTop: {
        borderTopColor: '#e9e9e9',
        borderTopWidth: 1/PixelRatio.get()
    },
    borderBottom: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1/PixelRatio.get()
    },
    borderLeft: {
        borderLeftColor: '#e9e9e9',
        borderLeftWidth: 1/PixelRatio.get()
    },
    borderRight: {
        borderRightColor: '#e9e9e9',
        borderRightWidth: 1/PixelRatio.get()
    },
    border:{
        borderColor: '#e9e9e9',
        borderWidth: 1/PixelRatio.get()
    }

})
