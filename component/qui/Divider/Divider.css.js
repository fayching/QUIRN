
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    divider: {
        borderTopColor: '#e9e9e9',
        borderTopWidth: 1/PixelRatio.get()
    }

})
