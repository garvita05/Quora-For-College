import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {HomeStackScreen} from '../screens/StackScreen';
import {useNavigation} from '@react-navigation/native';

function SearchBarCustom() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        marginTop: 10,
        marginRight: 25,
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Avatar.Image
          source={require('../assets/profilePhoto.jpg')}
          size={40}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={{marginLeft: 10}}>
        <SearchBar
          round
          placeholder="Search here.."
          placeholderTextColor="#000"
          searchIcon={{size: 15, color: '#000'}}
          containerStyle={{
            backgroundColor: '#fff',
            borderRadius: 75,
            flexDirection: 'row',
            marginRight: 50,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          inputContainerStyle={{height: 25, backgroundColor: '#fff'}}
          inputStyle={{fontSize: 15, color: '#000', marginTop: -2}}
          onChangeText={() => setText({text})}
          value={text}

          // container={{marginTop: 30, padding: 2}}
          // style={{marginRight: 19}}
          // containerStyle={{
          //   backgroundColor: '#000',
          //   borderTopWidth: 0,
          //   borderBottomWidth: 0,
          //   borderWidth: 0,
          //   width: '100%',
          //   height: 50,
          //   borderRadius: 50,
          // }}
          // inputContainerStyle={{
          //   backgroundColor: '#000',
          //   borderTopWidth: 0,
          //   borderBottomWidth: 0,
          //   borderWidth: 0,
          //   borderRadius: 50,
          //   width: 315,
          //   height: 8,
          // }}
          // inputStyle={{
          //   fontSize: 15,
          //   marginTop: 5,
          // }}
        />
      </View>
    </View>
  );
}

export default SearchBarCustom;

const styles = StyleSheet.create({
  profileImage: {
    marginLeft: 15,
  },
});
