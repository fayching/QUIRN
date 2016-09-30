import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import styles from './SubHeader.css';

/**
 * SubHeader Component
 *
 * @example
 *
 * <SubHeader text="SubHeader"/>
 */
export default class SubHeader extends Component {
    /**
     *
     * @param {object} props
     * @param {string} props.text - SubHeader text.
     * @param {string} [props.primaryColor='rgba(0,0,0,.54)'] - Primary color of SubHeader. Accept a color string such
     * as RGBA,RGB,HEX.
     * @param {boolean} [props.inset=false] - If `true`, SubHeader is aligned with the text content with 72dp paddingLeft.
     * Often with a left-aligned floating action button.
     * @param {enum(THEME_NAME)} [props.theme='light'] - The theme of SubHeader.
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    state = {};

    render = () => {
        const {
            text,
            } = this.props;
        return (
            <View style={[styles.container]}>
                <Text style={[styles.text]}>
                    {text}
                </Text>
                {this.props.children}
            </View>
        );
    }
}
