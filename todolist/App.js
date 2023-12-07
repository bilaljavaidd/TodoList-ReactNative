import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task.js';
import { KeyboardAvoidingView } from 'react-native-web';

export default function App() {

 const [task , setTask] = useState();
 const [taskItems , setTaskItems] = useState([]);

const handleAddTask = () =>{
  Keyboard.dismiss()
  setTaskItems([...taskItems , task])
  setTask(" ");
}

const completeTask = (index) =>{
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1)
  setTaskItems(itemsCopy)
}

  return (
    <View style={styles.container}>
      {/* Today's Task */}

      <View style={styles.taksWrapper}>

        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {/* this is where the tasks will go! */}
          {
            taskItems.map((item,index)=>{
             return(
                   <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                     
               <Task key={index} text = {item}/>
                   </TouchableOpacity>
             ) 
            })
          }
          {/* <Task text={'task 1'} />
          <Task text={'task 1'} /> */}

        </View>

      </View>
      {/* Write a task */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={ text => setTask(text)}/>

      <TouchableOpacity onPress={()=> handleAddTask()} >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
  },
  addText: {},

});
