import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const GenreItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()
  return (
    <View style = {{width: width, alignItems: 'center'}}>
      <Pressable
        onPress={()=>navigation.navigate('ItemListGenre', {genre: item})}
      >
        <Card
          additionalStyle={styles.additionalStyle}
        >
            <Text style={styles.textGenre}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default GenreItem

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
    },
    textGenre: {
        fontSize: 18
    },
    additionalStyle: {
      borderRadius: 15
    }
})
