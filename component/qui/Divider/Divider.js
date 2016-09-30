import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    PixelRatio
} from 'react-native';


import Styles from './Divider.css';
/**
 * Divider Component
 */
export default class Divider extends Component {
    /**
     *
     * @param {number} props.left - 左边距
     * @param {number} props.right - 右边距
     */

    constructor(props) {
        super(props);
    }

    static propTypes = {
        left: PropTypes.number,
        right: PropTypes.number
    };

    render() {
        const {
            left,
            right
        } = this.props;

        return (
            <View style={[Styles.divider,left>0 && {
                marginLeft: left
            },right>0 && {
                marginRight: right
            }]} />
        );
    }
}
