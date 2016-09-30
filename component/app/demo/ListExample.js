import React, {
    Component,
    PropTypes
} from 'react';
import  {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView
} from 'react-native';

import Data from './DataSource';
import {
    Avatar,
    ListCell,
    Divider,
    Icon,
    Button,
} from '../../qui';

export default class ListExample extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentDidMount() {
        this.appInit();
    }

    appInit(){
        var that = this;
        that.setState({
            dataSource: that.state.dataSource.cloneWithRows(Data)
        });
    }


    _renderRow(rowData: string, sectionID: number, rowID: string) {
        let leftIcon = rowData.avatar==null ? null : <Avatar src={rowData.avatar} size={rowData.size}/>;
        return (
            <ListCell
                leftIcon={leftIcon}
                captionText={rowData.captionText}
                primaryText={rowData.primaryText}
                primaryTextLines={rowData.primaryTextLines}
                subText={rowData.subText}
                subTextLines={rowData.subTextLines}
                rowID={rowID}
                total={this.state.dataSource._cachedRowCount}
                isListBorder={true}
                rightIcon={
                   rowData.badge && (<View style={styles.badge}><Text style={styles.badgeText}>{rowData.badge}</Text></View>) ||

                   rowData.dot &&   (<View style={styles.dot}></View>) ||

                   rowData.arrow && rowData.button && (<View style={{flexDirection:'row', alignItems: 'center',}}><Button theme="default" value={rowData.button} /><Icon name="arrow" /></View>) ||

                   rowData.button && (<Button theme="default" value={rowData.button} />) ||

                   rowData.arrow && (<View style={{flexDirection:'row', alignItems: 'center'}}><Text style={{fontSize:16,marginRight:5}}>{rowData.action}</Text><Icon name="arrow" /></View>) ||

                   rowData.action && (<Text style={{fontSize:16}}>{rowData.action}</Text>)

                }
            />
        );
    }


    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }
}



const styles = StyleSheet.create({

    dot: {
        width:8,
        height:8,
        borderRadius:4,
        backgroundColor:'red'
    },
    badge:{
        borderRadius:8,
        backgroundColor:'red',
        height:16,
        overflow:'hidden',
    },
    badgeText: {
        fontSize:11,
        paddingTop:1,
        color:'#fff',
        paddingLeft:6,
        paddingRight:6,
        textAlign:'center'
    },

});
