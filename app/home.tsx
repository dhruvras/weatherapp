import DataHorizontal from '@/components/DataHorizontal'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import DataHeader from '../components/DataHeader'
import GreetingMessage from '../components/GreetingMessage'
import SevenDayForcast from '../components/SevenDayForcast'
import getWeatherData from '../utils/weatherdata'

export default function home() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("New Tehri");
    
      useEffect(() => {
        try {
          const fetchData = async () => {
            const data = await getWeatherData(location);
            setWeatherData(data);
            console.log("Fetched Weather Data:", data)
          };
          fetchData();
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }, []);
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={require("../assets/images/cloud.png")} style={styles.i1}/>
            <Image source={require("../assets/images/half_sun.png")} style={styles.i2}/>
            <View style={{marginTop:0}}>
                <GreetingMessage />
            </View>
            <View style={styles.tempheader}>
                <DataHeader location={weatherData?.location} temp = {weatherData?.temp} condition={weatherData?.condition} />
                <DataHorizontal uv = {weatherData?.uv_index} humidity={weatherData?.humidity} precipitaion={weatherData?.precipitation}/>
            </View>
            {/* <Button title="Refresh" onPress={async () => {
                setLocation("New Delhi")
                const data = await getWeatherData(location);
                setWeatherData(data);
                console.log("Refreshed Weather Data:", data)
            }}/> */}

            <View>
                <SevenDayForcast />
            </View>


        </View>
  )
}
const styles = StyleSheet.create({
    i1:{
        width:350,
        height:400,
        top:450,
        right:100,
        position:'absolute',
    },
    i2:{
        width:300,
        height:600,
        position:'absolute',
        top:250,
        // right:150,
        left:150,
    },
    tempheader:{
        top:130, 
        alignItems:'center',
        position:'absolute',

    }
})