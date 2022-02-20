import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {KeyboardAvoidingView} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function AskScreen() {
  const [image, setImage] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Public',
      value: 'Public',
      icon: () => (
        <MaterialIcons name="people-outline" size={13} color="black" />
      ),
    },
    {
      label: 'Private',
      value: 'Private',
      icon: () => <Ionicons name="person-outline" size={13} color="black" />,
    },
  ]);
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
      setGalleryImage(_image.uri);
    }
  };

  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView
      style={[styles.container, {minHeight: Math.round(windowHeight)}]}>
      <View style={{flexDirection: 'row'}}>
        <Avatar.Image
          source={require('../assets/profilePhoto.jpg')}
          size={30}
          style={styles.profileImage}
        />
        <Text
          style={{
            fontSize: 13,
            color: '#a9a9a9',
            fontWeight: 'bold',
            marginTop: 6,
            marginLeft: 8,
          }}>
          Garvita Nagpal asked
        </Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Public"
          style={{
            width: '28%',
            height: '20%',
            borderTopColor: '#000',
            borderTopWidth: 0.25,
            borderBottomColor: '#000',
            borderLeftColor: '#000000',
            borderRightColor: '#000000',
            backgroundColor: '#dcdcdc',
            // borderColor: '#a9a9a9',
            marginLeft: 10,
            marginTop: 0,

            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
          }}
          dropDownContainerStyle={{
            width: '28%',
            backgroundColor: '#dcdcdc',
            marginLeft: 10,
            marginTop: 0,
            borderRadius: 10,
          }}
          placeholderStyle={{
            color: '#a9a9a9',
            fontWeight: 'bold',
            fontSize: 12,
            marginRight: -100,
          }}
          arrowIconStyle={{marginLeft: -20}}
          labelStyle={{fontSize: 12}}
          listItemLabelStyle={{fontSize: 12}}
        />
      </View>

      <TextInput
        multiline
        placeholder="Start your question with what, how, why etc. "
        placeholderTextColor="#a9a9a9"
        style={{
          fontSize: 19,
          marginLeft: 20,
          marginTop: -100,
          marginBottom: 20,

          borderBottomColor: 'gray',
        }}

        // inputCon={{
        //   marginTop: 10,
        //   flexDirection: 'row',
        //   alignSelf: 'center',
        //   width: '96%',
        //   marginLeft: 10,
        //   marginRight: 2,
        //   marginBottom: 10,
        //   minHeight: 50, //... For dynamic height
        //   borderRadius: 50,
        //   backgroundColor: 'transparent',
        //   borderWidth: 1,
        //   borderColor: 'gray',

        //   // paddingLeft: 10, //... With respect to the min height, so that it doesn't cut
        //   // paddingTop: -20, //... With respect to the min height, so that it doesn't cut
        //   // paddingBottom: 10, //... With respect to the min height, so that it doesn't cut
        // }}
        // style={{
        //   fontSize: 20,
        //   marginLeft: 20,
        //   marginTop: -50,
        //   marginRight: 20,
        //   borderBottomWidth: 0.25,
        //   borderBottomColor: '#989898',
        // }}
      />
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        {image === null ? null : (
          <View style={{marginRight: 2}}>
            <Image
              source={{uri: image}}
              style={{height: 50, width: 50}}
              imageStyle={{borderRadius: 15}}
              size={2}
            />
          </View>
        )}
        {galleryImage === null ? null : (
          <View>
            <Image
              source={{uri: galleryImage}}
              style={{height: 50, width: 50}}
              imageStyle={{borderRadius: 15}}
              size={15}
            />
          </View>
        )}
      </View>
      <View
        style={{
          height: '10%',
          width: '100%',
          borderTopWidth: 0.25,
          borderTopColor: 'grey',
          borderBottomWidth: 0.25,
          borderBottomColor: 'grey',
          marginTop: 70,
          flexDirection: 'row',
          marginTop: 150,
        }}>
        <View
          style={{
            borderRightWidth: 0.25,
            borderRightColor: 'grey',
            width: '50%',
            height: '100%',
            paddingHorizontal: 69,
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <Entypo name="camera" size={50} color="#d3d3d4" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
            paddingHorizontal: 69,
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={takePhotoFromLibrary}>
            <FontAwesome5 name="images" size={50} color="#d3d3d4" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImage: {
    marginLeft: 20,
  },
});
