import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import { useEffect,useState } from 'react'
import yelp from '../api/yelp';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ResultsShowScreen({route}) {
    const [result, setResult] = useState(null);
    const id=route.params.id;
    const getResult=async(id)=>{
        const response=await yelp.get(`/${id}`);
        console.log(response.data);
        setResult(response.data);
        
    };

    useEffect(()=>{
        getResult(id);
    },[]);
    if (!result){
        return null;
    }
  return (
    <View>
      <Text style={styles.icon}>{result.name}</Text>
      <Text style={styles.icon}>{result.phone}</Text>
      <View style={styles.icon}>
      {
        result.is_closed ? (
            <AntDesign name="closecircleo" size={24} color="black" />
        ):(
            <MaterialIcons name="delivery-dining" size={24} color="black" />
        )
      }

      </View>
    
      
      
      <FlatList
      data={result.image_url}
      renderItem={({item})=>{
        return(
            <Image style={styles.rere}
            source={{uri:item}}
            />
        );
      }}
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
    rere:{
        alignSelf:'center',
        width:50,
        height:50,
    },
    icon:{
        alignSelf:'center',
        fontSize:18,
    },
});