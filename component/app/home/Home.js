
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    ScrollView,
    NavigatorIOS,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Image,
    Dimensions,
    PixelRatio,
    Animated,
    Easing
} from 'react-native';

import ButtonExample from '../demo/ButtonExample';
import TypeExample from '../demo/TypeExample';
import ListExample from '../demo/ListExample';
import LayoutExample from '../demo/LayoutExample';
import IconExample from '../demo/IconExample';
import GridExample from '../demo/GridExample';
import ToastExample from '../demo/ToastExample';
import ActionSheetExample from '../demo/ActionSheetExample';
import InputExample from '../demo/InputExample';
import SliderExample from '../demo/SliderExample';


import {
    Typo,
    Icon,
    SubHeader,
} from '../../qui';


const exampleList = [
    {
        "com": ButtonExample,
        "title": "Button",
        "img": require('../../../image/button.png')
    },
    {
        "com": ListExample,
        "title": "List",
        "img": require('../../../image/cell.png')
    },
    {
        "com": ToastExample,
        "title": "Toast",
        "img": require('../../../image/toast.png')
    },
    {
        "com": LayoutExample,
        "title": "Layout",
        "img": require('../../../image/dialog.png')
    },
    {
        "com": LayoutExample,
        "title": "Progress",
        "img": require('../../../image/progress.png')
    },
    {
        "com": LayoutExample,
        "title": "Message",
        "img": require('../../../image/msg.png')
    },
    {
        "com": LayoutExample,
        "title": "Article",
        "img": require('../../../image/article.png')
    },
    {
        "com": ActionSheetExample,
        "title": "ActionSheet",
        "img": require('../../../image/actionsheet.png')
    },
    {
        "com": IconExample,
        "title": "Icon",
        "img": require('../../../image/icons.png')
    },
    {
        "com": LayoutExample,
        "title": "Panel",
        "img": require('../../../image/panel.png')
    },
    {
        "com": LayoutExample,
        "title": "Tab",
        "img": require('../../../image/tab.png')
    },
    {
        "com": LayoutExample,
        "title": "Layout",
        "img": require('../../../image/searchbar.png')
    },
    {
        "com": SliderExample,
        "title": "Slider",
        "img": require('../../../image/searchbar.png')
    },
    {
        "com": GridExample,
        "title": "Grid",
        "img": require('../../../image/searchbar.png')
    },
    {
        "com": InputExample,
        "title": "Input",
        "img": require('../../../image/searchbar.png')
    }
];

class HomeList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(exampleList),
            rotation: new Animated.Value(0),
            animate: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map( () => new Animated.Value(0))
        };
        this._renderRow = this._renderRow.bind(this);
        // 如果不在这里加则需要在用的地方使用bind
        // <ListView
        //     dataSource= {this.state.dataSource}
        //     renderRow= {this._renderRow.bind(this)}
        // />

    };

    render() {
        return (
            <View style={{flex:1,flexDirection:"column"}}>
                <View style={{height:170, flexDirection: 'column', justifyContent:"center", alignItems:"stretch"}}>
                    <Text style={[Typo.default, Typo.lineHeightBar, { fontSize:30, textAlign:"center"}]}>QUI</Text>
                    <Text style={[Typo.default, { color:"#777", textAlign:"center"}]}>让SNG产品体验更统一</Text>
                </View>
                <View style = {{ flex:1 }}>
                    <ListView
                        contentContainerStyle={styles.list}
                        dataSource= {this.state.dataSource}
                        renderRow= {this._renderRow}
                        initialListSize={12}
                        pageSize={12}
                    />
                </View>
            </View>
        )
    };

    _renderRow(rowData: object, sectionID: number, rowID: number) {
        return (
            <TouchableHighlight onPress={ () => this._handlePress(rowID) } style={styles.item} activeOpacity={0.6} underlayColor={'white'}>
                <View >
                    <Animated.Image  source={rowData["img"]}
                                     style={[styles.iconImg,
                                            {transform: [{
                                                rotateY: this.state.animate[rowID].interpolate({
                                                    inputRange: [0,1],
                                                    outputRange: ['0deg', '360deg']
                                                })
                                             }]}
                     ]}  />
                    <Text style={styles.text}>
                        {rowData["title"]}
                    </Text>
                </View>
            </TouchableHighlight>

        )
    };

    componentDidMount() {
        // var timing = Animated.timing;
        // 一起转
        // Animated.parallel(
        //     ['rotation'].map(property => {
        //         return timing(this.state[property], {
        //             toValue: 1,
        //             duration: 2400,
        //             easing: Easing.linear
        //         })
        //     })
        // ).start();

        // 一个一个做动画
        // Animated.sequence([
        //     Animated.stagger(300, this.state.animate.map(rotateY => {
        //         return timing(rotateY, {
        //             toValue:1,
        //             duration: 1000
        //         });
        //     }))
        // ]).start();
        this.startAnimation();

    }

    startAnimation() {
        this.state.animate.map(function(val){
            val.setValue(0);
        });
        var timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(300, this.state.animate.map(rotateY => {
                return timing(rotateY, {
                    toValue:1,
                    duration: 1000
                });
            }))
        ]).start( () => this.startAnimation() );
    }

    _handlePress(rowId) {
        console.log(rowId);
        this.props.navigator.push({
            component: exampleList[rowId]["com"],
            title: exampleList[rowId]["title"],
            wrapperStyle: {paddingTop: 50}
        });
    };
}

export default class Home extends Component{

    render() {
        return (
            <NavigatorIOS
                barTintColor=''
                tintColor='#666'
                titleTextColor="#333"
                style={{flex:1}}
                initialRoute={{
                  component: HomeList,
                  title: "QUI",
                  navigationBarHidden:true,
                  passProps:{}
                }}
            />
            //     <Avatar
				// 	src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"
				// 	size={50}
            //     />
            //     <Icon name="arrow" />
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    text: {
        textAlign:"center"
    },


    list: {
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
        flexDirection: "column",
        justifyContent: 'center',
        padding: 5,
        width: Dimensions.get('window').width / 3,
        height: 120,
        backgroundColor: '#fff',
        alignItems:"center",
        borderTopColor: '#ccc',
        borderTopWidth: 1/PixelRatio.get(),
        borderRightColor: '#ccc',
        borderRightWidth: 1/PixelRatio.get()
    },
    iconImg: {
        width:44,
        height: 40,
        marginBottom: 10
    }


});
