import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const Scan = () => {

  const [isSearched, setIsSearched]=useState(false);
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState([]);
  const [isLoading, setIsLoading]=useState(false);


  const handleInput = () => {
    const userQuery = encodeURIComponent(searchItem);
    const IP_ADDRESS = 'localhost';

    if (!searchItem.trim() || searchItem.length === 0) {
      setSearchResult([]);
      setIsLoading(false);
      return;
    }
    setIsSearched(true);
    setIsLoading(true);
    axios.get(`http://${IP_ADDRESS}:4000/health`)
    .then(() => {
      fetchProducts(userQuery);
    })
    .catch(error=> {
      console.error('API not reachable:', error);
      setIsLoading(false);
      setSearchResult([]);
    });
  }

  const fetchProducts = (userQuery) => {
    axios.get(`http://${IP_ADDRESS}:4000/Products?q=${userQuery}`, 
      {
        headers: {
          'Cache-Control': 'no-cache'
        },
        timeout :30000
      })
      .then( response=> {
        if (response.data && Array.isArray(response.data.products)) {
          const mappedProducts = response.data.products.map(i => ({
            name: i.name,
            price: i.price.current.text,
            colour: i.colour,
            brand: i.brandName,
            image: i.imageUrl,
          }));
          setSearchResult(mappedProducts);
        } else {
          setSearchResult([]);
        }
      }).catch(error => {
        console.error('Error:', error);
        if (error.response) {
          console.error('Error data:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request:', error.request);
  
        } else {
          console.error('Error message:', error.message);
        }
        setSearchResult([]);
      }).finally(()=> {
        setIsLoading(false);
      })
    }

  return (
    <View>
      <LottieView 
        style={styles.animation} 
        source={require('../assets/Animation - 1728234414566.json')}
        autoPlay
        loop
      />
      <TextInput 
        value={searchItem}
        onChangeText={(value) => setSearchItem(value)}
        placeholder='Search items 👕...'
      />
      <Button title='Search' onPress={()=> handleInput()} />
    
      {isLoading ? (
        <Text>Loading...</Text>
      ) : Array.isArray(searchResult) && searchResult.length > 0 ? (
        searchResult.map((data, index) => (
          <View key={index}>
            <Text>Name: {data.name}</Text>
            <Text>Description: {data.description}</Text>
            <Text>Price: {data.price}</Text>
            <Text>Colour: {data.colour}</Text>
            <Text>Brand: {data.brand}</Text>
            <Image source={{ uri: data.image }} style={{ width: 100, height: 100 }} />
          </View>
        ))
      ) : (
        <Text>Sorry, we could not find the resources. Maybe try later 🤔</Text>
      )}
    </View>
  );
}


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

