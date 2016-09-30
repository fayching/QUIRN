
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';
module.exports = require('react-native').StyleSheet.create({
  defaultView:{
    flexDirection:'row',paddingLeft:6,paddingRight:6
  },
  defaultText:{
    fontSize:16,lineHeight:22
  },
  defaultReddot:{
    width:8,height:8,backgroundColor:'#f74c31',borderRadius:5,position:'relative',left:0,top:0
  },
  sReddot:{
    width:6,height:6,backgroundColor:'#f74c31',borderRadius:5,position:'relative',left:0,top:0
  },
  staticReddot:{
    width:8,height:8,backgroundColor:'#f74c31',borderRadius:5,
  },
});
