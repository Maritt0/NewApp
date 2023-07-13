import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListGenre = ({
  genre,
  setGenre,
  setProductSelected
}) => {

  const [genreSelected, setGenreSelected] = useState(genre)
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    
    const productsFiltered = productsRaw.filter(product => product.genre === genreSelected && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

  }, [genreSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

  }
return (
  <View style={styles.container}>
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={()=> setGenre("")}
        />
        <FlatList
          data = {products}
          keyExtractor={product => product.id}
          renderItem={({item}) => <ProductItem 
            item={item}
            setProductSelected = {setProductSelected}
            setGenreSelected = {setGenre}
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
        backgroundColor: '#808080',
        alignItems: 'center'
    }
})