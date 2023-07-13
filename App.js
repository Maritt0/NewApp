import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListGenre from './src/Screens/ItemListGenre';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import ItemDetail from './src/Screens/ItemDetail';

export default function App() {

  const [genreSelected, setGenreSelected] = useState("")
  const [productSelected, setProductSelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style = {styles.container}>
      <Header/>
      {
        genreSelected ? 
        <ItemListGenre 
          genre={genreSelected}
          setGenre={setGenreSelected}
          setProductSelected={setProductSelected}
        /> :
        productSelected ?
        <ItemDetail
          idSelected={productSelected}
          setProductSelected = {setProductSelected}
        /> :
        <Home
          setGenreSelected={setGenreSelected}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})
