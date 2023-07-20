import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListGenre = ({
  navigation,
  route
}) => {
  const {genre} = route.params
  console.log(genre);
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de genre
    const productsFiltered = productsRaw.filter(product => product.genre === genre && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

  }, [genre, keyword])
  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)
    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }
  }  
  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
              item={item}
              navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
export default ItemListGenre
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#696969',
        alignItems: 'center'
    }
})
