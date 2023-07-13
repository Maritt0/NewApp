import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const GenreItem = ({
  item,
  setGenreSelected
}) => {
  return (
    <Pressable
      onPress={()=>setGenreSelected(item)}
    >
      <Card>
          <Text style={styles.textGenre}>{item}</Text>
      </Card>
    </Pressable>
  )
}

export default GenreItem

const styles = StyleSheet.create({
    textGenre: {
        fontSize: 18,
        color:'white',
    }
})