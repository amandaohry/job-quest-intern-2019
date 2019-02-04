import React from 'react';
import { View , Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Q3 extends React.Component{
  state = {
    firstName:"",
    lastName:"",
    joke:{}
  }
  getJoke(jokeID){
    fetch('http://www.icndb.com/api/',{
      method: 'POST',
      header:{
        Accept: 'application/json',
      },
    })
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      this.setState({
        joke: response
      })
    })
    console.log(this.state.joke)
  }
  render(){
    return(
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}
