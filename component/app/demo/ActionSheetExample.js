
import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';

import {
    ActionSheet,
    Button,
} from '../../qui';

const options = [
  {text: '选项1',onPressOut: ()=>{alert('Trigger pressout')}},
  {text: '选项2'},
  {text: '取消关注'},
  {text: '选项3'},
  {text: '取消'},
]

export default class ActionSheetExample extends Component {

  constructor(props) {
    super(props);

  }

  show() {
    this.ActionSheet.showActionSheet()
  }

  render(){
    return (
          <ActionSheet
            ref={(o) => this.ActionSheet = o}
            wrapperStyle={{transform:[{translateY: 0}]}}
            options={options}
            destructiveIndex={2}
            actionsheetType={'special'}
            tipText={'提示文本提示文本'}
           >
             <View style={{marginTop: 70}}>
               <Button
                 type="primary"
                 size="large"
                 style={{marginTop: 5,marginBottom: 5}}
                 value="show ActionSheet"
                 onPress={()=> {
                   this.show();
                 }}
                 />
             </View>
           </ActionSheet>
    )
  }

}
