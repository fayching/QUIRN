
import React, {
    Component,
    PropTypes
} from 'react';
import  {
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    Dimensions,
} from 'react-native';

import Data from './GridDataSource';

import {
    GridCell,
    Layout,
} from '../../qui';


export default class GridExample extends Component {
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
        let width = Dimensions.get('window').width/3;
        return (

            <GridCell
                imgUri={rowData.imgUri}
                imgType ={'vertical'}
                width = {width - 4}
                spacing = {(rowID+1)%3 == 0 ?  0 :   4}

                primaryText={rowData.primaryText}
                primaryTextLines={1}
                subText={rowData.subText}
                subTextLines={2}
                rowID={rowID}
                total={this.state.dataSource._cachedRowCount}
            />
        );
    }


    render = () => {
        return (
            <ListView contentContainerStyle={Layout.flexWrap}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }
}
