import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import genre from '../Data/genre.json';
import GenreItem from '../Components/GenreItem';

const Home = ({ setGenreSelected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={genre}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GenreItem item={item} setGenreSelected={setGenreSelected} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#808080',
    paddingTop: 20,
    alignItems: 'center',    
  },
});

export default Home;
