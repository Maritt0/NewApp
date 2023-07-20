import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import genre from '../Data/genre.json';
import GenreItem from '../Components/GenreItem';


const Home = ({
  navigation
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={genre}
        keyExtractor={genre => genre}
        renderItem={({item}) => <GenreItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#696969',
    paddingTop: 20,
    alignItems: 'center',    
  },
});

export default Home;
