import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Scan = () => {

  const [isSearched, setIsSearched]=useState(false);
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState([]);


  const userQuery = searchItem;

  const handleInput =()=> {
    if (!searchItem || searchItem.length===0) {
      return 
    }
    setIsSearched(true)
    fetch(`http://localhost:3000/Products?q=${userQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(error, 'error whilst fetching /Products')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      setSearchResult(data)
    })
    .catch(error=> {
      console.error(error, 'Error')
    })
  }



  return (
    <View>
      <TextInput 
      value={searchItem}
      onChangeText={(value)=> setSearchItem(value)}
      placeholder='Search items 👕...'/>
      <Button onClick={()=> }>Search</Button>
    </View>
  );
};

export default Scan;  // Use default export if you import it without braces
