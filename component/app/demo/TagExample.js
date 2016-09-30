
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Image,
} from 'react-native';
import {
    Tag,
} from '../../qui';

export default class  TagExample extends Component {


    render() {
        return (
            <ScrollView>
            <View style={styles.flexContainer}>
                <View style={styles.inline}>
                    <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                    <Tag value="热" type="iconfont" name="pop"/>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="" type="iconfont" name="svip"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="" type="iconfont" name="vip"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="免费" type="text" name="free"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="限免" type="text" name="freelimit"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="绝版" type="text" name="last"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="限量" type="text" name="limit"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="活动" type="text" name="act"/>
                    </View>
                </View>
                <View style={styles.inline}>
                    <View style={{width: 145,height:80}}>
                        <Image style={{width: 145,height: 80}} source={{uri: 'http://placeholder.qiniudn.com/290x160'}} />
                        <Tag value="星影" type="text" name="xy"/>
                    </View>
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
        marginLeft:10,
    },
});
