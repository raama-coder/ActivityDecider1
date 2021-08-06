import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideDrawer from './SideDrawerMenu';
import Decider from '../Screens/ActivityDecider';
import Editor from '../Screens/ActivityEditor';
import Pick from '../Screens/PickScreen';
export const DrawerNavigator = createDrawerNavigator(
  {
    Decider: { screen: Decider },
    Editor: { screen: Editor },
    Pick: { screen: Pick },
  },
  { contentComponent: SideDrawer },
  { initialRouteName: 'Decider' }
);
