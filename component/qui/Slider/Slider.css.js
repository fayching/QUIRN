import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio,
    Dimensions
} from 'react-native';

let windowWidth = Dimensions.get('window').width;

module.exports = require('react-native').StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dedede',
    },
    slideChild: {
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        // resizeMode:Image.resizeMode.cover
    },
});
