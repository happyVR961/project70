import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class Writestory extends React.Component{
    render(){
        return(
         <View>
         <Image src = {require("../assets/write.png")}
         style = {{width:50, height:50, marginTop:50}}/>
         <Header
          backgroundColor={'#123456'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         <TextInput placeholder = "Title of the Story"></TextInput>
         <TextInput placeholder = "Author of the Story"></TextInput>
         <TextInput placeholder = "Write a Story"></TextInput>
      <TouchableOpacity>
          <Text>Submit</Text>
      </TouchableOpacity>
         </View>
        );
    }
}