
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        paddingLeft: 0
    },

    leftIcon: {
        marginTop: 12,
        marginRight: 12,
        marginBottom: 12
    },
    noSpace: {
        marginTop: 0,
        marginRight: 12,
        marginBottom: 1
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
    },

    rightIcon: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginRight: 0
    },
    primaryTextContainer: {
        justifyContent: 'center',
    },
    primaryText: {
        fontSize: 16
    },

    subText: {
        fontSize: 14,
        lineHeight: 18
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
