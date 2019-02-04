import React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import Joke from './Joke';

export default class JokeList extends React.Component{
  constructor(props){
    super(props)
    console.log("JokeList.js: props received")
    this.state={
      jokes:props.jokes,
      categories:""
    }
    console.log("Jokes.js: " + this.state.jokes)
  }

  displayJokes(joke){

  }

  render(){

    return this.state.jokes.map(joke =>
    <Joke
      key={joke}
      joke={joke.toString()}
    />
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
