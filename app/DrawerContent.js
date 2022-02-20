import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {NavigationContext, useNavigation} from '@react-navigation/native';

function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Home"
        labelStyle={{color: '#000'}}
        onPress={() => navigation.navigate('HomeStack')}
        icon={() => <Entypo name="home" size={24} color="#000" />}
      />
      <DrawerItem
        label="Community"
        labelStyle={{color: '#000'}}
        onPress={() => navigation.navigate('HubsStack')}
        icon={() => <FontAwesome name="group" size={24} color="#000" />}
      />
      <DrawerItem
        label="Ask"
        labelStyle={{color: '#000'}}
        onPress={() => navigation.navigate('AskQuestionStack')}
        icon={() => <Entypo name="squared-plus" size={24} color="#000" />}
      />
      <DrawerItem
        label="Explore"
        labelStyle={{color: '#000'}}
        onPress={() => navigation.navigate('ExploreStack')}
        icon={() => <FontAwesome name="search" size={24} color="#000" />}
      />
      <DrawerItem
        label="Profile"
        labelStyle={{color: '#000'}}
        onPress={() => navigation.navigate('ProfileStack')}
        icon={() => <Ionicons name="person" size={24} color="#000" />}
      />

      <DrawerItem
        label="Log Out"
        labelStyle={{color: '#000'}}
        icon={() => (
          <MaterialIcons
            name="logout"
            size={22}
            color="#000"
            style={{marginLeft: 5}}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
