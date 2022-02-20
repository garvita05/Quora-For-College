import React, {useState} from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
//import {Tab} from 'react-native-elements/dist/tab/Tab';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

import {
  HomeStackScreen,
  HubsStackScreen,
  AskStackScreen,
  ExploreStackScreen,
  ProfileStackScreen,
} from './StackScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => {
  const [route, setRoute] = useState('home');
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        listeners={{
          tabPress: (e) => {
            setRoute('home');
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarColor: '#bc8f8f',
          tabBarIcon: () => (
            <Entypo
              name="home"
              size={24}
              color={route === 'home' ? '#000' : '#fff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HubsStack"
        component={HubsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#bc8f8f',
          tabBarIcon: () => (
            <FontAwesome
              name="group"
              size={24}
              color={route === 'hubs' ? '#000' : '#fff'}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRoute('hubs');
          },
        }}
      />
      <Tab.Screen
        name="AskQuestionStack"
        component={AskStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#bc8f8f',

          tabBarIcon: () => (
            <Entypo
              name="squared-plus"
              size={24}
              color={route === 'ask' ? '#000' : '#fff'}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRoute('ask');
          },
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#bc8f8f',
          tabBarIcon: () => (
            <FontAwesome
              name="search"
              size={24}
              color={route === 'explore' ? '#000' : '#fff'}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRoute('explore');
          },
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#bc8f8f',
          tabBarIcon: () => (
            <Ionicons
              name="person"
              size={24}
              color={route === 'profile' ? '#000' : '#fff'}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRoute('profile');
          },
        }}
      />
    </Tab.Navigator>
  );
};

export {MainTabScreen};
