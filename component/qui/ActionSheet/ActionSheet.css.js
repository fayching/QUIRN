import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';

const {width,height} = Dimensions.get('window');

module.exports = require('react-native').StyleSheet.create({
    container: {
      width: width,
      height: height,
      position: 'absolute',
      backgroundColor: '#f7f7f8',
      left:0,
      top:0,
    },
    mask: {
      justifyContent:"center",
      backgroundColor:"#000",
      position:"absolute",
      width:width,
      height: height,
      left:0,
      top:0,
    },
    optionsStyle: {
      width: width,
      height: 45,
      backgroundColor: '#fff',
    },
    textStyle: {
      fontSize: 18,
      color: '#000',
    },
    actionSheetWrapper: {
      position: 'absolute',
    },
    tipWrapper: {
      backgroundColor: '#fff',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tipTextStyle: {
      color: '#777777',
      fontSize: 12,
    },
    borderBottom: {
      borderBottomColor: '#dedfe0',
      borderBottomWidth: 1/PixelRatio.get()
    },
    textWrapper: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      position: 'absolute',
      right: 10,
      height: 45,
      justifyContent: 'center',
    }
});
