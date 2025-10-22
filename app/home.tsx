import DataHorizontal from '@/components/DataHorizontal';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DataHeader from '../components/DataHeader';
import GreetingMessage from '../components/GreetingMessage';
import SevenDayForcast from '../components/SevenDayForcast';
import getWeatherData from '../utils/weatherdata';


export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [location, setLocation] = useState("Tehri");
  const [temp, setTemp] = useState("");

  function LocationChange() {

    setShowOverlay(true); // show the translucent overlay
  }
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
          <TouchableOpacity onPress={() => LocationChange()} >
            <DataHeader
              location={weatherData?.location}
              temp={weatherData?.temp}
              condition={weatherData?.condition}
            />
            </TouchableOpacity>
            <DataHorizontal
              uv={weatherData?.uv_index}
              humidity={weatherData?.humidity}
              precipitaion={weatherData?.precipitation}
            />
          </View>
          <SevenDayForcast city={location} />
        </View>
          {showOverlay && (
            <View style={styles.overlay}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter location..."
                  placeholderTextColor="#8B5E3C" // brownish placeholder

                  onChangeText={setTemp}
                />
                <TouchableOpacity style={styles.searchButton} onPress={() => {setShowOverlay(false); setLocation(temp.trim());}}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ffffff70', // translucent white
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
},
inputContainer: {
  width: '80%',
 // light sky blue
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
  position:'absolute',
  top:'20%',
  
},
input: {
  width: '100%',
  height: 50,
  backgroundColor: '#dcebf2ff', // same light sky blue
  color: '#8B5E3C', // brownish text
  borderWidth: 1,
  borderColor: '#8B5E3C',
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 15,
  fontSize: 16,

},
searchButton: {
  width: '60%',
  height: 50,
  backgroundColor: '#8B5E3C', // brownish
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},
searchButtonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

});
