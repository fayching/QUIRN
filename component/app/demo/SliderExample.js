import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import {
    Slider,
} from '../../qui';

var sliderImgs = [
    'http://imgcache.gtimg.cn/club/mobile/profile/comic_center/public/general_8654a33f7e939d55135e85b700301f32.jpg?max_age=31536000',
    'http://imgcache.gtimg.cn/club/mobile/profile/comic_center/public/general_86bdd9f6c69a425c6713964d6911e1c7.jpg?max_age=31536000',
    'http://imgcache.gtimg.cn/club/mobile/profile/comic_center/public/general_dd0865cb85ba25e83b569a28bfd95233.jpg?max_age=31536000',
    'http://imgcache.gtimg.cn/club/mobile/profile/comic_center/public/general_00905beacd20e0979096b433897ee5d9.jpg?max_age=31536000',
];

export default class SliderExample extends Component{
    render() {
        return (
          <Slider aspectRatio={.5}>
                <Image source={{uri: sliderImgs[0]}}></Image>
                <Image source={{uri: sliderImgs[1]}}></Image>
                <Image source={{uri: sliderImgs[2]}}></Image>
                <Image source={{uri: sliderImgs[3]}}></Image>
                <Image><Text>图片轮播</Text></Image>
                <View><Text>图片轮播</Text></View>
          </Slider>
        )
  }
}
