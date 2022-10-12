import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  console.log({params: route.params});

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
