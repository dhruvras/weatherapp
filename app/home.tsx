import DataHorizontal from '@/components/DataHorizontal';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import DataHeader from '../components/DataHeader';
import GreetingMessage from '../components/GreetingMessage';
import SevenDayForcast from '../components/SevenDayForcast';
import getWeatherData from '../utils/weatherdata';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New Tehri');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(location);
        setWeatherData(data);
        console.log('Fetched Weather Data:', data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, [location]);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Decorative background images */}
        <Image source={require('../assets/images/cloud.png')} style={styles.i1} />
        <Image source={require('../assets/images/half_sun.png')} style={styles.i2} />

        {/* Scrollable content */}
        <View
          style={styles.scrollContainer}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.tempHeader}>
          <GreetingMessage />
            <DataHeader
              location={weatherData?.location}
              temp={weatherData?.temp}
              condition={weatherData?.condition}
            />
            <DataHorizontal
              uv={weatherData?.uv_index}
              humidity={weatherData?.humidity}
              precipitaion={weatherData?.precipitation}
            />
          </View>

          <SevenDayForcast city={location} />
        </View>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0f7ff',
 // optional light sky blue background
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  i1: {
    width: 350,
    height: 400,
    position: 'absolute',
    top: 450,
    right: 100,
    opacity: 0.5,
  },
  i2: {
    width: 300,
    height: 600,
    position: 'absolute',
    top: 250,
    left: 150,
    opacity: 0.5,
  },
  tempHeader: {
    marginTop: 20,
    alignItems: 'center',
  },
});
