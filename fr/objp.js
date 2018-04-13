//
var myObject = {};

myObject.myFunction = function(){};
myObject.myArray = [];
myObject.myString = 'string';
myObject.myNumber = 33;
myObject.myDate = new Date();
myObject.myRegExp = /a/;
myObject.myNull = null;
myObject.myUndefined = undefined;
myObject.myObject = {};
myObject.myMath_PI = Math.PI;
myObject.myError = new Error('Error!');

console.log(myObject.myFunction,myObject.myArray,myObject.myString,myObject.myNumber,myObject.myDate,myObject.myRegExp,myObject.myNull,myObject.myNull,myObject.myUndefined,myObject.myObject,myObject.myMath_PI,myObject.myError);

var myFunction = {};

myFunction.myFunction = function(){};
myFunction.myArray = [];
myFunction.myString = 'string';
myFunction.myNumber = 33;
myFunction.myDate = new Date();
myFunction.myRegExp = /a/;
myFunction.myNull = null;
myFunction.myUndefined = undefined;
myFunction.myObject = {};
myFunction.myMath_PI = Math.PI;
myFunction.myError = new Error('ERR');

console.log(myFunction.myFunction,myFunction.myArray,myFunction.myString,myFunction.myNumber,myFunction.myDate,myFunction.myRegExp,myFunction.myNull,myFunction.myNull,myFunction.myUndefined,myFunction.myObject,myFunction.myMath_PI,myFunction_myError);

//
var object1 = {
  object_1: {
    object_1_1: { foo: 'bar' },
    object_1_2: {}
  },
  object_2: {
    object_2_1: {},
    object_2_2: {}
  }
};

console.log(object1.object1_1.object_1_1.foo);

//
var myArray = [[[]]];

var myFunction = function(){
  var myFunction = function(){
    var myFunction = function(){
    };
  };
};


var foo = [{
  foo: [{
    bar: {
      say: function(){
        return 'h1';
      }
    }
  }]
}];

console.log(foo[0].foo[0].bar.say());

//
var cody = new Object();

cody.living = true;
cody.age = 33;
cody.sex = 'male';
cody.getSex = function(){ return cody.sex; };

console.log(
  cody.living,
  cody.age,
  cody.sex,
  cody.getSex()
);  //logs 'true 33 male male'

cody.living = false;
cody.age = 99;
cody.set = 'female';
cody.getSex = function(){ return 'Sex= ' + cody.sex };

//
var cody = new Object();

cody['living'] = true;



//

//

//

//

//

//

//







