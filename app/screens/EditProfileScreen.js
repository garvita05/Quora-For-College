import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import {colorsDark} from 'react-native-elements/dist/config';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = () => {
  const [image, setImage] = useState(null);
  const takePhotoFromCamera = async () => {
    let _image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  const takePhotoFromLibrary = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  const renderInner = () => {
    return (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={takePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  };

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={{flex: 1}}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        // ref={this.bs}
        // snapPoints={[330, 0]}
        // renderContent={this.renderInner}
        // renderHeader={this.renderHeader}
        // initialSnap={1}
        // callbackNode={this.fall}
        // enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          flex: 1,
          opacity: Animated.add(1.0, Animated.multiply(fall, 1.0)),
        }}>
        <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <ImageBackground
              source={require('../assets/profilePhoto.jpg')}
              style={{height: 100, width: 100, activeOpacity: 0.5}}
              imageStyle={{borderRadius: 15}}>
              <Image
                source={{uri: image}}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Ionicons
                  name="ios-camera-outline"
                  size={38}
                  color="white"
                  style={{justifyContent: 'center', alignItems: 'center'}}
                />
              </View>
            </ImageBackground>
            <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 18}}>
              Garvita Nagpal
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <Feather
            name="phone"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <Fontisto
            name="world-o"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="location-outline"
            size={20}
            color="black"
            style={{marginRight: 10, marginTop: 2}}
          />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.inputText}></TextInput>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
          <Text style={styles.submitButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    padding: 20,
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  submitButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  inputText: {
    marginLeft: 5,
    margin: 0.5,
    color: '#05375a',
  },
  inputWrapper: {
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row',
    borderBottomWidth: 0.75,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  submitButtonTitle: {
    color: '#fff',
    fontSize: 17,
  },
});
