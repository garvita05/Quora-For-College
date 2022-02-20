import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from 'react-native-paper';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
function QuestionCardsList() {
  return (
    <ScrollView style={{marginBottom: 15}}>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            Are compile-to-JS libraries like TypeScript or ClojureScript
            compatible with React Native? Why or why not?
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              34 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            My React.js application after deploying to Heroku won't show on
            Heroku, But will show on npm start why?
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              5 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            Imagine you have an app which is a series of lists of images (e.g.
            like Instagram). The app seems to crash at random. What steps can we
            take to investigate and mitigate this in React Native?
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              20 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            If you had to change your name, what would your new name be, and why
            would you choose that name?
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              8 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            Native apps that feel smooth often incorporate lots of little
            animations for state changes and transitions. How would you
            implement these behaviors? View answer
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              23 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            What is Redux in React Native and give important components of Redux
            used in React Native app ? Redux is a predictable state container
            for JavaScript apps. It helps write applications that run in
            different environments. This means
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              4 answers
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={{marginBottom: 25}}>
        <Card.Content>
          <Title style={styles.titleStyle}>
            Are default props available in React Native and if yes for what are
            they used and how are they used ?
          </Title>
          <View style={styles.questionView}>
            <Card.Actions>
              <TouchableRipple>
                <MaterialIcons.Button
                  name="question-answer"
                  size={21}
                  color="#767676"
                  backgroundColor="#fff"
                  onPress={() => console.log('clicked')}
                />
              </TouchableRipple>
            </Card.Actions>
            <Text
              style={{
                marginTop: 16,
                marginLeft: -20,
                color: '#767676',
              }}>
              1 answer
            </Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default QuestionCardsList;

const styles = StyleSheet.create({
  cardStyle: {
    borderBottomWidth: 5,
    marginBottom: 6,
    borderBottomColor: '#d3d3d3',
  },
  questionView: {
    flexDirection: 'row',
    marginTop: -4,
    marginLeft: -15,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
