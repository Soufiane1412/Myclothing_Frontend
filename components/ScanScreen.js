import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Scan = ({}) => {

  const [isSearched, setIsSearched]=useState(false);
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState([]);



  const handleInput =()=> {
    const userQuery = encodeURIComponent(searchItem);
    const API_ADDRESS = '192.168.1.139';

    if (!searchItem.trim() || searchItem.length===0) {
      setSearchResult([])
      return 
    }
    setIsSearched(true)
    axios.get(`http://${API_ADDRESS}:4000/Products?q=${userQuery}`, {timeOutMS: 30000})
    .then(response => {
      if (response.data && Array.isArray(response.data.products)) {
        const mappedProducts = response.data.products.map(i=> ({
          name:i.name,
          price:i.price.current.text,
          colour:i.colour,
          brand:i.brandName,
          image:i.imageUrl,
        }))
      setSearchResult(mappedProducts);
      } else {
        setSearchResult([]);
      }
      })
    .catch(error=> {
      console.error(error, 'Error')
      setSearchResult([]);
    })
  }

 
 


  return (
    <View>
      <LottieView style={styles.animation} source={require('../assets/Animation - 1728234414566.json')}
        autoPlay
        loop/>
      <TextInput 
      value={searchItem}
      onChangeText={(value)=> setSearchItem(value)}
      placeholder='Search items 👕...'/>
      <Button title='Press me' onPress={()=> handleInput()}></Button>
    
      {Array.isArray(searchResult) && searchResult.length>0 ? (
        searchResult.map((data, index) => {
          <View key={index}>
            <Text>Name: {data.name}</Text>
            <Text>Price: {data.price.current.text}</Text>
            <Text>Colour: {data.colour}</Text>
            <Text>Brand: {data.brand}</Text>
            <Image source={{ uri: data.image}} style={{ width:100, height:100}}/>
          </View>
        })
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

