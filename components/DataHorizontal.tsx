import React from 'react';
import { View } from 'react-native';
import DataIcon from './DataIcon';
export default function DataHorizontal({uv , humidity, precipitaion}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between',
     width:"95%", marginTop:50 , backgroundColor: 'rgba(253, 252, 252, 0.32)',
     borderRadius:20,
     paddingHorizontal:20,
     paddingVertical:10,}}>
        <DataIcon data={uv} icon={"sunny"} message="UV Index"/>
        <DataIcon data={humidity} icon={"water"} message="Humidity"/>
        <DataIcon data={precipitaion} icon={"rainy"} message="Precipitation"/>
    </View>
  )
}

