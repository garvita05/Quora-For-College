import React, {useState} from 'react';
import {ScrollView, TouchableHighlight} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import ReadMore from 'react-native-read-more-text';
import ViewMoreText from 'react-native-view-more-text';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Pressable} from 'react-native';

const renderViewMore = (onPress) => {
  return (
    <Text onPress={onPress} style={{color: '#989898', marginBottom: 5}}>
      View more
    </Text>
  );
};

const renderViewLess = (onPress) => {
  return (
    <Text onPress={onPress} style={{color: '#989898', marginBottom: 4}}>
      View less
    </Text>
  );
};

function AnswersCardList(onPress) {
  const [isUpVoted0, setUpVoted0] = useState(false);
  const [isUpVoted1, setUpVoted1] = useState(false);
  const [isUpVoted2, setUpVoted2] = useState(false);
  const [isUpVoted3, setUpVoted3] = useState(false);
  const [isUpVoted4, setUpVoted4] = useState(false);
  const [isUpVoted5, setUpVoted5] = useState(false);
  const [counter, setCounter] = useState(-2);

  return (
    <ScrollView>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              What are some causes of memory leaks and how can you detect them
              for IOS and Android?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                Memory leaks can happen if unreleased timers or listeners are
                added in componentDidMount or with closure scope leaks. To
                detect memory leaks for IOS, you go to Xcode, Product, then
                Profile. To detect memory leaks for Android, you can use the
                Performance Monitor.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted0((isUpVoted0) => !isUpVoted0)}>
              <Ionicons
                name={isUpVoted0 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted0 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              What is component driven development and what are the benefits of
              using component driven development?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                Long time back, web developer realises that there are few
                elements which are frequently used in web development like drop
                down and different type of button. The developer started making
                CSS frameworks which provide already developed components.
                Bootstrap was first very popular CSS framework which helped web
                developer to build user experience very quickly. React also
                follows the same approach in web development.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted1((isUpVoted1) => !isUpVoted1)}>
              <Ionicons
                name={isUpVoted1 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted1 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              Why do you need to install watchman software when setting up a
              development environment for React Native on MacOS?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                Watchman is an open source project developed by Facebook. As the
                name of the software correctly suggests that it watches files
                and keep track of changes in files. It can also trigger action
                based on file change. React native uses watchman to provide hot
                reloading feature of React Native. Hot reloading of React native
                application helps the developer to build application faster.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted2((isUpVoted2) => !isUpVoted2)}>
              <Ionicons
                name={isUpVoted2 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted2 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              How can we change the default behaviour of the main axis and cross
              axis of flexbox layout?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                By default, the main axis is the vertical axis and cross axis is
                the horizontal axis in React native. Since justifyContent and
                alignItems property works based on the main axis and cross axis,
                so justifyContent will align flex items vertically and
                alignItems will layout flex item horizontally. This default
                value of the main axis and cross axis can be changed by changing
                flexDirection property. If we set flexDirection to row in the
                flex container then the main axis will become horizontal axis
                and cross axis will become vertical axis.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted3((isUpVoted3) => !isUpVoted3)}>
              <Ionicons
                name={isUpVoted3 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted3 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              Native apps that feel smooth often incorporate lots of little
              animations for state changes and transitions. How would you
              implement these behaviours?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                React Native comes with the Animated API built in. This API is
                declarative: We define specific animations, using
                Animated.timing, Animated.spring, etc., and provide the exact
                parameters needed for the animation to run. This technique falls
                apart when we need lots of subtle and delicate animations on the
                fly; it’s not performant, and maintaining all that code would be
                a nightmare. Instead, we look to the LayoutAnimation module,
                which is an interpolative API.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted4((isUpVoted4) => !isUpVoted4)}>
              <Ionicons
                name={isUpVoted4 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted4 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <View style={{flexDirection: 'row', marginLeft: -14}}>
            <Avatar.Image
              source={require('../assets/profilePhoto.jpg')}
              resizeMode={'cover'}
              size={40}
              style={styles.profileImage}
            />
            <View>
              <Title style={styles.titleStyle}>Garvita Nagpal</Title>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -9,
                  color: '#767676',
                }}>
                Third year computer Science Student at JIIT Noida
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 10,
                  marginTop: -4,
                  color: '#767676',
                }}>
                (2019-present)
              </Text>
            </View>
          </View>
          <View>
            <Title style={styles.questionStyle}>
              Are compile-to-JS libraries like TypeScript or ClojureScript
              compatible with React Native? Why or why not?
            </Title>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              style={{textAlign: 'center'}}>
              <Text style={styles.answersStyle}>
                Languages that compile to JavaScript are generally compatible
                with React Native. React Native uses Babel to transform
                JavaScript into a form that is consumable by the native OS’s
                JavaScript runtime, using the react-native Babel plugin. As long
                as Babel can compile your JavaScript, and your code does not
                rely on the web- or Node.js-specific dependencies, it will run
                in React Native. So we can use compile-to-js libraries with
                React native but we need to add steps in the build process to
                convert typescript to React Native’s JS runtime consumable code.
              </Text>
            </ViewMoreText>
          </View>
          <Card.Actions>
            <Pressable onPress={() => setUpVoted5((isUpVoted5) => !isUpVoted5)}>
              <Ionicons
                name={isUpVoted5 ? 'thumbs-up' : 'thumbs-up-outline'}
                size={24}
                color={isUpVoted5 ? '#87ceeb' : 'black'}
              />
            </Pressable>
          </Card.Actions>
        </Card.Content>
      </Card>

      {/* <Card>
        <Card.Content>
          <Title style={styles.titleStyle}>Garvita Nagpal</Title>
          <Text style={{fontSize: 10}}>Integrated MTech CSE</Text>
        </Card.Content>
      </Card> */}
    </ScrollView>
  );
}

export default AnswersCardList;

const styles = StyleSheet.create({
  answersStyle: {
    marginLeft: 10,
  },
  btnPress: {
    color: 'blue',
  },
  downVote: {
    marginTop: 10,
  },
  profileImage: {
    marginLeft: 20,
    marginTop: 20,
  },

  questionStyle: {
    fontWeight: 'bold',
    marginLeft: -1,
    marginTop: 10,
    marginBottom: 4,
    fontSize: 16,
  },
  readStyle: {
    marginLeft: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 10,
    marginBottom: 4,
  },
});
