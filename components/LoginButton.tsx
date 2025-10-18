import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function LoginButton( {action}) {
  return (
    <TouchableOpacity style={styles.buttonframe} onPress={action}>
      <View>
        <Text style={styles.text}>Login Button</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonframe:{
        width:"90%",
        height: 60,
        backgroundColor: '#4da6ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 100,
        borderColor: '#4e85bcff',
        borderWidth: 2,
    },
    text:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
})