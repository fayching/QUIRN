
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Platform,
    Text,
    Image,
} from 'react-native';

import {
    Icon,
} from '../../qui';

// import iconfont from "./../font/FontIconQuiConf";

// const tmpImg = require('./newgame.svg');
// import Svg, {
//     Circle,
//     Rect,
//     Path,
//     Line,
//     G,
//     Polygon
// } from 'react-native-svg';


export default class  IconExample extends Component {


    render() {
        return (
            <View style={styles.container}>

                <Icon name="arrow" />

                <Icon iconType="iconfont" name="arrow" />
                <Icon iconType="iconfont" name="arrow" size={60}/>
                <Icon iconType="iconfont" name="arrow" color={"#ff4444"}/>
                <Icon iconType="iconfont" name="arrow" style={{backgroundColor:"#000",color:"#fff"}}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS === 'ios') ? 30 : 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    row: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    list: {
        marginTop: 5,
        marginBottom: 5,
    }
});
