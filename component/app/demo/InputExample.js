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
    Input,
    Icon,
    Border,
} from '../../qui';


export default class InputExample extends Component{

  onFocus() {
    alert("获得焦点嘿嘿ಠ౪ಠ");
  }

  onChangeText() {
    alert("文字改变啦");
  }

  onBlur() {
    alert("失去焦点=-=")
  }

  render() {
    return (

        <View style={styles.container}>
          <Input placeholder={'这里是提示'} closeType='normal' />

          <View style={styles.inputGroup}>
            <Input placeholder={'这里是提示'} label={'姓名'} labelStyle={styles.labelStyle} labelTextCount={4} inputBorderTop={false} />
            <Input placeholder={'这里是提示'} label={'公司地址'} inputBorderTop={false} />
            <Input placeholder={'这里是提示'} label={'电话号码'} inputBorderTop={false} inputBorderBottom={false} keyboardType={'numeric'} />
          </View>

          <View style={styles.inputGroup}>
            <Input placeholder={'自定义方法的输入框'} onFocus={ this.onFocus } />
            <Input placeholder={'自定义样式的输入框'}
                   inputBorderTop={false}
                   inputStyle={[styles.customInput,Border.borderLeft,Border.borderRight]}
                   textStyle={styles.customText}
            />
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    backgroundColor: '#f7f7f8',
  },
  inputGroup: {
    marginTop: 20,
  },
  customInput: {
    width: 250,
  },
  customText: {
    fontSize: 16,
    color: '#12b7f5',
  },
  labelStyle: {
    color: '#12b7f5',
    textAlign: 'right',
  }
})
