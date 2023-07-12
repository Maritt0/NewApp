import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Modal,
    Pressable
} from "react-native";
import React, { useState } from "react";

const renderItemTask = ({item}) => {
    return (
        <View style={styles.task} key={item.id}>
            <Text style={styles.taskText}>{item.task}</Text>
        </View>
    )
}

const MainScreen = ({ taskList }) => {

    const [list, setList] = useState(taskList)
    const [input, setInput] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    const onAddTask = () => {
        console.log("Se agregó un task");
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ])
    }
    const onRemoveTask = () => {
        console.log("Se quitó un task");
        const updatedList = list.slice(0, list.length - 1);
        setList(updatedList);
    }
    const markTaskAsDone = (taskId) => {
        const updatedList = list.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: true,
            };
          }
          return task;
        })
    }
    
    
        
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput
                    placeholder="Comprar vacío" 
                    style={styles.input}
                    value={input}
                    onChangeText={setInput} 
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onAddTask}
                >
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onRemoveTask}
                >
                    <Text style={styles.buttonText}>Quitar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <FlatList
                    data = {list}
                    keyExtractor={task => task.id}
                    renderItem={renderItemTask}
                />
                <Pressable
                    style={styles.buttonComplete}
                    onPress={markTaskAsDone}
                >
                    <Text style={styles.buttonText}>Marcar como completada</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Mostrando Modal!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MainScreen;
const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    view1:
    {
        height: "12%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "azure",
        width: "100%",
    },
    view2: 
    {
        height: "88%",
        backgroundColor: "#a2a8d3",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
    },
    input: 
    {
        width: 180,
        height: 35,
        borderBottomColor: "deepskyblue",
        borderBottomWidth: 3,
        color: "black",
        fontSize: 20,
    },
    button: 
    {
        height: 40,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "grey",
        
    },
    buttonComplete:
    {
        height: 25,
        width: 200,
        borderRadius: 5,
        backgroundColor: "white",
        margin:20,
    },
    buttonText: 
    {
        fontSize: 16,
        textAlign: "center",        
    },
    task: 
    {
        width: 200,
        padding: 12,
        backgroundColor: "blue",
        borderRadius: 30,
        borderColor: "purple",
        borderBottomWidth: 6,
        borderRightWidth: 2,
        marginBottom: 20,
    },
    taskText: 
    {
        fontSize: 20,
        color:"white",
        margin:5,
    },
    centeredView: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: 
    {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: 
    {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    button: 
    {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    },
    buttonOpen: 
    {
    backgroundColor: '#F194FF',
    },
    buttonClose: 
    {
    backgroundColor: '#2196F3',
    },
    textStyle: 
    {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    modalText: 
    {
    marginBottom: 15,
    textAlign: 'center',
    },
});
