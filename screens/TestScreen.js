import React,{useState} from 'react';
import {Text, Button ,View, MaskedViewComponent} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, FlatList } from 'react-native-gesture-handler';

const Test = ({navigation}) =>{
const [list, changeText] = useState('');
const [title, changeTitle] = useState('');
const [todo,changeTodo] = useState([]);
const AddInTodo = () =>{
    let newTodo = list;
    let newTitle = title;
    let oldTodo = todo;
    oldTodo.push(newTodo);
    changeTodo(oldTodo);
    console.log(title:list);
}



    return (
       <View>
        <Button title="click here" onPress={()=> navigation.navigate('Links')} />
        <TextInput value={title} onChangeText={(something)=>changeTitle(something)} />
        <TextInput value={list} onChangeText={(something)=>changeText(something)} multiline={true}/>
        
        
       <Button title="clear state" onPress={()=>changeText('','')} />
       <Button title="save state" onPress={()=>AddInTodo()} />
       <Button title="clear complete" onPress={()=>changeTodo('','')} />

       <FlatList  
                    data={{todo}}  
                    renderItem={({item}) =>{
                        return(
                            <Text>{item}</Text>
                        )} } />
       
       
    
        </View>

       
    )
}



export default Test;

// const styles = StyleSheet.create({
//     container: {
//       border
//     },
//   });