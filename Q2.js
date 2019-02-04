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
