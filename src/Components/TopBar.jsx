import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import React from "react";

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder="Comprar vacío"
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity style={styles.button} onPress={onAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );};

export default TopBar;

const styles = StyleSheet.create({
    view1: 
    {
        height: "15%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 25,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#ff895d",
        width: "100%",
    },
    input: 
    {
        width: 250,
        height: 35,
        borderBottomColor: "#faf5e4",
        borderBottomWidth: 3,
        color: "black",
        fontSize: 20,
    },
    button: 
    {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#faf5e4",
    },
    buttonText: 
    {
        fontSize: 16,
        textAlign: "center",
    },
});

