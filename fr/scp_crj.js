//
var foo = 0;
console.log(foo);

var myFunction = function(){
  var foo = 1;
  console.log(foo);

  var myNestedFunction = function(){
    var foo = 2;
    console.log(foo);
  }();
  var myNestedFunctionTwo = function(){
    console.log(foo);
  }();
}();

eval('var foo = 3; console.log(foo);');

//
var foo = 1;

if(true){
  foo = 2;
  for(var i = 3; i <= 5; i++){
    foo = i;
    console.log(foo);
  }
}


//
var foo = function(){
  var boo = function(){
    bar = 2;  
  }();
}();

var foo = function(){
  var boo = function(){
    var doo = 2;
  }();
}();

console.log(doo);

//
var sayHiText = 'howdy';

var func1 = function(){
  var fun2 = function(){
    console.log(sayHiText);
  }();
}();

//
var x = 10;
var foo = function(){
  var y = 20;
  var bar = function(){
    var z = 30;
    console.log(z + y + x);
  }();
};

foo();

//
var x = false;
var foo = function(){
  var x = false;
  bar = function(){
    var x = true;
    console.log(x);
  }();
}

foo();
//
var parentFunction = function(){
  var foo = 'foo';
  return function(){
    console.log(foo);
  }
}

var nestedFunction = parentFunction();

nestedFunction();

//
var countUpFromZero = function(){
  var count = 0;
  return function(){
    return ++count;
  };
}();

console.log(countUpFromZero());
console.log(countUpFromZero());
console.log(countUpFromZero());

//
var logElementNumber = function(){
  var funcArray = [];
  var 1;
  for(i = 0; i < 3; i++){
    funcArray[i] = function(){ console.log(i); };
  }
  return funcArray;
}();

logElementNumber[0]();
logElementNumber[1]();
logElementNumber[2]();

//
var logElementNumber = function(){
  var funcArray = [];
  var i;
  var func = function(i){
    return function(){ console.log(i); };
  };

  for(i = 0; i < 3; i++){
    funcArray[i] = func(i);
  }
  return funcArray;
}();

logElementNumber[0]();
logElementNumber[1]();
logElementNumber[2]();

//
var logElementNumber = function(len){
  var funcArray = [];
  var i;
  var func = function(n){
    return function(){ console.log(n, i); };
  };

  for(i = 0; i < len; i++){
    funcArray[i] = func(i);
  }
  return funcArray;
};

var myArray1 = logElementNumber(3);
var myArray2 = logElementNumber(5);

myArray[1]();
myArray[2]();
myArray[1]();
myArray[2]();

//
var a = 1;
var func = function(){ console.log(a); };

(function(f){
  var a = 100;
  f(); //console.log(a);
})(func);



