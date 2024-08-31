import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


export default function SearchScreen() {
  
  const [searchApi, results] = useResults();
  const [term, setTerm] = useState(``);
  console.log(results);

  const filterResultsbyPrice=(price)=>{
    return results.filter((result)=>{
      return result.price===price;
    });

  };
  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={()=>searchApi(term)}

      />
      <ResultsList title='Ucuz Restaurant' results={filterResultsbyPrice('₺')}/>
      <ResultsList title='Uygun Restaurant' results={filterResultsbyPrice('₺₺')}/>
      <ResultsList title='Pahalı Restaurant' results={filterResultsbyPrice('₺₺₺')}/>
    </View>
  );
}

const styles = StyleSheet.create({});
