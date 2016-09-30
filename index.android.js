/**
 * QUI React Native App
 */
import React, {
    Component,
    PropTypes
 } from 'react';

import {
     StyleSheet,
     View,
     AppRegistry
 } from 'react-native';

import SliderExample from 'component/app/demo/SliderExample';

class QUIRN extends Component {
    render() {

        return(
            <SliderExample />
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('QUIRN', () => QUIRN);
