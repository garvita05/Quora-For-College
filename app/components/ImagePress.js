import React from 'react';
import {View, Image} from 'react-native';

function ImagePress() {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={require('../assets/cypto.png')} style={{width: '100%'}} />
    </View>
  );
}

export default ImagePress;
