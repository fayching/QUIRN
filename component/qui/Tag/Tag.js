
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Icon from "../Icon/Icon";
import Styles from './Tag.css';
export const TypeName = ['default','iconfont','text'];
/**
 * Tag Component
 * @example
 * <Tag name="tagPop" />
 * <Tag name="tagFree" value="免费" type="iconfont" />
 */
export default class Tag extends Component {
    constructor(props) {
        super(props);
    };


    /**
     * This is Tag default props.
     * @param {object} props
     * @param {numble} props.name- icon size, just used in  iconType == iconfont
     * @param {string} props.name - tag name,control the tag's style
     * @param {string} props.value - the text in tag,default is null
     * @param {string} props.type - tag type,text or iconfont
     */
    static defaultProps = {
        type: 'default',
        value: '',
        name: '',
    };

    static propTypes = {
        name: PropTypes.string||"",
        value: PropTypes.string||"",
        type: PropTypes.oneOf(TypeName),
    };

    render() {
        const {
            name,
            value,
            type,
            ...props
        } = this.props;


        // text tag
        let typeStyle = Styles[name]
        let typeTxtStyle = Styles['txt'+name]
        let typeViewStyle = Styles['view'+name]
        let iconName = 'tag-'+name
        if(type=='text'){
            return(
                <Text
                    style={typeStyle}
                >{value}</Text>
            )
        }
        else if(type=='iconfont' && value==""){
            return(
                <Icon iconType="iconfont" name={iconName} size={32} style={typeStyle}/>
            )
        }
        else if(type == 'iconfont' && value!=""){
            return(
                <View style={typeViewStyle}>
                    <Icon iconType="iconfont" name={iconName} size={32} style={typeStyle}/>
                    <Text style={typeTxtStyle}>{value}</Text>
                </View>
            )
        }


    }
}
