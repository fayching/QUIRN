import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    PixelRatio
} from 'react-native';

import {
    Avatar,
    Icon,
    Button,
    Layout,
} from '../../qui';

export default class ButtonExample extends Component{
    longPress(){
        alert("你按了好久啊");
    }
    onPress(){
        alert("别碰我！");
    }
    onPressOut(){
        alert("你还是离开了！");
    }
    // 构造
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button value="确定">
                        <Icon childpos="before" name="search" />
                        <Icon childpos="beforePress" name="close" />
                    </Button>
                    <Button value="确定" disabled={true}>
                        <Icon childpos="after" name="close" />
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button value="确定" />
                    <Button value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button type="tips" value="确定" />
                    <Button type="tips" value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button type="primary" value="确定" />
                    <Button type="primary" value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button type="danger" value="确定"></Button>
                    <Button type="danger" value="确定" disabled={true} />
                </View>
                <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                    <Button type="progress" value="下载中"></Button>
                    <Button value="下载中" disabled={true}></Button>
                </View>
                <View style={[styles.row, {backgroundColor:'#333',paddingTop:10,paddingBottom:10}]}>
                    <Button type="highlight" value="确定" />
                    <Button type="highlight" value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button size="middle" value="立即获取" />
                </View>
                <View style={styles.row}>
                    <Button size="large" value="拒绝" />
                    <Button type="tips" size="large" value="同意" />
                </View>
                <View>
                    <Button style={styles.list} type="default" size="large" value="确认提交" onLongPress={ this.longPress } >
                        <Avatar childpos="before" src={'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'} size={24}></Avatar>
                    </Button>
                    <Button style={styles.list} type="default" size="large" value="已提交" disabled={true}>
                    </Button>
                    <Button style={styles.list} type="danger" size="large" value="按下后不准离开" onPressOut={ this.onPressOut } />
                    <Button
                        style={[styles.list, {backgroundColor: '#333',borderColor:'#333'}]}
                        textStyle={{color: 'rgba(255,255,255,.5)'}}
                        activeStyle={{backgroundColor: '#222',borderColor:'#222'}}
                        activeTextStyle={{color: 'rgba(255,255,255,.3)'}}
                        size="large"
                        value="自定义碰我吧"
                        onPress={ this.onPress }
                        >
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle" size="large" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle" size="large" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle-outline" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle-outline" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle-outline" size="large" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle-outline" size="large" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
  }
});
