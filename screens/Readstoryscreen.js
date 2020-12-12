import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class Readstory extends React.Component{
    render(){
        return(
         <View>
             <Image src = {require("../assets/read.png")}
             style = {{width:40, height:40, marginTop:50}}/>
        <Text style = {styles.container}>Read a Story!</Text>
            
         </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });