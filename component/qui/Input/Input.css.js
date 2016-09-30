
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    default: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: '#fff',
      alignItems:"center",
      paddingRight: 12,
    },
    defaultInput: {
      flex: 1,
      paddingLeft: 12,
    },
    label: {
      paddingLeft: 12,
    }
});
