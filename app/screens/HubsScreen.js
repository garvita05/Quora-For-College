import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Card} from 'react-native-paper';

function HubsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('IEEE');
          }}>
          <Card style={styles.cardStyle}>
            <ImageBackground
              source={require('../assets/IEEE.jpeg')}
              resizeMode="cover"
              style={styles.image}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  style={[{backgroundColor: '#f08080'}, styles.hubLogo]}
                  size={50}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  IEEE
                </Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Institute of Electrical and Electronics Engineers
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Jane Sloan
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Vice Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Kat Edison
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('DSC');
          }}>
          <Card style={styles.cardStyle}>
            <ImageBackground
              source={require('../assets/dsc.jpeg')}
              resizeMode="cover"
              style={styles.image}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  style={[{backgroundColor: '#f08080'}, styles.hubLogo]}
                  size={50}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  DSC
                </Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Developers Student Club
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Stephen Carlisle
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Vice Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Richard Hunter
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('JYC');
          }}>
          <Card style={styles.cardStyle}>
            <ImageBackground
              source={require('../assets/jyc.jpeg')}
              resizeMode="cover"
              style={styles.image}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  style={[{backgroundColor: '#f08080'}, styles.hubLogo]}
                  size={50}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  JYC
                </Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Joint Youth Club
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Sage Breddy
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Vice Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Alex Crawford
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('AIESEC');
          }}>
          <Card style={styles.cardStyle}>
            <ImageBackground
              source={require('../assets/aiesec.jpg')}
              resizeMode="cover"
              style={styles.image}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  style={[{backgroundColor: '#f08080'}, styles.hubLogo]}
                  size={52}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  AIESEC
                </Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    AIESEC,Jaypee Noida
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Alicia Stacy
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Vice Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '800'}}>
                    Diipa Khosla
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('NSS');
          }}>
          <Card style={styles.cardStyle}>
            <ImageBackground
              source={require('../assets/nss.jpeg')}
              resizeMode="cover"
              style={styles.image}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  style={[{backgroundColor: '#f08080'}, styles.hubLogo]}
                  size={50}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  NSS
                </Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    National Service Scheme
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '500'}}>
                    Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '500'}}>
                    Bhavya Kohli
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '500'}}>
                    Vice Chairperson:{' '}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '500'}}>
                    Tanansh Ahuja
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HubsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -20,
  },
  image: {
    width: '100%',
    height: 150,

    backgroundColor: '#fff',

    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  cardStyle: {
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    marginHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderLeftWidth: 2,
    borderLeftColor: '#000',
    borderRightWidth: 2,
    borderRightColor: '#000',
    marginTop: 20,
  },
  hubLogo: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f5fffa',
  },
});
