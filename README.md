### TakeMeTour Internship Program 2019

Hi all applicants! Welcome to TakeMeTour Internship Program 2019. Being an intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of a great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be written in Javascript language. The code will be tested with Node8, so you can use all Javascript features that are available in Node8.

1. Write a function that shifts the elements of array to left or right by n elements in an infinite loop. the function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
//create variables
const array = [1,2,3,4,5,6, 7];
const direction = "left";
const numElements = 2;

console.log(array);
console.log(direction);
console.log(numElements);

console.log(shift(array, direction, numElements));


//function to shift elements
function shift(array, direction, numElements) {
  //create an array for results
  var result = [];
  console.log("direction: "+ direction);
  console.log("numElements: "+ numElements);

  // if direction is left
  if (direction==="left"){
    //initialise i
    var i=0;

    for (i=0; i<array.length; i++){ //for each element, shift to the left by numElements

      if (i+numElements<array.length){ // if i is less than the array length

        result.push(array[i+numElements]);

      } else { //if i is more than the array length

        result.push(array[i+numElements-array.length]);
      }
    }
  } else { //direction is right

    var i=0;

    for (i=0; i<array.length; i++){ //for each element, shift to the right by numElements

      if (i<numElements){ // if i is less than the number length of elements to be shifted

        result.push(array[array.length-numElements+i]);

      } else { //if i is more than or equal to numElements

        result.push(array[i-numElements]);

      }
    }
  }

  return result;
}

```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2019/blob/master/hero.json) and write a code to calculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
const heroes = require('./hero.json');

console.log(heroes);
console.log("2.1 Average **networth** of all heroes is " + q2part1(heroes));
console.log("2.2 Average **level** for hero that has 'intelligent' as **primary_attribute** is " + q2part2(heroes));
console.log("2.3 The hero who got the most **assist** is " + q2part3(heroes).name);
console.log("2.4 Find the hero who got the worst **kill/death ratio**" + q2part4(heroes).name);

//2.1 Average **networth** of all heroes
function q2part1(heroes){
  //initialise total net worth
  let totalNetWorth = 0;

  //initialise number of heroes
  let numHeroes = 0;

  //for each hero
  heroes.forEach(function(hero) {
    //add the total networth of each hero to the total
    totalNetWorth+=hero.networth;
    //add to the count of heroes
    numHeroes++;
  });

  //return the average of heroes' networth
  return totalNetWorth/numHeroes;
}

//2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
function q2part2(heroes){
  //initialise total level of all intelligent heroes
  let totalLevelOfIntelligentHeroes = 0;

  //initialise number of heroes
  let numIntelligentHeroes = 0;

  //for each hero in the heroes array
  heroes.forEach(function(hero) {

    //if the hero's primary_attribute is intelligent
    if (hero.primary_attribute==='intelligent'){

      //add this hero's intelligence to the total level of all intelligent heros
      totalLevelOfIntelligentHeroes+=hero.level;

      //increace the count of number of heroes by 1
      numIntelligentHeroes++;
    }
  });

  //return the avg level of intelligent heroes
  return totalLevelOfIntelligentHeroes/numIntelligentHeroes;
}

//2.3 The hero who got the most **assist**
function q2part3(heroes){
  //initialise hero with the most assist
  let heroWithMostAssist = heroes[0];

  //for each hero
  heroes.forEach(function(hero) {

    //if the current hero's assist is higher than the current heroWithMostAssist
    if (hero.assist>heroWithMostAssist.assist){

      //make the current hero the new heroWithMostAssist
      heroWithMostAssist=hero;
    }
  });

  //return the hero with the most assist
  return heroWithMostAssist;
}

//2.4 Find the hero who got the worst **kill/death ratio**
function q2part4(heroes){
  //initialise hero with the worst kill death ratio
  let heroWithWorstKD = heroes[0];

  //initialise the worst KD ratio
  let worstKD = 1.0*heroes[0].kill/heroes[0].death;

  //for each hero
  heroes.forEach(function(hero) {

    //find the current hero's KD
    let currentKD = 1.0*hero.kill/hero.death;

    //if the current worstKD is higher than the current hero's KD
    if (worstKD>currentKD){

      //make the current hero the heroWithWorstKD
      heroWithWorstKD=hero;

      //make the current hero's KD the worst KD
      worstKD=currentKD;
    }
  });

  //return the hero with the worst KD
  return heroWithWorstKD;
}

```

## Simple Web Application: A joke from Chuck Norris.

This part of the quest will be a challenging one. You are going to make a simple web application which allows users to get some jokes from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users have options to change the number of the resulting jokes, user's first name and last name
- UI Design: as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework are allowed.
- Using tools & framework which are the same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

```
React Native was used

1) cd to project folder (./Q3)
2) npm install -g expo-cli
3) npm i --save
4) (depends on whether you encounter an error) npm install @expo/vector-icons --save-dev
5) expo start
6) run app on expo on mobile (ios/android)

```

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: GraphQL is a query-based API. Frontend clients can query a set of data that is dynamic and can be changed to their needs, without having to request a fixed set of data like in REST API. In addition, insightful analytics can be performed on the types of queries received in the GraphQL servers, so less used API routes can be depreciated and more efficient API routes can be created.


Q2: Please explain how javascript benefits from cross-platform developments

A2:
- An app's client and server side can all be written in JavaScript. This makes it easier to maintain because JavaScript can be used by both frontend and backend web developers.
- JavaScript has many popular libraries, webtools and frameworks which developers can use, such as React, Node.js, AngularJS and more.
- React Native helps particularly for cross-platform development because it makes it possible to write code for apps for iOS and Android using only a single programming language.



Q3: What do you expect to get during an internship at TakeMeTour?

A3: I have never worked overseas or worked in the tourism industry, and I believe that this internship will give me more global perspective as well as an exposure to a new industry. I hope to get more experience as a data scientist as it is a more backend experience in a mobile/web development environment which is new to me. I also hope to gain greater proficiency in JavaScript.

## Submitting

Please fork this repo and submit your repository at benz@takemetour.com along with your contact information and also your resume if you have one.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
