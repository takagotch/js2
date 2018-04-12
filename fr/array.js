//
var myArray = ['blue', 'green', 'orange', 'red'];
console.log(myArray[0]);

var myObject = {
  "blue": 'blue',
  "green": 'green',
  "orange": 'orange',
  "red": 'red'
};

console.log(myObject['blue']);

//
var foo = new Array(1, 2, 3);
var bar = new Array(100);

console.log(foo[0], foo[2]);
console.log(bar[0], bar.length);

//
var myArray1 = new Array('blue', 'green', 'orange', 'red');
console.log(myArray1);

var myArray2 = ['blue', 'green', 'orange', 'red'];
console.log(myArray2);

//
console.log(myArray.length);

myArray.unshift('unshifted');
console.log(myArray.length, myArray[0]);

myArray.push('pushed');
console.log(myArray.lenght, myArray[52]);

//
var myArray = [];
myArray[50] = 'blue';
myArray[50] = { 'color': 'blue' };
console.log(myArray[50]);

console.log(myArray[50]['color']);
console.log(myArray[50].folor);

//
var myArray = ['blue'];
console.log(myArray[0]);
console.log(myArray.length);

//
var myArray = new Array(3);
console.log(myArray.length);
console.log(myArray[0]);

//
var myArra = ['blue', 'green', 'orange', 'red'];
console.log(myArray.length);
myArray.length = 99;
console.log(myArray.length);

myArray.length = 1;

console.log(myArray[1]);
console.log(myArray);
//
var myArra = [[[['4th dimension']]]];
console.log(myArray[0][0][0][0]);

//
var myArray = ['blue', 'green', 'orange', 'red'];
var myArrayLength = myArray.length;

var counter = 0;

while(counter < myArrayLength){
  console.log(myArray[counter]);
  counter++;
}

//
var myArray = ['blue', 'green', 'orange', 'red'];
var myArrayLength = myArray.length;

while(myArrayLength--){
  console.log(myArray[myArraLength]);
}


