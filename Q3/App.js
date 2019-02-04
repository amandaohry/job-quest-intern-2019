import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { Input, FormValidationMessage, Button, Card } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Joke from './src/components/Joke';
import JokeList from './src/components/JokeList';

export default class App extends React.Component {
  static navigationOptions = {
  title: 'The Chuck Norris Joke Generator',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'black'
    },

  };
  state = {
    firstName:"",
    lastName:"",
    joke:" ",
    numJokes:1,
    jokes:[],
    isJokeLoading:false,
    areJokesLoading:false,
  }

  //gets a specific number of jokes from url
  getRandomJokes(){
    this.setState({areJokesLoading: true})
    console.log("2. get random jokes")
    fetch('http://api.icndb.com/jokes/random/'+this.state.numJokes + "/"+ this.getEncodedUrl(),{
      method: 'GET',
      header:{
        Accept: 'application/json',
      },
    })
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      this.setState({
        jokes: this.getJokesFromJson(response),
        areJokesLoading: false
      })
      console.log("4. this.state.jokes is " + this.state.jokes)
    })
  }

  getJokesFromJson(response){
    console.log("3. get jokes from json")
    console.log("a. number of jokes in json: " + response.value.length)
    let jokes = new Array(response.value.length);
    response.value.forEach(function(jokeObject){
      console.log("b. joke string in each joke object is" + jokeObject.joke);
      jokes.push(jokeObject.joke);
    });
    console.log("3. jokes: " + jokes)
    return jokes;
  }
  getEncodedUrl(){
    var result =  "?escape=javascript";
    return result;
  }

  //gets a random joke from url
  getRandomJoke(){
    console.log("1. get a random joke");
    this.setState({isJokeLoading:true})

    fetch('http://api.icndb.com/jokes/random/' + this.getEncodedUrl(),{
      method: 'GET',
      header:{
        Accept: 'application/json',
      },
    })
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      this.setState({
        joke: response.value.joke,
        isJokeLoading: false
      })
      console.log("1a. joke is " + this.state.joke);
    })

  }

  //displays multiple jokes
  displayJokes(){
    console.log("5. displayjokes method")
    //
    // if (this.state.jokes.length===0){
    //   console.log("5z. if jokes is null, return nothing")
    //   return;
    // }
    if(this.state.areJokesLoading==true){
      return(
        <View style={{marginTop:'3%'}}>
          <ActivityIndicator />
        </View>
      )
    } else {
      console.log("5a. these are the jokes about to be mapped to joke object: " +this.state.jokes);
      return(
        <JokeList jokes={this.state.jokes}/>
      )
    }


  }
  displayJoke(){
    if(this.state.isJokeLoading==true){
      return(
        <View style={{height:100}}>
          <ActivityIndicator />
        </View>
      )
    }else{
      return(<Joke joke={this.state.joke}/>)
    }
  }
  componentWillMount(){

  }
  render(){
    return(
      <ScrollView contentContainerStyle={{ paddingTop:20, paddingBottom:20, justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.title}>Random Joke Generator</Text>
        <Button
          title="Generate a random joke"
          style={{paddingBottom:10}}
          onPress={()=>{
            this.getRandomJoke()

          }}
        />

        <View style={styles.container}>{this.displayJoke()}</View>

        <Text style={styles.title}>Can't get enough of Chuck Norris?</Text>

        <Text>Enter the number of jokes you want to see!</Text>

        <Input
          placeHolder='number of jokes'
          value={this.state.numJokes.toString()}
          containerStyle={{width:100,alignItems:'center'}}
          onChangeText={numJokes=>this.setState({numJokes})}
          underlineColorAndroid= 'transparent'
          returnKeyType='done'
          keyboardType='number-pad'
          name='numJokes'
          textAlign={'center'}
        />
        <Button
          title="Generate random jokes"
          style={{padding:10}}
          onPress={()=>{
            this.getRandomJokes()
          }}
        />

        <View>{this.displayJokes()}</View>
      </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    padding: 5,
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

const RootStack = createStackNavigator({
    main : {
      screen: createStackNavigator({
        app: { screen: App },
      }),
      navigationOptions: {
        title: 'The Chuck Norris Joke Generator',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black'
          },
      },
    }

});
