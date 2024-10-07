import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Scan = () => {

  const [isSearched, setIsSearched]=useState(false);
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState([]);



  const handleInput =()=> {
    const userQuery = encodeURIComponent(searchItem);
    const API_ADDRESS = '127.0.0.1';

    if (!searchItem.trim() || searchItem.length===0) {
      setSearchResult([])
      return 
    }
    setIsSearched(true)
    axios.get(`http://${API_ADDRESS}:4000/Products?q=${userQuery}`, {timeOutMS: 30000})
    .then(response => {
      setSearchResult(response.data);
      })
    .catch(error=> {
      console.error(error, 'Error')
    })
  }

  const mappedProducts = searchResult.map((e, i)=> {
    return (
      <Text key={i}>
        {e.name},
        {e.price.current.text},
        {e.colour},
        {e.brandName},
        {e.imageUrl},
      </Text>
    )
  })
 


  return (
    <View>
      <LottieView style={styles.animation} source={require('../assets/Animation - 1728234414566.json')}
        autoPlay
        loop/>
      <TextInput 
      value={searchItem}
      onChangeText={(value)=> setSearchItem(value)}
      placeholder='Search items 👕...'/>
      <Button title='Press me'onPress={()=> handleInput()}>Search</Button>
    
      {searchResult.length>0 ? (
          mappedProducts 
        ):(
        <>
          <Text>Sorry we could not find the resources, maybe try later 🤔</Text>
        </> 
        )}
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
  height:'80px',
  width:'60px',
  gap:'5px',
 },
 animation: {
  height:'80px',
  width:'60px',
  display:'relative',
 },
})

