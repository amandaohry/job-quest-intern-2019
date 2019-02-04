import React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class Joke extends React.Component{
  constructor(props){
    super(props)
    console.log("Joke.js: props received")
    this.state={
      type:"",
      value: [],
      id:"",
      joke:props.joke,
      categories:""
    }
    console.log("Joke.js: " + this.state.joke)
  }

  render(){
    return(
      <Card containerStyle={styles.container}>
        <Text style={{textAlign:'center'}}>{this.state.joke}</Text>
      </Card>


    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    borderColor: '#ddd',
    borderWidth:1,
    borderRadius: 2,
    height: 100,
    width: 300,
    justifyContent:'center',
    alignItems:'center'
  }
})
