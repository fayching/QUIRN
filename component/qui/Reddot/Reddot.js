
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Styles from "./Reddot.css";
/**
 * Reddot Component
 * @example
 * <Reddot name="sReddot" value="内容内容"/>
 */
export default class Reddot extends Component {
    constructor(props) {
        super(props);
    };


    /**
     * This is Reddot default props.
     * @param {object} props
     * @param {string} props.name - reddot name,control the reddot's style
     * @param {string} props.value - the text in reddot,default is null
     */
    static defaultProps = {
        value: '',
        name: 'default',
    };

    static propTypes = {
        name: PropTypes.string||"",
        value: PropTypes.string||"",
    };

    render() {
        const {
            name,
            value,
            ...props
        } = this.props;

        let typeStyle = Styles[name+'Reddot']
        let typeTxtStyle = Styles[name+'Text']
        let typeViewStyle = Styles['defaultView']

        if(value==""){
            return(
                <View style={typeStyle}></View>
            )
        }else{
            return(
                <View style={typeViewStyle}>
                    <Text style={typeTxtStyle}>{value}</Text>
                    <View style={typeStyle}></View>
                </View>
            )
        }
    }
}
