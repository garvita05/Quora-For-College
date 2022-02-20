import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './app/screens/DrawerNavigator';

const Drawer = createDrawerNavigator();

function Ooro() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Ooro;
