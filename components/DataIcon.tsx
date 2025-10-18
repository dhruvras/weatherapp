import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DataIcon( {data , message, icon}) {
  return (
    <View>
        <Ionicons name={icon} size={20} color="#443a35ff" />
        <View style={{alignItems:'center'}}>
            <Text style={styles.textmessage}>{message}</Text>
            <Text style={styles.datatext}>{data}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textmessage:{
        color:'#482727ff',
        fontSize:16,
        fontWeight:'500',
        marginBottom:1 ,
    },
    datatext:{
        fontSize:18,
        fontWeight:'600',
        color:'#633636ff',
    }
})