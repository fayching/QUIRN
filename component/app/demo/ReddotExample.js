
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import {
    Reddot,
} from '../../qui';


export default class  ReddotExample extends Component {


    render() {
        return (
            <ScrollView>
            <View style={styles.flexContainer}>
                <View style={styles.inline}>
                    <Reddot name="default" value='内容内容'/>
                </View>
                <View style={styles.inline}>
                    <Reddot name="s" value='内容内容'/>
                </View>
                <View style={styles.inline}>
                    <Text style={{fontSize:16,lineHeight:22}}>内容内容</Text>
                    <Reddot name="static"/>
                </View>
            </View>
            </ScrollView>
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
    flexDirection:{
        flexDirection:'row',
    },
    inline:{
        flex:1,
        marginBottom:10,
    },
});
