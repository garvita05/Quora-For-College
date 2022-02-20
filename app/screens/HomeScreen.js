import React, {useReducer, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {EvilIcons} from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';

import {Avatar} from 'react-native-paper';

import {Card} from 'react-native-paper';
import ViewMoreText from 'react-native-view-more-text';
import {Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ImagePress from '../components/ImagePress';
import {Feather} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {NavigationContext} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import Lightbox from 'react-native-lightbox';
import {ScrollView} from 'react-native';
import {Modal, Portal, Provider} from 'react-native-paper';
import {FontAwesome} from '@expo/vector-icons';
import Dialog, {
  DialogContent,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';
import {SlideAnimation} from 'react-native-popup-dialog';
import CommentDropdown from '../components/CommentDropdown';
import {MaterialIcons} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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
function HomeScreen() {
  const [showComment, setShowComment] = useState('false');
  const [showComment1, setShowComment1] = useState('false');
  const [showComment2, setShowComment2] = useState('false');
  const [showComment3, setShowComment3] = useState('false');

  const [showView, setShowView] = useState('true');

  const [upVoted0, setUpVoted0] = useState(false);
  const [upVoted1, setUpVoted1] = useState(false);
  const [upVoted2, setUpVoted2] = useState(false);
  const [upVoted3, setUpVoted3] = useState(false);

  const [isDownVoted0, setDownVoted0] = useState(false);
  const [isDownVoted1, setDownVoted1] = useState(false);
  const [isDownVoted2, setDownVoted2] = useState(false);
  const [isDownVoted3, setDownVoted3] = useState(false);

  const [follow0, setFollow0] = useState(false);
  const [follow1, setFollow1] = useState(false);
  const [follow2, setFollow2] = useState(false);
  const [follow3, setFollow3] = useState(false);

  const [upVoteCount0, setUpVoteCount0] = useState(150);
  const [upVoteCount1, setUpVoteCount1] = useState(341);
  const [upVoteCount2, setUpVoteCount2] = useState(102);
  const [upVoteCount3, setUpVoteCount3] = useState(156);

  const [downVoteCount0, setDownVoteCount0] = useState(40);
  const [downVoteCount1, setDownVoteCount1] = useState(30);
  const [downVoteCount2, setDownVoteCount2] = useState(20);
  const [downVoteCount3, setDownVoteCount3] = useState(20);

  const [visible, setVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [text, setText] = useState(null);

  const LeftContent = () => {
    <Avatar.Image
      source={require('../assets/profilePhoto.jpg')}
      resizeMode={'cover'}
      style={{height: 40, width: 40}}
    />;
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{marginTop: 15, backgroundColor: '#F5F5F5'}}>
        <Card
          style={{
            borderBottomWidth: 0,
            borderBottomColor: '#000',
            borderTopWidth: 0,
            borderTopColor: '#000',
            borderRightWidth: 0,
            borderRightColor: '#000',
            borderLeftWidth: 0,
            borderLeftColor: '#000',
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 15,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',

              height: 70,
            }}>
            <Avatar.Image
              source={{uri: 'https://picsum.photos/id/1/200/300'}}
              size={40}
              style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}
              resizeMode={'cover'}
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
                <TouchableOpacity
                  onPress={() => setFollow0((follow0) => !follow0)}>
                  <Text
                    style={{
                      marginTop: 14,
                      marginLeft: 10,
                      color: follow0 ? '#000' : '#0047AB',
                    }}>
                    {follow0 ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
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

          <Lightbox
            renderContent={() => {
              return (
                <Image
                  source={require('../assets/crypto1.jpeg')}
                  style={{
                    height: '30%',
                    width: '100%',
                    marginTop: 0,
                    marginBottom: 4,
                  }}
                  resizeMode={'cover'}
                />
              );
            }}
            style={{marginBottom: 0, marginTop: 0}}
            underlayColor={'transparent'}>
            <Image
              source={require('../assets/crypto1.jpeg')}
              style={{
                height: 150,
                width: '100%',
                marginTop: 0,
                marginBottom: 4,
              }}
              resizeMode={'cover'}
            />
          </Lightbox>

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
                crypto investment as easy as ordering food online. We have
                worked towards removing all the technicalities involved in
                crypto investing and built a go-to solution for retail investors
              </Text>
            </ViewMoreText>
          </Card.Content>
          <View style={{flex: 1}}>
            {showView ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 7,
                  marginLeft: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderLeftWidth: 0.1,
                    borderLeftColor: '#000',
                    borderRightWidth: 0.1,
                    borderRightColor: '#000',
                    borderBottomWidth: 0.1,
                    borderBottomColor: '#000',
                    borderTopWidth: 0.1,
                    borderTopColor: '#000',
                    borderRadius: 5,
                    width: '28%',
                    height: '100%',
                    marginLeft: 6,

                    //
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRightWidth: 0.25,
                      borderRightColor: '#000',
                      paddingVertical: 4,
                      paddingHorizontal: 4,
                    }}>
                    <Pressable
                      onPress={() => {
                        setUpVoted0(!upVoted0);

                        upVoted0
                          ? setUpVoteCount0(upVoteCount0 - 1)
                          : setUpVoteCount0(upVoteCount0 + 1);
                      }}>
                      <FontAwesome
                        name={upVoted0 ? 'thumbs-up' : 'thumbs-o-up'}
                        size={20}
                        color={upVoted0 ? '#1DA1F2' : '#3f3f3f'}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {upVoteCount0}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 2,
                      flexDirection: 'row',
                    }}>
                    <Pressable
                      onPress={() => {
                        setDownVoted0(!isDownVoted0);
                        isDownVoted0
                          ? setDownVoteCount0(downVoteCount0 - 1)
                          : setDownVoteCount0(downVoteCount0 + 1);
                      }}>
                      <FontAwesome
                        name={isDownVoted0 ? 'thumbs-down' : 'thumbs-o-down'}
                        size={20}
                        color={isDownVoted0 ? '#1DA1F2' : '#3f3f3f'}
                        style={{marginLeft: 8}}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {downVoteCount0}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{paddingLeft: 12}}>
                  <MaterialIcons
                    name="comment"
                    size={24}
                    color="#3f3f3f"
                    style={{marginTop: 5}}
                  />
                </TouchableOpacity>
                <View style={{marginLeft: 210}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SharePost');
                    }}>
                    <Feather
                      name="share"
                      size={23}
                      color="#3f3f3f"
                      style={{marginTop: 3, marginRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showComment ? (
              <ScrollView
                style={{
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  width: '100%',
                  marginTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: '#a9a9a9',
                  borderLeftWidth: 1,
                  borderLeftColor: '#a9a9a9',
                  borderRightWidth: 1,
                  borderRightColor: '#a9a9a9',
                  borderBottomWidth: 1,
                  borderBottomColor: '#a9a9a9',
                  borderRadius: 5,
                }}
                contentContainerStyle={{flexGrow: 1}}>
                <CommentDropdown />

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{marginLeft: 5, marginBottom: 10, marginTop: 5}}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </Card>
        <Card
          style={{
            borderBottomWidth: 0,
            borderBottomColor: '#000',
            borderTopWidth: 0,
            borderTopColor: '#000',
            borderRightWidth: 0,
            borderRightColor: '#000',
            borderLeftWidth: 0,
            borderLeftColor: '#000',
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 15,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              source={{uri: 'https://picsum.photos/200/300?random=2'}}
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
                  Matthew Perry
                </Title>
                <TouchableOpacity
                  onPress={() => setFollow1((follow1) => !follow1)}>
                  <Text
                    style={{
                      marginTop: 14,
                      marginLeft: 10,
                      color: follow1 ? '#000' : '#0047AB',
                    }}>
                    {follow1 ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
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
                  marginBottom: 5,
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
          <Lightbox
            renderContent={() => {
              return (
                <Image
                  source={require('../assets/spiderman.gif')}
                  style={{
                    height: '30%',
                    width: '100%',
                    marginTop: 0,
                    marginBottom: 4,
                  }}
                  resizeMode={'cover'}
                />
              );
            }}
            style={{marginBottom: 0, marginTop: 0}}
            underlayColor={'transparent'}>
            <Image
              source={require('../assets/spiderman.gif')}
              style={{
                height: 150,
                width: '100%',
                marginTop: 0,
                marginBottom: 4,
              }}
              resizeMode={'cover'}
            />
          </Lightbox>

          <Card.Content>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              What small details from a Marvel movie do you love?
            </Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}>
              <Text>
                When Spider-Man meets Dr Strange and they introduce
                themselves,They are both using their real names. I mean, if I
                was meeting some high school students I might introduce myself
                as Doctor Moore, not Peter. But Peter Parker doesn’t understand
                that this isn’t a hero name, so he responds with: It took me a
                few watches before I caught the joke. And just to overdo it, in
                some ways the ‘Doctor’ part of our names is an earned title,
                which is kind of like a made up name. Maybe Peter should have
                said, “Then I am the Amazing Spider-Man”.
              </Text>
            </ViewMoreText>
          </Card.Content>
          <View style={{flex: 1}}>
            {showView ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 7,
                  marginLeft: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderLeftWidth: 0.1,
                    borderLeftColor: '#000',
                    borderRightWidth: 0.1,
                    borderRightColor: '#000',
                    borderBottomWidth: 0.1,
                    borderBottomColor: '#000',
                    borderTopWidth: 0.1,
                    borderTopColor: '#000',
                    borderRadius: 5,
                    width: '28%',
                    height: '100%',
                    marginLeft: 6,
                    //
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRightWidth: 0.25,
                      borderRightColor: '#000',
                      paddingVertical: 4,
                      paddingHorizontal: 4,
                    }}>
                    <Pressable
                      onPress={() => {
                        setUpVoted1(!upVoted1);

                        upVoted1
                          ? setUpVoteCount1(upVoteCount1 - 1)
                          : setUpVoteCount1(upVoteCount1 + 1);
                      }}>
                      <FontAwesome
                        name={upVoted1 ? 'thumbs-up' : 'thumbs-o-up'}
                        size={20}
                        color={upVoted1 ? '#1DA1F2' : '#3f3f3f'}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {upVoteCount1}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 2,
                      flexDirection: 'row',
                    }}>
                    <Pressable
                      onPress={() => {
                        setDownVoted1(!isDownVoted1);
                        isDownVoted1
                          ? setDownVoteCount1(downVoteCount1 - 1)
                          : setDownVoteCount1(downVoteCount1 + 1);
                      }}>
                      <FontAwesome
                        name={isDownVoted1 ? 'thumbs-down' : 'thumbs-o-down'}
                        size={20}
                        color={isDownVoted1 ? '#1DA1F2' : '#3f3f3f'}
                        style={{marginLeft: 8}}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {downVoteCount1}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setShowComment1(!showComment1);
                    setShowView(!showView);
                  }}
                  style={{paddingLeft: 12}}>
                  <MaterialIcons
                    name="comment"
                    size={24}
                    color="#3f3f3f"
                    style={{marginTop: 5}}
                  />
                </TouchableOpacity>
                <View style={{marginLeft: 2}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SharePost');
                    }}>
                    <Feather
                      name="share"
                      size={23}
                      color="#3f3f3f"
                      style={{marginTop: 3, marginRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showComment1 ? (
              <ScrollView
                style={{
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  width: '100%',
                  marginTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: '#a9a9a9',
                  borderLeftWidth: 1,
                  borderLeftColor: '#a9a9a9',
                  borderRightWidth: 1,
                  borderRightColor: '#a9a9a9',
                  borderBottomWidth: 1,
                  borderBottomColor: '#a9a9a9',
                  borderRadius: 5,
                }}
                contentContainerStyle={{flexGrow: 1}}>
                <CommentDropdown />

                <TouchableOpacity
                  onPress={() => {
                    setShowComment1(!showComment1);
                    setShowView(!showView);
                  }}
                  style={{marginLeft: 5, marginBottom: 10, marginTop: 5}}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </Card>
        <Card
          style={{
            borderBottomWidth: 0,
            borderBottomColor: '#000',
            borderTopWidth: 0,
            borderTopColor: '#000',
            borderRightWidth: 0,
            borderRightColor: '#000',
            borderLeftWidth: 0,
            borderLeftColor: '#000',
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 15,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              source={{uri: 'https://picsum.photos/200/300'}}
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
                  Ben Williams
                </Title>
                <TouchableOpacity
                  onPress={() => setFollow2((follow2) => !follow2)}>
                  <Text
                    style={{
                      marginTop: 14,
                      marginLeft: 10,
                      color: follow2 ? '#000' : '#0047AB',
                    }}>
                    {follow2 ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
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
          <Lightbox
            renderContent={() => {
              return (
                <Image
                  source={require('../assets/logain1.jpeg')}
                  style={{
                    height: '30%',
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 4,
                  }}
                  resizeMode={'cover'}
                />
              );
            }}
            style={{marginBottom: 0, marginTop: 0}}
            underlayColor={'transparent'}>
            <Image
              source={require('../assets/logain1.jpeg')}
              style={{
                height: 150,
                width: '100%',
                marginTop: 10,
                marginBottom: 4,
              }}
              resizeMode={'cover'}
            />
          </Lightbox>

          <Card.Content>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Who is Logain Albar in The Wheel of Time series played by ‘The
              Professor’ from Money Heist?
            </Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}>
              <Text>
                After ending Ep 3 with the cliffhanger, the much-awaited
                introduction of Alvaro Morte as Logain Ablar, there is a lot of
                chatter about his role and his character. His backstory is that
                Logain proclaimed himself as The Dragon Reborn (the prophesized
                hero who could channel The One Power and lead humanity against
                the forces of The Dark One) and gathered an army because of
                stature as a minor lord of Ghealdan. He led his forces to win a
                battle but was later captured by the Aes Sedai.
              </Text>
            </ViewMoreText>
          </Card.Content>
          <View style={{flex: 1}}>
            {showView ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 7,
                  marginLeft: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderLeftWidth: 0.1,
                    borderLeftColor: '#000',
                    borderRightWidth: 0.1,
                    borderRightColor: '#000',
                    borderBottomWidth: 0.1,
                    borderBottomColor: '#000',
                    borderTopWidth: 0.1,
                    borderTopColor: '#000',
                    borderRadius: 5,
                    width: '28%',
                    height: '100%',
                    marginLeft: 6,
                    //
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRightWidth: 0.25,
                      borderRightColor: '#000',
                      paddingVertical: 4,
                      paddingHorizontal: 4,
                    }}>
                    <Pressable
                      onPress={() => {
                        setUpVoted2(!upVoted2);

                        upVoted2
                          ? setUpVoteCount2(upVoteCount2 - 1)
                          : setUpVoteCount2(upVoteCount2 + 1);
                      }}>
                      <FontAwesome
                        name={upVoted2 ? 'thumbs-up' : 'thumbs-o-up'}
                        size={20}
                        color={upVoted2 ? '#1DA1F2' : '#3f3f3f'}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {upVoteCount2}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 2,
                      flexDirection: 'row',
                    }}>
                    <Pressable
                      onPress={() => {
                        setDownVoted2(!isDownVoted2);
                        isDownVoted2
                          ? setDownVoteCount2(downVoteCount2 - 1)
                          : setDownVoteCount2(downVoteCount2 + 1);
                      }}>
                      <FontAwesome
                        name={isDownVoted2 ? 'thumbs-down' : 'thumbs-o-down'}
                        size={20}
                        color={isDownVoted2 ? '#1DA1F2' : '#3f3f3f'}
                        style={{marginLeft: 8}}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {downVoteCount2}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{paddingLeft: 12}}>
                  <MaterialIcons
                    name="comment"
                    size={24}
                    color="#3f3f3f"
                    style={{marginTop: 5}}
                  />
                </TouchableOpacity>
                <View style={{marginLeft: 210}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SharePost');
                    }}>
                    <Feather
                      name="share"
                      size={23}
                      color="#3f3f3f"
                      style={{marginTop: 3, marginRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showComment ? (
              <ScrollView
                style={{
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  width: '100%',
                  marginTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: '#a9a9a9',
                  borderLeftWidth: 1,
                  borderLeftColor: '#a9a9a9',
                  borderRightWidth: 1,
                  borderRightColor: '#a9a9a9',
                  borderBottomWidth: 1,
                  borderBottomColor: '#a9a9a9',
                  borderRadius: 5,
                }}
                contentContainerStyle={{flexGrow: 1}}>
                <CommentDropdown />

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{marginLeft: 5, marginBottom: 10, marginTop: 5}}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </Card>

        <Card
          style={{
            borderBottomWidth: 0,
            borderBottomColor: '#000',
            borderTopWidth: 0,
            borderTopColor: '#000',
            borderRightWidth: 0,
            borderRightColor: '#000',
            borderLeftWidth: 0,
            borderLeftColor: '#000',
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 15,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
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
                  Ken Adams
                </Title>
                <TouchableOpacity
                  onPress={() => setFollow3((follow3) => !follow3)}>
                  <Text
                    style={{
                      marginTop: 14,
                      marginLeft: 10,
                      color: follow3 ? '#000' : '#0047AB',
                    }}>
                    {follow3 ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
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
          <Lightbox
            renderContent={() => {
              return (
                <Image
                  source={require('../assets/thor.jpeg')}
                  style={{
                    height: '30%',
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 4,
                  }}
                  resizeMode={'cover'}
                />
              );
            }}
            style={{marginBottom: 0, marginTop: 0}}
            underlayColor={'transparent'}>
            <Image
              source={require('../assets/thor.jpeg')}
              style={{
                height: 150,
                width: '100%',
                marginTop: 10,
                marginBottom: 4,
              }}
              resizeMode={'cover'}
            />
          </Lightbox>

          <Card.Content>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              What have you noticed in Marvel movies that most people have not?
            </Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}>
              <Text>
                Thor wasn't sad at Tony's funeral. Thor wasn't particularly sad
                about Tony's death, and I think that's why he didn't take proper
                care of himself and didn't look so sad: And I have a theory why.
                Do you remember Freja's funeral in Thor the Dark World? Her body
                was placed in a boat and burned:Her body turned into cosmic dust
                that entered Valhalla because she had died in battle. And how
                did Stark die again? That's correct, in a fight. I doubt Thor is
                really sad about Tony's death, emotionally but not sad. As he
                knows, he went to Valhalla. Hill is there, so it's not too
                far-fetched to say that Valhalla does, too. In Thor's mind, Tony
                gets absurdly drunk with the greatest warriors in history. And
                perhaps the reason for leaving Thor with the Guardians is that
                he wants to go on dangerous adventures, so when he sees his old
                friend again in Valhalla, he will have great stories to tell.
              </Text>
            </ViewMoreText>
          </Card.Content>
          <View style={{flex: 1}}>
            {showView ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 7,
                  marginLeft: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderLeftWidth: 0.1,
                    borderLeftColor: '#000',
                    borderRightWidth: 0.1,
                    borderRightColor: '#000',
                    borderBottomWidth: 0.1,
                    borderBottomColor: '#000',
                    borderTopWidth: 0.1,
                    borderTopColor: '#000',
                    borderRadius: 5,
                    width: '28%',
                    height: '100%',
                    marginLeft: 6,
                    //
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRightWidth: 0.25,
                      borderRightColor: '#000',
                      paddingVertical: 4,
                      paddingHorizontal: 4,
                    }}>
                    <Pressable
                      onPress={() => {
                        setUpVoted3(!upVoted3);

                        upVoted3
                          ? setUpVoteCount3(upVoteCount3 - 1)
                          : setUpVoteCount3(upVoteCount3 + 1);
                      }}>
                      <FontAwesome
                        name={upVoted3 ? 'thumbs-up' : 'thumbs-o-up'}
                        size={20}
                        color={upVoted3 ? '#1DA1F2' : '#3f3f3f'}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {upVoteCount3}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 2,
                      flexDirection: 'row',
                    }}>
                    <Pressable
                      onPress={() => {
                        setDownVoted3(!isDownVoted3);
                        isDownVoted3
                          ? setDownVoteCount3(downVoteCount3 - 1)
                          : setDownVoteCount3(downVoteCount3 + 1);
                      }}>
                      <FontAwesome
                        name={isDownVoted3 ? 'thumbs-down' : 'thumbs-o-down'}
                        size={20}
                        color={isDownVoted3 ? '#1DA1F2' : '#3f3f3f'}
                        style={{marginLeft: 8}}
                      />
                    </Pressable>
                    <Text
                      style={{
                        color: '#3f3f3f',
                        marginLeft: 3,
                        fontSize: 12,
                        marginTop: 2,
                      }}>
                      {downVoteCount3}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{paddingLeft: 12}}>
                  <MaterialIcons
                    name="comment"
                    size={24}
                    color="#3f3f3f"
                    style={{marginTop: 5}}
                  />
                </TouchableOpacity>
                <View style={{marginLeft: 210}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SharePost');
                    }}>
                    <Feather
                      name="share"
                      size={23}
                      color="#3f3f3f"
                      style={{marginTop: 3, marginRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showComment ? (
              <ScrollView
                style={{
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  width: '100%',
                  marginTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: '#a9a9a9',
                  borderLeftWidth: 1,
                  borderLeftColor: '#a9a9a9',
                  borderRightWidth: 1,
                  borderRightColor: '#a9a9a9',
                  borderBottomWidth: 1,
                  borderBottomColor: '#a9a9a9',
                  borderRadius: 10,
                }}
                contentContainerStyle={{flexGrow: 1}}>
                <CommentDropdown />

                <TouchableOpacity
                  onPress={() => {
                    setShowComment(!showComment);
                    setShowView(!showView);
                  }}
                  style={{marginLeft: 5, marginBottom: 10, marginTop: 5}}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  inputText: {
    marginLeft: 5,
    margin: 0.5,
    color: '#05375a',
  },
});
