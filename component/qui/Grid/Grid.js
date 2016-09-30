import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Row extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
    };
    static propTypes = {
    };
    state = {};
	render = () => {
		return (
			<View style={{flexDirection: 'row'}}>
				{this.props.children}
			</View>
		)
	};
}

export default class Grid extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
    };
    static propTypes = {
    };
    state = {};

	render = () => {
        function isFullRow(){

            let span = 0;
            row.map(col => {span += col.props.span;});
            if(span <= 100 && span>=99) return true;
            return false;
        };
		let children = this.props.children;

		children = Array.isArray(children)?children:[children];

		let row = [];
		let rows = [];
        let fill = 0;

		children.map((col, index) => {

			row.push(col);

			if(isFullRow()){
				rows.push(row);
				row = [];
			}

		});
        if(row.length){
            fill = 100;
            row.map(col => {fill = fill - col.props.span;});
            rows.push(row);
        }
        return (
			<View>
				{rows.map((_row, index) =>{
        			return (
        				<Row key={index}>
        					{_row.map(col=> col)}
                            {fill && rows.length == index + 1 && <View style={{ flex: fill }}></View>}
        				</Row>
        			)
        		})}
			</View>
		);


		// if(GridComponent.length>1){
		// 	return (
		// 		<View style={this.props.style}>
		// 			{GridComponent}
		// 		</View>
		// 	);
		// }else if(GridComponent.length===1){
		// 	return GridComponent[0];
		// }else{
		// 	return null;
		// }

	}
}
