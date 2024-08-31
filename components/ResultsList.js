import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function ResultsList({results,title}) {
  const navigation=useNavigation();
    console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal 
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate('Results',{id:item.id})}>
            <ResultDetail result={item}/>
          </TouchableOpacity>

        )
      }
    }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:10,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10,
    marginBottom:5,

  }


  
})