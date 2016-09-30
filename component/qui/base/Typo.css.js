import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    PixelRatio,
    Platform
} from 'react-native';

import STYLES from './Config.css';

module.exports = StyleSheet.create({
  default:{
    color: '#000',
    lineHeight: 24,
    fontSize: 16,
  },
  base:{
    color: '#000',
    lineHeight: 24,
    fontSize: 16,
  },
  h1:{
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '400',
  },
  h2:{
    fontSize: 17,
    lineHeight: 25.5,
    fontWeight: '400',
  },
  h3:{
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  h4:{
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  h5:{
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
  h6:{
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  textDefault:{
    color: STYLES.black,
  },
  textWhite:{
    color: STYLES.white,
  },
  textInfo:{
    color: STYLES.gray,
  },
  textMuted:{
    color: STYLES.lightGray,
  },
  textWarning:{
    color: STYLES.red,
  },
  textHighlight:{
    color: STYLES.orange,
  },
  textLink:{
    color: STYLES.blue,
  },
  textFeeds:{
    color: STYLES.purple,
  },
  textJustifyOne:{
    textAlign:(Platform.OS==='ios')?'justify':'left',
    overflow: 'hidden',
    height: 24,
    fontSize: 16,
  },
  textJustify:{
    textAlign:(Platform.OS==='ios')?'justify':'left',
  },
  lineHeightDefault:{
    lineHeight: 24
  },
  lineHeightBar:{
    lineHeight: 44
  },
});
