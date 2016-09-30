import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet
} from 'react-native';

import Platform from 'Platform';
import Dimensions from 'Dimensions';


const deviceSize = Dimensions.get('window');
const distance = deviceSize.width <= 320 ? 10 : 15;

module.exports = require('react-native').StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: distance
    },

    leftIcon: {
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10
    },

    rightContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: distance,
        paddingTop: 10,
        paddingBottom: 10
    },

    rightIcon: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginRight: distance
    },
    primaryTextContainer: {
        justifyContent: 'center',
    },
    primaryText: {
        fontSize: 16
    },

    subText: {
        fontSize: 14,
        lineHeight: 21
    },

    subTextMore: {
        fontSize: 12,
        lineHeight: 18,
        color: '#a6a6a6'
    },
    subTitleContainer: {
        height: 21,
        justifyContent: 'center'
    },
    captionText: {
        fontSize: 14,
        color: '#777',
        justifyContent: 'center'

    }
});
