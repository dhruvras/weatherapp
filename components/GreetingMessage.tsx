import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GreetingMessage() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentHour = new Date().getHours();
    const day = new Date().getDay();
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
  return (
    <View style={{paddingTop:20, }}>
      <Text style = {styles.text}>{(currentHour<=12) ? ("Good Morning") : ("Good Evening") },</Text>
      <Text style= {styles.text1}> { days[day]}, {date } {months[month]}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#3f3a3aff',
    textAlign:'center',
    marginBottom: 5,
},
text1:{
    fontSize:18,
    fontWeight:'bold',
    color:'#3f3a3aff',
    textAlign:'center',
    marginBottom: 20,
}

})