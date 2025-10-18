import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DataHeader({ location, temp, condition }) {
  return (
    <View style={styles.mainFrame}>
      <Text style={styles.text1}>{location}</Text>
      <Text style={styles.text2}>{temp} °C</Text>
      <Text style={styles.text1}>{condition}</Text>
    </View>
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
