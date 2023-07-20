import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'The Gamer Nest' 
    else if (route.name === 'ItemListGenre') title = route.params.genre
    else if (route.name === 'Detail') title = route.params.title
    else title = route.name
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {route.name !== "Home" ? (
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            ) : null}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#1e90ff',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
    },
    text: {
        fontSize: 25,
        fontFamily: "Josefin",
    },
    pressable: {
        position: "absolute",
        right: 30,
        top: "50%",
    },
});
