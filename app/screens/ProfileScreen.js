import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {
  Avatar,
  Text,
  Caption,
  Title,
  TouchableRipple,
  Button,
} from 'react-native-paper';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {render} from 'react-dom';
import {color} from 'react-native-reanimated';
import QuestionCardsList from '../QuestionCardsList';
import AnswersCardList from './AnswersCardList';
import EditProfileScreen from './EditProfileScreen';

const AskedRoute = () => (
  <View style={styles.Routes}>
    <View style={styles.questionCountBox}>
      <Text
        style={{
          color: '#000',
          marginLeft: 20,
          marginTop: 13,
          marginBottom: 5,
          fontWeight: '500',
        }}>
        7 Questions
      </Text>
    </View>
    <QuestionCardsList />
  </View>
);
const AnsweredRoute = () => (
  <View style={styles.Routes}>
    <AnswersCardList />
  </View>
);

const renderScene = SceneMap({
  first: AskedRoute,
  second: AnsweredRoute,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: '#fff', marginTop: -20}}
    labelStyle={{color: '#000'}}
    //scrollEnabled="true"
  />
);
function ProfileScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Questions'},
    {key: 'second', title: 'Answers'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image
            style={styles.profileImage}
            source={require('../assets/profilePhoto.jpg')}
            size={90}
            resizeMode={'cover'}
          />
          <View style={{marginLeft: 20}}>
            <Title style={styles.title}>Garvita Nagpal</Title>
            <Caption style={styles.caption}>@JIIT,Noida</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.row}>
          <Entypo name="graduation-cap" size={24} color="#000" />
          <Text style={{color: '#000', marginLeft: 20, marginTop: 2}}>
            CSE Integrated Mtech (19-24)
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" size={24} color="#000" />
          <Text style={{color: '#000', marginLeft: 20, marginTop: 2}}>
            +91-9717535006
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="email" size={24} color="#000" />
          <Text style={{color: '#000', marginLeft: 20, marginTop: 2}}>
            garvita.ngpl@gmail.com
          </Text>
        </View>
      </View>
      {/* <View style={styles.questionsInfoBoxWrapper}>
        <View
          style={[
            styles.questionsInfoBox,
            {
              borderRightColor: '#B4B4B4',
              borderRightWidth: 1.5,
            },
          ]}>
          <TouchableRipple onPress={() => {}}>
            <Title
              style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}
              size={30}>
              12
            </Title>
          </TouchableRipple>

          <Caption style={{color: '#000', fontSize: 12}}>Asked</Caption>
        </View>
        <View style={styles.questionsInfoBox}>
          <TouchableRipple onPress={() => {}}>
            <Title
              style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}
              size={30}>
              56
            </Title>
          </TouchableRipple>
          <Caption style={{color: '#000', fontSize: 12}}>Answered</Caption>
        </View>
      </View> */}
      {/* <View style={styles.menuWrap}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menu}>
            <Ionicons name="information-circle" size={35} color="#daa520" />
            <Text style={styles.menuText}>About us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menu}>
            <MaterialIcons name="logout" size={35} color="#daa520" />
            <Text style={styles.menuText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View> */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  caption: {
    color: '#000',
    lineHeight: 13,
    fontSize: 14,
    fontWeight: '500',
  },
  // '#323941',
  //#696969
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  menu: {
    color: '#000',
    marginTop: 30,
    marginLeft: 20,
    fontSize: 19,

    flexDirection: 'row',
  },
  menuText: {
    color: '#000',
    marginTop: 5,
    marginLeft: 20,
    fontSize: 19,
    fontWeight: 'bold',
  },
  menuWrap: {
    lineHeight: 15,
    paddingHorizontal: 11,
    paddingVertical: 25,
  },
  profileImage: {
    overflow: 'hidden',
  },
  questionCountBox: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1.25,
  },
  questionsInfoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  questionsInfoBoxWrapper: {
    borderBottomColor: '#000',
    //'#FFD300'
    borderBottomWidth: 1.5,
    borderTopColor: '#0004',
    borderTopWidth: 1.5,
    height: 100,
    flexDirection: 'row',
  },
  routes: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    color: '#000',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 24,
  },
  userInfo: {
    paddingHorizontal: 30,
    marginTop: 5,
    marginBottom: 30,
  },
});

export default ProfileScreen;
