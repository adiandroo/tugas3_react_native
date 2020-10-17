/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView, 
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Barang from './Component/Barang';
import Headers from './Component/Headers';

export default class App extends Component {
  
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#86b300"}}>
        <Headers />
        <Text style={{flex:4, backgroundColor:"white"}}>
          <Barang />
        </Text>
      </View>
    );
  }
}