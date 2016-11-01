'use strict';
import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

import styles from './GridCell.css';


export default class GridCell extends React.Component{
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        imgType: 'square',
        primaryTextLines: 1,
        subTextLines: 1,
    };
    static propTypes = {
        elementStyles: PropTypes.object,
        width: PropTypes.number,
        spacing: PropTypes.number,
        imgType: PropTypes.oneOf(['square','vertical','horizontal']),
        imgRatio: PropTypes.number,
        imgUri: PropTypes.string,
        primaryText: PropTypes.string,
        primaryTextLines: PropTypes.number,
        subText: PropTypes.string,
        subTextLines: PropTypes.number,

    };
    render = () => {
        const {
            style,
            width,
            imgUri,
            primaryText,
            primaryTextLines,
            subText,
            subTextLines,
            spacing,
            imgType,
            imgRatio,
            elementStyles,
        } = this.props;
        let imgHeight;
        let ratio = imgRatio;
        if(imgType=='square'){
            ratio = 1;
        }else if (imgType&&imgType=='vertical') {
            ratio = 7/10;
        }else if (imgType&&imgType=='horizontal') {
            ratio = 10/7;
        }
        imgHeight = width * ratio;
        return (
            <TouchableHighlight underlayColor={'#e5e6e7'} onPress={this._onPress}>
                <View style={[{marginRight: spacing},style]} >
                    {imgUri && <Image style={[styles.img,{width: width}, {height: imgHeight}, elementStyles && elementStyles.img]} source = {{uri: imgUri}}/>}
                    {primaryText && <Text style={[styles.primaryText,elementStyles && elementStyles.primaryText]} numberOfLines={primaryTextLines}>{primaryText}</Text> }
                    {subText &&  <Text style={[styles.subText, elementStyles && elementStyles.subText]} numberOfLines={subTextLines}>{subText}</Text> }
                    {this.props.children}
                </View>
            </TouchableHighlight>
        )
    }
}
