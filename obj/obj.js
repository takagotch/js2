//http:/jsfiddle.net/jseja/cjXax

var cody = {}; //var cody = new Object();
for(key in cody){
  if(cody.hasOwnProperty(key)){
    condole.log(key);
  }
}
//Object() Function() Array()


//http:jsfiddle.net/jseja/qvEFh
var cody1 = new Object();
var cody2 = new Object(undefined);
var cody3 = new Object(null);

console.log(cody1, cody2, cody3);
console.log(typeof cody1, typeof cody2, typeof cody3);

//http://jsfiddle.net/jseja/YDBT9
console.log(new Object('foo'));
console.log(new Object(1));
console.log(new Object([]));
console.log(new Object(function(){}));
console.log(new Object(true));
console.log(new Object(/\bt[a-z]+\b/));

//Object()
//prototype

//String.prototype
//constructor
//hasOwnProperty(V)
//isPrototypeOf(V)


//
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.sex = 'male';
cody.getSex = function() { return cody.sex };

//
var cody = {
  living: true,
  age: 33,
  sex: 'male',
  getGender: function(){ return cody.sex; }
};
console.log(cody);


//
var cody = {
  'living': true,
  'age': 33,
  'sex': 'male',
  'getSex': function(){ return cody.gender; }
}
console.log(cody);

//
Object.prototype.foo = 'foo';
var myString = 'empty str';
console.log(myString.foo);

//
var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
console.log(addNumberA(2, 2));

var addNumbersB = function(num1, num2){return num1 + num2;};
console.log(addNumberB(2, 2));



