import React, {
     Component,
     PropTypes
 } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    Layout,
    SubHeader,
} from '../../qui';


//定义一个默认半径为30，颜色为#527fe4的圆组件
class Circle extends Component{
    render() {
        return(

           <View style={{backgroundColor:'#527fe4',borderRadius:10 ,height:20,width:20,margin:1}}/>
        );
    }
}



//定义一个数组放置5个圆
var children = [<Circle/>,<Circle/>,<Circle/>,<Circle/>];

export default class LayoutExample extends Component{

    render() {
    	return(
				<View  style={{marginTop: 40}}>
                    <SubHeader text="leftTop"/>
                    <View style={[Layout.leftTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>centerTop</Text>
                    <View style={[Layout.centerTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightTop</Text>
                    <View style={[Layout.rightTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>leftCenter</Text>
                    <View style={[Layout.leftCenter,demostyle.container]}>
                      {children}
                    </View>
                    <Text>center</Text>
                    <View style={[Layout.center,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightCenter</Text>
                    <View style={[Layout.rightCenter,demostyle.container]}>
                      {children}
                    </View>
                    <Text>leftBottom</Text>
                    <View style={[Layout.leftBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>centerBottom</Text>
                    <View style={[Layout.centerBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightBottom</Text>
                    <View style={[Layout.rightBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>spaceBetween</Text>
                    <View style={[Layout.spaceBetween,demostyle.container]}>
                      {children}
                    </View>
                    <Text>spaceAround</Text>
                    <View style={[Layout.spaceAround,demostyle.container]}>
                      {children}
                    </View>
                    <Text>flexWrap: wrap</Text>
                    <View style={[Layout.flexWrap,demostyle.container]}>
                      {children}{children}{children}{children}
                    </View>
                    <Text>flexWrap: nowrap</Text>
                    <View style={[Layout.flexNoWrap,demostyle.container]}>
                      {children}{children}{children}{children}
                    </View>
					<Text>alignSelf</Text>
					<View style={{flexDirection:'row',height:50,borderColor: 'red',borderWidth: 1,justifyContent: 'space-between'}}>
    			        <View style={{alignSelf:'flex-start'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-end'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'center'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-end'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-start'}}>
    				        <Circle/>
    				      </View>
				      </View>

			      </View>

		);
    }
}
const demostyle = StyleSheet.create({
    container: {
        height: 50,
    }
});
