import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Image} from 'react-native';
import {Avatar, Caption, Title} from 'react-native-paper';
import {TextInput} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import ViewMoreText from 'react-native-view-more-text';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ImageBrowser from '../screens/ImageBrowserScreen';
import {NavigationContext} from '@react-navigation/native';

const renderViewMore = (onPress) => {
  return (
    <Text onPress={onPress} style={{color: '#989898', marginBottom: 5}}>
      Read More
    </Text>
  );
};

const renderViewLess = (onPress) => {
  return (
    <Text onPress={onPress} style={{color: '#989898', marginBottom: 4}}>
      Hide
    </Text>
  );
};

function SharePost({navigation}) {

  function takePhotoFromCamera() {}
  const takeVideoFromLibrary = async () => {
    let _video = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_video));

    if (!_video.cancelled) {
      setImage(_video.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Avatar.Image
          source={require('../assets/profilePhoto.jpg')}
          size={50}
          style={{marginLeft: 20, marginTop: 8}}
        />
        <View style={{flexDirection: 'column', marginTop: -3}}>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontWeight: '900',
              fontSize: 15,
            }}>
            Garvita Nagpal
          </Text>
          <Caption numberOfLines={2} style={[styles.caption, {marginTop: -4}]}>
            @JIIT,Noida
          </Caption>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          multiline
          placeholder="Yo check this out this is insane, what do you guys think of it? #trending #oorotrending #oorofeed 
          Type any comments.... "
          placeholderTextColor="#A9A9A9"
          style={styles.textInput}
        />
      </View>

      <Card
        style={{
          // borderBottomWidth: 3,
          // borderTopWidth: 3,
          // borderRightWidth: 3,
          // borderLeftWidth: 3,
          marginLeft: 12,
          marginRight: 12,
          borderRadius: 10,
          backgroundColor: '#F5F5F5',
          marginBottom: 15,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image
            source={{uri: 'https://picsum.photos/id/1/200/300'}}
            size={40}
            style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}
            resizeMode={'stretch'}
          />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Title
                style={{
                  fontWeight: 'bold',
                  marginTop: 8,
                  marginLeft: 10,
                  fontSize: 15,
                  marginBottom: 4,
                }}>
                Swati Gupta
              </Title>
            </View>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 11,
                marginTop: -9,
                color: '#767676',
              }}
              numberOfLines={2}>
              Second year Computer Science student at JIIT Noida
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 11,
                marginTop: 0,
                color: '#767676',
              }}>
              (2019-present)
            </Text>
          </View>

          {/* <Card.Title
              title="Garvita Nagpal"
              subtitle=" Third year Computer Science student at JIIT Noida (2019-present)"
              subtitleNumberOfLines={2}
              titleStyle={{fontSize: 15, fontWeight: 'bold', marginBottom: 0}}
              subtitleStyle={{fontSize: 10, marginTop: 0}}
              // left={LeftContent}
            /> */}
        </View>

        <Card.Content>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Why is CoinSwitch Kuber considered the best app to invest in
            cryptocurrencies in India?
          </Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}>
            <Text>
              In ideal cryptocurrency investment platform is expected to be
              SIMPLE, SECURE, and FLEXIBLE.CoinSwitch Kuber was designed with
              the idea to build a simple crypto investment platform that makes
              crypto investment as easy as ordering food online. We have worked
              towards removing all the technicalities involved in crypto
              investing and built a go-to solution for retail investors
            </Text>
          </ViewMoreText>
          <View>
            <Image
              source={require('../assets/cypto.png')}
              style={{
                height: 170,
                width: '100%',
                marginTop: 10,
                marginBottom: 4,
              }}
              resizeMode={'stretch'}
            />
          </View>
        </Card.Content>
      </Card>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: '#A9A9A9',
          borderBottomWidth: 1,
          borderBottomColor: '#A9A9A9',
          borderLeftWidth: 1,
          borderLeftColor: '#A9A9A9',
          borderRightWidth: 1,
          borderRightColor: '#A9A9A9',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: '#A9A9A9',
              width: 200,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ImageBrowser');
              }}>
              <FontAwesome5
                name="camera"
                size={30}
                color="#A9A9A9"
                style={{marginLeft: 10, alignSelf: 'center'}}
              />
              <Text
                style={{marginLeft: 15, color: '#A9A9A9', fontWeight: 'bold'}}>
                Upload Images From Gallery
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 190,
            }}>
            <TouchableOpacity onPress={takeVideoFromLibrary}>
              <FontAwesome
                name="video-camera"
                size={30}
                color="#A9A9A9"
                style={{marginLeft: 10, alignSelf: 'center'}}
              />
              <Text
                style={{
                  marginLeft: 12,
                  marginTop: 2,
                  color: '#A9A9A9',
                  fontWeight: 'bold',
                }}>
                Upload Video From Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SharePost;

const styles = StyleSheet.create({
  caption: {
    marginLeft: 10,
    fontSize: 12,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  inputWrapper: {
    borderBottomWidth: 0.75,
    borderBottomColor: '#A9A9A9',
    height: '18%',
  },
  textInput: {
    marginLeft: 20,
    fontSize: 17,
    marginTop: 15,
    marginBottom: 40,
    fontStyle: 'italic',
    height: '85%',
    position: 'absolute',
    height: '80%',
  },
  userInfo: {
    flexDirection: 'row',
  },
});
