import React,{useState, useReducer} from 'react';
import {Text, Button ,View, MaskedViewComponent} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, FlatList } from 'react-native-gesture-handler';


const Test = ({navigation}) =>{

const [list, changeText] = useState('');
const [title, changeTitle] = useState('');
const [todo,changeTodo] = useState([]);
const initialState = {};
const [state, dispatch] = useReducer(reducer, initialState);
const AddInTodo = () =>{
    let array = todo;
    array.push(list);
    changeTodo(todo,array);

    
}

function reducer(state, action) {
    let array = todo;
    array.push(list);
    changeTodo(todo,array);
    }
  
    


    return (
       <View>
        <Button title="click here" onPress={()=> navigation.navigate('Links')} />
        <TextInput value={title} onChangeText={(something)=>changeTitle(something)} />
        <TextInput value={list} onChangeText={(something)=>changeText(something)} multiline={true}/>
        <Button title="clear state" onPress={()=>changeText('','')} />
        <Button title="save state" onPress={()=>changeTodo(todo,todo.push(`${title}:'${list}'`))} />
        <Button title="clear complete" onPress={()=>changeTodo('','')} />
        <Button title="log complete" onPress={()=>console.log(`${title}:${list}`)} />
        <Button title="log todo" onPress={()=>console.log(todo)} />


      {/* <FlatList  
                    data={{todo}}
                    renderItem={({item}) =>{
                        return(
                            <View>
                            console.log({text})
                            <Text>{item}</Text>
                            </View>
                        )} } />  */}
                        <Text>{todo}</Text>
       
       
    
        </View>

       
    )
}



export default Test;

