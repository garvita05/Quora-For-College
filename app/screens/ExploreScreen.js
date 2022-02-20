import React from 'react';
import MasonryList from 'react-native-masonry-list';

function ExploreScreen() {
  const imageArray = [
    {
      uri: 'https://picsum.photos/id/1026/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      source: {
        uri: 'https://i.picsum.photos/id/195/768/1024.jpg?hmac=rksrWrgeGQzOdzXlnzsTWy2L2zYq4gQei3TBMWCmXsI',
        dimensions: {width: 200, height: 100},
      },
    },
    {
      uri: 'https://picsum.photos/id/1047/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/1059/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1062/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/157/200/300',
      dimensions: {width: 200, height: 300},
    },
    {
      source: require('../assets/ldc.jpeg'),
      width: 3000,
      height: 5000,
    },
    {
      uri: 'https://picsum.photos/id/145/200/300',
      dimensions: {width: 200, height: 300},
    },

    {
      source: {
        uri: 'https://picsum.photos/id/152/200/300',
        dimensions: {width: 200, height: 100},
      },
    },
    {
      uri: 'https://picsum.photos/id/10/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/100/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1000/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/1005/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/127/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      source: {
        uri: 'https://picsum.photos/id/1006/200/300',
        dimensions: {width: 200, height: 100},
      },
    },

    {
      uri: 'https://picsum.photos/id/1008/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/1010/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1012/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/1013/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/1014/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      source: {
        uri: 'https://picsum.photos/id/1018/200/300',
        dimensions: {width: 200, height: 100},
      },
    },
    {
      uri: 'https://picsum.photos/id/1024/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/1025/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1028/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/103/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/1003/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      source: {
        uri: 'https://picsum.photos/id/1038/200/300',
        dimensions: {width: 200, height: 100},
      },
    },
    {
      uri: 'https://picsum.photos/id/1040/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/1043/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1045/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/1050/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/1056/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      source: {
        uri: 'https://picsum.photos/id/1058/200/300',
        dimensions: {width: 200, height: 100},
      },
    },
    {
      uri: 'https://picsum.photos/id/1066/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/1069/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1070/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/1077/200/300',
      dimensions: {width: 200, height: 100},
    },
    {
      URI: 'https://picsum.photos/id/100/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1000/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/111/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/1084/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URI: 'https://picsum.photos/id/1068/200/300',
      dimensions: {width: 200, height: 100},

      id: 'blpccx4cn',
    },
    {
      url: 'https://picsum.photos/id/1073/200/300',
      dimensions: {width: 200, height: 100},
    },

    {
      URL: 'https://picsum.photos/id/118/1079/300',
      dimensions: {width: 200, height: 100},
    },

    {
      uri: 'https://picsum.photos/id/119/1080/300',
      dimensions: {width: 200, height: 100},
    },
  ];
  return (
    <MasonryList
      images={imageArray}
      columns={2}
      refreshing={true}
      sorted={true}

      // onEndReached={() => {
      //     // add more images when scrolls reaches end
      // }}
    />
  );
}

export default ExploreScreen;
