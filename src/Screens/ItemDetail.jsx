import { Button, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";

const ItemDetail = ({ idSelected, setProductSelected }) => {
    console.log(idSelected);

 const [product, setProduct] = useState(null);
 const [orientation, setOrientation] = useState("portrait")
 const {width, height} = useWindowDimensions()

 useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

console.log(orientation);

useEffect(() => {
    const productSelected = allProducts.find(
    (product) => product.id === idSelected
    );
    setProduct(productSelected);
    }, [idSelected]);

    console.log(product);

    return (
        <View>
            <Button onPress={() => setProductSelected("")} title="Atrás" />
            {product ? (
            <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                <Image
                    source={{ uri: product.images[0] }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style = {styles.textContainer}>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text>${product.price}</Text>
                    <Button title="Añadir al carrito"></Button>
                </View>
            </View>
            ) : null}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    mainContainer: 
    {
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "flex-start",
     padding: 30,
    },
    mainContainerLandscape:
    {
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "flex-start",
     padding: 10,
    },
    image: 
    {
     width: 300,
     height: 250,
     marginLeft:20
    },
    textContainer: 
    {
     flexDirection: 'column',
     margin:20,   
    },
    
});
