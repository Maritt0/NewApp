import {
    Button,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react"
import allProducts from "../Data/products.json"
import { colors } from '../Global/Colors'
import Counter from '../Components/Counter'

const ItemDetail = ({ 
    navigation,
    route
}) => {

    const {productId: idSelected} = route.params

    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait");
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width > height) setOrientation("landscape");
        else setOrientation("portrait");
    }, [width, height]);

    useEffect(() => {
        //Encontrar producto con la id:
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
            );
        setProduct(productSelected);
    }, [idSelected]);

    return (
        <View style={styles.pageContainer}>
            {product ? (
                <View
                    style={
                        orientation === "portrait"
                            ? styles.mainContainer
                            : styles.mainContainerLandscape
                    }
                >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style = {styles.text}>{product.title}</Text>
                        <Text style = {styles.text}>{product.description}</Text>
                        <Text style = {styles.text}>${product.price}</Text>
                        <Button title="Agregar al carrito"></Button>
                        <Counter/>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor:colors.indigo,
    },
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    mainContainerLandscape: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    image: {
        width: 300,
        height: 250,
    },
    textContainer: {
        padding: 20,
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        color:'white',
    }
});

export default ItemDetail;

