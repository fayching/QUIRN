import React, {
    Component,
    PropTypes
} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
    Toast,
    Icon,
    Button,
} from '../../qui';

export default class ToastExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toast: {
      }
    };
  }

  pressExchangeSuccess() {
    let newToast = {};
    newToast.type = 'success';
    newToast.value = '点击转发';
    newToast.status = 'show';

    this.state.toast = newToast;

    this.setState(this.state);
  }
  pressExchangeError() {
    let newToast = {};
    newToast.type = 'error';
    newToast.value = '点击转发失败';
    newToast.status = 'show';

    this.state.toast = newToast;

    this.setState(this.state);
  }
  pressInfo() {
    let newToast = {};
    newToast.type = 'info';
    newToast.value = '已加入下载列表';
    newToast.status = 'show';

    this.state.toast = newToast;

    this.setState(this.state);
  }
  pressWarn() {
    let newToast = {};
    newToast.type = 'warn';
    newToast.value = '网络不可用，请查看网络设置。';
    newToast.status = 'show';

    this.state.toast = newToast;

    this.setState(this.state);
  }

  pressDefault() {
    let newToast = {};
    newToast.value = '超级会员只要998';
    newToast.status = 'show';
    newToast.autoHideTime = 4000;

    let leftIcon = <Icon iconType='iconFont' name='tag-svip' size={30} style={{color:'#fff'}} />;
    newToast.leftIcon = leftIcon;

    this.state.toast = newToast;

    this.setState(this.state);
  }
  pressRightPress() {
    let newToast = {};
    newToast.type = 'rightPress';
    newToast.value = '点击右边区域';
    newToast.status = 'show';
    newToast.autoHide = false;

    let rightIcon = <Icon iconType='iconFont' name='close' size={40} style={{color:'#fff'}} />;
    newToast.rightIcon = rightIcon;

    newToast.onPress = ()=> {
      alert('pressRight');
      this.state.toast.status = 'hide';
      this.setState(this.state);
    };

    this.state.toast = newToast;

    this.setState(this.state);
  }

  pressWholePress() {
    let newToast = {};
    newToast.type = 'wholePress';
    newToast.value = '点击所有区域';
    newToast.status = 'show';
    newToast.autoHide = false;
    newToast.style = {backgroundColor: 'rgb(255,234,0)'};
    newToast.fontStyle = {color: 'rgb(0,0,0)'};

    let leftIcon = <Icon iconType='iconFont' name='tag-pop' size={20} style={{color:'#000'}} />;
    newToast.leftIcon = leftIcon;

    let rightIcon = <Icon iconType='iconFont' name='arrow' size={30} style={{color:'#000'}} />;
    newToast.rightIcon = rightIcon;

    newToast.onPress = ()=> {
      alert('pressWhole');
      this.state.toast.status = 'hide';
      this.setState(this.state);
    };

    this.state.toast = newToast;

    this.setState(this.state);
  }

  _pressRouter(type){


  }

  _changeState() {
    let newToast = Object.assign({}, this.state.toast);

    newToast.status = 'hide';

    this.state.toast = newToast;

    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          automaticallyAdjustContentInsets={false}
        >
          <Button
            style={[styles.list]}
            type="primary"
            size="large"
            value="点击转发"
            onPress={()=> {
              this.pressExchangeSuccess();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            type="danger"
            size="large"
            value="点击转发"
            onPress={()=> {
              this.pressExchangeError();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            size="large"
            value="下载文件"
            onPress={()=> {
              this.pressInfo();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            size="large"
            value="警告状态"
            onPress={()=> {
              this.pressWarn();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            size="large"
            value="自定义状态"
            onPress={()=> {
              this.pressDefault();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            size="large"
            value="自定义状态-右边按钮"
            onPress={()=> {
              this.pressRightPress();
            }}
            >
          </Button>
          <Button
            style={[styles.list]}
            size="large"
            value="自定义状态-整体按钮"
            onPress={()=> {
              this.pressWholePress();
            }}
            >
          </Button>
        </ScrollView>
        <View style={styles.toastWrapper}>
          <Toast
            style={this.state.toast.style}
            fontStyle={this.state.toast.fontStyle}
            type={this.state.toast.type}
            value={this.state.toast.value}
            status={this.state.toast.status}
            autoHide={this.state.toast.autoHide}
            autoHideTime={this.state.toast.autoHideTime}
            leftIcon={this.state.toast.leftIcon}
            rightIcon={this.state.toast.rightIcon}
            onPress={this.state.toast.onPress}
            hideCallBack={()=>{this._changeState.call(this);}}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    flexDirection: 'column',
    flex: 1
  },
  toastWrapper: {
    position: 'absolute',
    top: -45,
    left: 0,
    right: 0,
  },
  scrollView: {
    flex: 1,
    paddingTop: 20
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
  }
});
