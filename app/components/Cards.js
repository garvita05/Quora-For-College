import React from 'react';
import {StyleSheet, View, Text, Image, Title} from 'react-native';
import {Avatar, Paragraph} from 'react-native-paper';
import {Card} from 'react-native-paper';
import ViewMoreText from 'react-native-view-more-text';

function Cards() {
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
  const LeftContent = () => {
    <Avatar.Image source={require('../assets/profilePhoto.jpg')} />;
  };
  return (
    <Card>
      <Card.Title
        title="Garvita Nagpal"
        subtitle=" Third year computer Science Student at JIIT Noida (2019-present)"
        left={LeftContent}
      />
      {/* <Image source={require('../assets/profilePhoto.jpg')} /> */}
      <Card.Content>
        <Title>Question</Title>
        <Paragraph>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}>
            answer
          </ViewMoreText>
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

export default Cards;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
