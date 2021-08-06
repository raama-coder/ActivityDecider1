import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class ActivityEditor extends Component {
  render() {
    return (
      <View>
        <Text>Activity Editor</Text>
      </View>
    );
  }
}