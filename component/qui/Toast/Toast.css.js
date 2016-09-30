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
    backgroundColor: 'rgba(0,0,0,.6)',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5
  },
  leftIcon: {
    marginRight: 5,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 45
  },
  primaryText: {
    fontSize: 14,
    color: '#ffffff',
  },
  rightIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  success: {
    backgroundColor: '#25A9F4',
  },
  error: {
    backgroundColor: '#FE6C6C',
  },
  info: {
    backgroundColor: '#3cba68',
  },
  wholePressTouch: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }

});
