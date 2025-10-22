import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function DataHeader({ location, temp, condition }) {
  return (
    (temp) ? (
      
    <View style={styles.mainFrame}>
      <Text style={styles.text1}>{location}</Text>
      <Text style={styles.text2}>{temp}</Text>
      <Text style={styles.text1}>{condition}</Text>
    </View>
    ):(
      <View style={styles.mainFrame}>
      <ActivityIndicator size="large" color='#342424ff' />
      </View>)
  );
}

const styles = StyleSheet.create({
  mainFrame: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(92, 88, 88, 0.11)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#342424ff',
  },
  text2: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#342424ff',
  },
});
