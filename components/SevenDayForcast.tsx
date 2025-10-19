import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import get7DayForcast from '../utils/forcast7days';

export default function SevenDayForcast({ city }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await get7DayForcast(city);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching 7-day forecast data:', error);
      }
    };
    getData();
  }, [city]);

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <Text style={styles.dateText}>{forecastData.time[index]}</Text>
      <Text style={styles.tempText}>
        🌡 {forecastData.temperature_2m_min[index]}°C — {forecastData.temperature_2m_max[index]}°C
      </Text>
      <Text style={styles.infoText}>
        ☀️ UV: {forecastData.uv_index_max[index]} | 🌧 Rain: {forecastData.precipitation_sum[index]}mm
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>7-Day Forecast</Text>

      {forecastData ? (
        <View style={styles.menuBox}>
          <FlatList
            data={forecastData.time}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading forecast data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  menuBox: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 8,
    maxHeight: 260, // prevents overflow and fits well inside your layout
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    paddingVertical: 6,
  },
  dateText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#222',
  },
  tempText: {
    fontSize: 13,
    marginTop: 3,
    color: '#333',
  },
  infoText: {
    fontSize: 12,
    marginTop: 2,
    color: '#444',
  },
  loadingText: {
    marginTop: 10,
    color: '#333',
    fontSize: 14,
  },
});
