import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginButton from '../components/LoginButton';


export default function login() {
  const router = useRouter();
  const handleLogin = () => {
    router.navigate('/home');
  };
  return (
    <View style={styles.container
    }>
      <Image
      source={require('../assets/images/rings.png')}
      style={{width: 400, height: 400, position: 'absolute', top: 160, left: 50 }}
      />
     <Image 
      source={ require('../assets/images/clear_sun.png') }
      style={styles.i2}
     />
     
     <Image 
      source={ require('../assets/images/cloud.png') }
      style={styles.i1}
      />
      <Text style={styles.welcome}>Welcome,</Text>
      <Text style={styles.rdweathers}>rbweathers</Text>
      <Text style={styles.credit}>Made By - Dhruv Rastogi</Text>
      <LoginButton  action={handleLogin}/>
    </View>
  )
}
 
const styles = StyleSheet.create({
  i1 : {
    width: 335,
    height: 360,
    position: 'absolute',
    top: 500,
    right: 0,
  },
  i2 : {
    width: 235,
    height: 500,
    position: 'absolute',
    top: 370,
    right: 150,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8f5fbff' },
  welcome: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 200,
    left: 30,
  },
  rdweathers: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 260,
    left: 35,
  },
  credit: {
    fontSize: 14,
    color: '#666',
    position: 'absolute',
    top: 30,
    right: 10,
  },
})