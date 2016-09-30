import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
  viewpop:{
    position:"absolute",left:-10,top:-9,
  },
  pop:{
    color:"#ff7200",backgroundColor:'transparent',position:'absolute',top:0,left:0,
  },
  txtpop:{
    color:'#ffffff',backgroundColor:'transparent',fontSize:11,textAlign:'center',position:'absolute',top:10,left:9,
  },
  svip:{
    color:"#b7440e",backgroundColor:'#ffd400',position:"absolute",right:0,bottom:0,width:28,height:13,lineHeight:22,borderRadius:2,paddingLeft:-2,
  },
  vip:{
    color:"#fffadf",backgroundColor:'#ff0000',position:"absolute",right:0,bottom:0,width:28,height:13,lineHeight:22,borderRadius:2,paddingLeft:-2,
  },
  free:{
    color:"#ffffff",backgroundColor:'#5fb336',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  },
  freelimit:{
    color:"#ffffff",backgroundColor:'#18b4ed',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  },
  last:{
    color:"#ffffff",backgroundColor:'#8f6adb',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  },
  limit:{
    color:"#ffffff",backgroundColor:'#3385e6',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  },
  act:{
    color:"#ffffff",backgroundColor:'#8f6adb',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  },
  xy:{
    color:"#ffffff",backgroundColor:'#d7ba42',fontSize:10,position:"absolute",right:0,bottom:0,width:28,height:13,borderRadius:2,lineHeight:11,textAlign:'center'
  }
});
