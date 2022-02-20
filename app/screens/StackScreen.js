import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import ProfileScreen from './ProfileScreen';
import {FontAwesome5} from '@expo/vector-icons';
import {
  SafeAreaView,
  View,
  StatusBar,
  Button,
  TouchableHighlightBase,
  Text,
  Alert,
  Pressable,
  Modal,
} from 'react-native';

import EditProfileScreen from './EditProfileScreen';
import SharePostScreen from './SharePostScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Entypo} from '@expo/vector-icons';
import AskScreen from './AskScreen';
import HomeScreen from './HomeScreen';
import HubsScreen from './HubsScreen';
import ExploreScreen from './ExploreScreen';
import IeeeScreen from './IeeeScreen';
import DscScreen from './DscScreen';
import JycScreen from './JycScreen';
import AiesecScreen from './AiesecScreen';
import {TouchableRipple} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Octicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import SearchBarCustom from '../components/SearchBarCustom';
import ImageBrowser from '../screens/ImageBrowserScreen';
import {fonts} from 'react-native-elements/dist/config';
import NssScreen from './NssScreen';

const HomeStack = createStackNavigator();
const HubsStack = createStackNavigator();
const AskStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <HomeStack.Navigator>
      {/* screenOptions={{
        headerTitle: {() => <SearchBarCustom />
        // headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#fff',
          // shadowColor: '#fff',
          // elevation: 0,
        },
        //headerTintColor: 'black',
      }} */}
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          header: ({navigation}) => <SearchBarCustom />,
          headerStyle: {},

          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
          //     <View>
          //       <Avatar.Image
          //         source={require('../assets/profilePhoto.jpg')}
          //         size={35}
          //         style={styles.profileImage}
          //       />
          //     </View>
          //   </TouchableOpacity>
          // ),
          // headerRight: () => <SearchBarCustom />,
        }}
      />
      <HomeStack.Screen
        name="SharePost"
        component={SharePostScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontWeight: '',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <MaterialIcons
                name="cancel"
                size={25}
                color="black"
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                Alert.alert('Shared', 'Post added to your feed', [
                  {
                    text: 'Dismiss',
                    onPress: () => console.log('Dismiss Pressed'),
                    style: 'cancel',
                  },
                ]);
              }}>
              <Text
                style={{
                  marginRight: 12,
                  fontWeight: 'bold',
                  color: '#0096FF',
                  fontSize: 16,
                }}>
                Share
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="ImageBrowser"
        component={ImageBrowser}
        options={{
          title: 'Selected 0 files',
        }}
      />
    </HomeStack.Navigator>
  );
};

export {HomeStackScreen};

const HubsStackScreen = ({navigation}) => {
  return (
    <HubsStack.Navigator
      screenOptions={{
        headerStyle: {
          //shadowColor: '#fff',
          elevation: 0,
          borderBottomColor: '#000',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginTop: 10,
        },
        // headerTintColor: 'black',
      }}>
      <HubsStack.Screen
        name="Hubs"
        component={HubsScreen}
        options={{
          title: 'Community',
          headerLeft: () => (
            <View style={{marginLeft: 11, backgroundColor: '#fff'}}>
              <Entypo
                name="menu"
                size={25}
                color="#000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
      <HubsStack.Screen
        name="IEEE"
        component={IeeeScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        }}
      />
      <HubsStack.Screen
        name="DSC"
        component={DscScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        }}
      />
      <HubsStack.Screen
        name="JYC"
        component={JycScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        }}
      />
      <HubsStack.Screen
        name="AIESEC"
        component={AiesecScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        }}
      />
      <HubsStack.Screen
        name="NSS"
        component={NssScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        }}
      />
    </HubsStack.Navigator>
  );
};

export {HubsStackScreen};

const AskStackScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onAdd = () => {
    return (
      <Modal visible={modalVisible}>
        <View style={{height: '20%', width: '80%', backgroundColor: '#fff'}}>
          <Text>Added to your feed</Text>
        </View>
      </Modal>
    );
  };
  return (
    <AskStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          //shadowColor: '#fff',
          elevation: 0,
        },
        // headerTintColor: 'black',
      }}>
      <AskStack.Screen
        name="Ask"
        component={AskScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 11, backgroundColor: '#fff'}}>
              <Entypo
                name="menu"
                size={25}
                color="#000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10, backgroundColor: '#fff'}}>
              <View
                style={{
                  backgroundColor: '#0F52BA',
                  paddingHorizontal: 16,
                  paddingVertical: 7,
                  borderRadius: 40,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 'bold',
                      borderRadius: 20,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Congrats! You just asked a question.
                      </Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Dismiss</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          ),
        }}
      />
    </AskStack.Navigator>
  );
};
export {AskStackScreen};

const ExploreStackScreen = ({navigation}) => {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          //shadowColor: '#fff',
          elevation: 0,
        },
        // headerTintColor: 'black',
      }}>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 11, backgroundColor: '#fff'}}>
              <Entypo
                name="menu"
                size={25}
                color="#000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </ExploreStack.Navigator>
  );
};

export {ExploreStackScreen};

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        //headerTintColor: 'black',
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <View style={{marginLeft: 11, backgroundColor: '#fff'}}>
              <Entypo
                name="menu"
                size={25}
                color="#000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10, backgroundColor: '#fff'}}>
              <TouchableRipple>
                <MaterialCommunityIcons
                  name="account-edit"
                  size={30}
                  color="black"
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </TouchableRipple>
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{title: 'Edit'}}
      />
    </ProfileStack.Navigator>
  );
};

export {ProfileStackScreen};

const styles = StyleSheet.create({
  profileImage: {
    marginLeft: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#0F52BA',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
