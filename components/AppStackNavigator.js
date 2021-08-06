import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import db from '../Config';
import firebase from 'firebase';

import Decider from '../Screens/ActivityDecider';
import Editor from '../Screens/ActivityEditor';
import Pick from '../Screens/PickScreen';

export const AppStackNavigator = createStackNavigator(
  {
    Decider: {
      screen: Decider,
      navigationOptions: {
        headerShown: false,
      },
    },
    Editor: {
      screen: Editor,
      navigationOptions: {
        headerShown: false,
      },
    },
    Type: {
      screen: Pick,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: 'Decider' }
);
