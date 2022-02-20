import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {Text, View, ImageBackground, StyleSheet, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Card} from 'react-native-paper';

function DscScreen() {
  const loadInBrowser = () => {
    Linking.openURL(
      'https://docs.google.com/forms/d/e/1FAIpQLSfLW8V495462ioydl8sky1TGvwfa5UkuR-2SGTwuET0lcDTJg/viewform?usp=sf_link',
    );
  };

  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes();

  const [pastEvent, setPastEvent] = useState('false');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        source={require('../assets/dsc.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 50,
            marginLeft: 10,
            marginBottom: 0,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Events</Text>

          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 30}}>
            Developers Students Club
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: -5,
            fontWeight: 'bold',
            color: '#000',
            fontStyle: 'italic',
          }}>
          Upcoming Events
        </Text>
        <Card style={styles.cardStyle}>
          <Image
            source={require('../assets/hackathon.jpeg')}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={{height: 65, marginTop: 5}}>
            <View>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>
                DevOn's Hackathon'21
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                07:00-18:30
              </Text>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                13/12/21
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -18,
                marginRight: 4,
              }}>
              <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{color: '#009dff'}}>Register Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Card style={styles.cardStyle}>
          <Image
            source={require('../assets/ml.jpeg')}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={{height: 65, marginTop: 5}}>
            <View>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>
                Basics Of Machine Learning'21
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                02:00-19:40
              </Text>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                17/12/21
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -18,
                marginRight: 4,
              }}>
              <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{color: '#009dff'}}>Register Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Card style={styles.cardStyle}>
          <Image
            source={require('../assets/workshop.jpg')}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={{height: 65, marginTop: 5}}>
            <View>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>
                C/C++ Workshop'21
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                05:00-13:30
              </Text>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                15/12/21
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -18,
                marginRight: 4,
              }}>
              <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{color: '#009dff'}}>Register Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: -5,
            fontWeight: 'bold',
            color: '#000',
            fontStyle: 'italic',
          }}>
          Past Events
        </Text>
        <Card style={styles.cardStylePast}>
          <Image
            source={require('../assets/python.jpeg')}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={{height: 65, marginTop: 5}}>
            <View>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>
                Advanced Python Workshop'21
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                01:00-21:30
              </Text>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                1/12/21
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -18,
                marginRight: 4,
              }}>
              <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{color: '#009dff'}}>Register Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        <Card style={styles.cardStylePast}>
          <Image
            source={require('../assets/interview.jpeg')}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={{height: 65, marginTop: 5}}>
            <View>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>
                Interview Prep Workshop'21
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                08:00-23:00
              </Text>
              <Text style={{fontWeight: '500', paddingHorizontal: 5}}>
                29/11/21
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -18,
                marginRight: 4,
              }}>
              <TouchableOpacity onPress={loadInBrowser}>
                <Text style={{color: '#009dff'}}>Register Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

export default DscScreen;

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: 120,
    opacity: 0.9,
  },
  cardStyle: {
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop: 15,
  },
  cardStylePast: {
    backgroundColor: '#d4d4d3',
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop: 15,
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -30,
  },
  image: {
    width: '100%',
    height: 150,
    opacity: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  hubLogo: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f5fffa',
  },
});
