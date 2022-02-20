import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Avatar, Title} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import {Ionicons} from '@expo/vector-icons';

function CommentDropdown() {
  return (
    <View style={styles.container}>
      <View style={styles.userCommentContainer}>
        <Avatar.Image
          source={{uri: 'https://picsum.photos/id/1001/200/300'}}
          size={28}
          style={{marginTop: 4}}
        />
        <View style={styles.userComment}>
          <Title style={styles.userName}>Paddy OverWood</Title>
          <Text multiline style={styles.userCommentText}>
            This turned out great
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 43, marginTop: -5, marginBottom: 5}}>
        <Text style={{color: '#a9a9a9', fontSize: 10}}>14 hours ago</Text>
      </View>

      <View style={styles.userCommentContainer}>
        <Avatar.Image
          source={{uri: 'https://picsum.photos/id/1005/200/300'}}
          size={28}
          style={{marginTop: 4}}
        />
        <View style={styles.userComment}>
          <Title style={styles.userName}>Robin Ratchev</Title>
          <Text multiline style={styles.userCommentText}>
            Lol,great work!
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 43, marginTop: -5, marginBottom: 5}}>
        <Text style={{color: '#a9a9a9', fontSize: 10}}>13 hours ago</Text>
      </View>
      <View style={styles.userCommentContainer}>
        <Avatar.Image
          source={{uri: 'https://picsum.photos/id/1010/200/300'}}
          size={28}
          style={{marginTop: 4}}
        />
        <View style={styles.userComment}>
          <Title style={styles.userName}>Brody Langston</Title>
          <Text multiline style={styles.userCommentText}>
            Love it!
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 43, marginTop: -5, marginBottom: 5}}>
        <Text style={{color: '#a9a9a9', fontSize: 10}}>3 hours ago</Text>
      </View>
      <View style={styles.userCommentContainer}>
        <Avatar.Image
          source={{uri: 'https://picsum.photos/id/1013/200/300'}}
          size={28}
          style={{marginTop: 4}}
        />
        <View style={styles.userComment}>
          <Title style={styles.userName}>Sriram Borja</Title>
          <Text
            multiline
            style={styles.userCommentText}
            numberOfLines={2}
            ellipsizeMode="head">
            I totally agree with you swati.This's the next big thing.
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 43, marginTop: -5, marginBottom: 5}}>
        <Text style={{color: '#a9a9a9', fontSize: 10}}>50 mins ago</Text>
      </View>
      <View style={styles.userCommentContainer}>
        <Avatar.Image
          source={{uri: 'https://picsum.photos/id/1015/200/300'}}
          size={28}
          style={{marginTop: 4}}
        />
        <View style={styles.userComment}>
          <Title style={styles.userName}>Kory Welch</Title>
          <Text multiline style={styles.userCommentText}>
            I need to plan my finances well!
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 43, marginTop: -5, marginBottom: 5}}>
        <Text style={{color: '#a9a9a9', fontSize: 10}}>10 mins ago</Text>
      </View>
      <View
        style={{
          borderTopWidth: 0.7,
          borderTopColor: '#a9a9a9',
          flexDirection: 'row',
        }}>
        <Avatar.Image
          source={require('../assets/profilePhoto.jpg')}
          size={28}
          style={{marginTop: 10}}
        />
        <TextInput
          placeholder="Type any comments..."
          style={{marginLeft: 14, fontSize: 12, marginTop: 11, marginBottom: 0}}
        />
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            name="send"
            size={15}
            color="#009dff"
            style={{marginLeft: 180, marginTop: 15}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CommentDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    marginTop: 10,
    borderRadius: 500,
    marginLeft: 5,
  },
  userComment: {
    flexDirection: 'column',
    backgroundColor: '#eae9e9',
    borderRadius: 10,
    marginTop: -2,
    marginBottom: 7,
    marginLeft: 10,
  },
  userCommentContainer: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 12,
    marginLeft: 7,
    marginRight: 7,
  },
  userCommentText: {
    fontSize: 10,
    marginTop: -7,
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 7,
  },
});
