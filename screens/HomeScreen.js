import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

const HomeScreen = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const navigation = useNavigation();
  const openWebView = () => navigation.navigate('Profile');

  const openCalendar = () => {
    setShowCalendar(true);
  };

  const hideCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
      }}>
      <Pressable onPress={openWebView}>
        <Text>Open WebView</Text>
      </Pressable>
      <Pressable style={{marginTop: 25}} onPress={openCalendar}>
        <Text>Open Calendar</Text>
      </Pressable>
      {showCalendar && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Calendar />
          <Pressable style={{marginTop: 25}} onPress={hideCalendar}>
            <Text>❌ Close Calendar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
