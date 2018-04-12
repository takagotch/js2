//
var addFunction = new Function('num1', 'num2', 'return num1 + num2');

var timesFunction = new Function('num1', 'num2', 'return num1 * num2');

console.log(addFunction(2, 2),timesFunction(2, 2));

var addFunction = function(num1, num2){
  return num1 + num2;
};

function addFunction(num1,num2){
  return num1 + num2;
}

//
var sayHi = function(){
  return 'Hi';
};
console.log(sayHi());

//
var yelp = function(){
  console.log('str');
}

console.log(yelp() === undefined);

//
var funcA = function(){};  //funcA()
var funcB = [function(){}];  //funcB[0]
var funcC = {method: function(){}}; //funcC.method() funcC['method']()

var funcD = function(func){
  return func;
};

var runFuncPassedToFuncD = funcD(function(){
  console.log('Hi');
});

runFuncPassedToFuncD();

var funcE = function(){};
funcE.answer = 'yup';
console.log(funcE.answer);


//
var addFunction = function(number1, number2){
  var sum = number1 + number2;
  return sum;
}

console.log(addFunction(3, 3));

//
var myObject1 = {
  name: 'myObject1',
  myMethod: function(){ console.log(this.name); }
}

myObject.myMethod();

var myObject2 = function(){ console.log(this) };
myObject();

//
var add = function(){
  return arguments[0] + arguments[1];
};

console.log(add(4, 4));

//
var foo = function foo(){
  console.log(arguments.callee);
  //arguents.callee()
}();

//
var myFunction = function(z, s, d, e, r, m, q){
  return myFunction.length;
};

console.log(myFunction());

//
var myFunction = function(foo){
  arguments[0] = 'xyz';
  console.log(foo, arguments[0]);
  foo 'foo';
  console.log(foo, arguments[0]);

  var arg1 = argments[1];
  arguments[1] = '123';
  console.log(arg1, arguments[1]);
}

myFunction('abc');

//
var add = function(x, y){
  if(typeof x !== 'number' || typeof y !== 'number'){
  return 'pas in numbers';
  }
  return x + y;
}
console.log(add(3, 3));
consolo.log(add('2', '2'));

//
var myFunction = function(){
  return 'foo';
};
console.log(myFunction());

var myObject = {
  myFunction: function(){ return 'bar'; }
}
console.log(myObject.myFunction());

var Cody = function(){
  this.living = true;
  this.age = 33;
  this.sex = 'male';
  this.getGender = function(){ return this.gender; };
}
var cody = new Cody();
console.log(cody);

var great = {
  runGreet: function(){
    console.log(this.name, arguments[0], argument[1]);
  }
}

var cody = { name: 'cody' };
var lisa = { name: 'lisa' };

greet.runGreet.call(cody, 'foo', 'bar');

greet.runGreet.apply(lisa, ['foo', 'bar']);

//
function(){ console.log('hi'); };

var sayHi = function(f){
  f();
}

sayHi(function(){ console.log('hi'); });

//

var sayWord = functtion(){ console.log('str');}();

//
(function(msg){
  console.log(msg);
})('Hi');

(function(msg){
  console.log(msg)
})('Hi');

!function sayHi(msg) {console.log(msg);}('Hi');

function sayHi(){console.log('hi')}();

//
var foo = function(){
  var bar = function(){
    var goo = function(){
      console.log(this);
    }();
  }();
}();

//
var foo = function(f){
  return f;
}

var bar = foo(function() {console.log('Hi');});
bar();

//
var speak = function(){
  sayYo();
  function sayYo(){ console.log('Yo');}
}();

function sum(x, y){ return x + y; }

//
var countDownFrom = function countDownFrom(num){
  console.log(num);
  num--;
  if(num < 0){return false;}
  //arguments.callee(num)
  countDownFrom(num);
};

countDownFrom(num);

