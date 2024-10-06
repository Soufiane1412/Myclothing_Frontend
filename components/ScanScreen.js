import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Scan = () => {

  const [isSearched, setIsSearched]=useState(false);
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState([]);


  const userQuery = encodeURIComponent(searchItem);
  const API_ADDRESS = '127.0.0.1';

  const handleInput =()=> {
    if (!searchItem.trim() || searchItem.length===0) {
      setSearchItem([])
      return 
    }
    setIsSearched(true)
    fetch(`http://${API_ADDRESS}:3000/Products?q=${userQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(error, 'error whilst fetching /Products')
      }
      return response.json()
    })
    .then(data => { 
      for (const item of data.products) {
        searchResult.push({
          name:item.name,
          price:item.price.current.text,
          colour:item.colour,
          brand:item.brandName,
          image:item.imageUrl,
        })
      }
      console.log('Filtered Products:', searchResult)
    })
    .catch(error=> {
      console.error(error, 'Error')
    })
  }

  const mappedProducts = searchItem.map((e, i)=> {
    return (
      <View>
        key={i}
        name={e.name}
        price={e.price.current.text}
        colour={e.colour}
        brand={e.brandName}
        image={e.imageUrl}
      </View>
    )
  })


  return (
    <View>
      <TextInput 
      value={searchItem}
      onChangeText={(value)=> setSearchItem(value)}
      placeholder='Search items 👕...'/>
      <Button onClick={()=> handleInput()}>Search</Button>
      <View style={styles.productsContainer}>
        <View style={styles.productsGrid}>
          {isSearched ? (
            searchResult.length>0 ? (
              {mappedProducts}
            ) : (
              <View>Sorry we couldn't find the resources, maybe try later 🤔</View>
            )):(
              
            )}
        </View>
      </View>
    </View>
  );
};

export default Scan;  // Use default export if you import it without braces

const styles = StyleSheet.create ({
 productsContainer: {
  flex: 1,
  flexDirection:'row',
  justifyContent:'center',
  flexWrap:'wrap',

 },
 productsGrid: {
  flex:1,


 },
})

