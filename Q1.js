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
