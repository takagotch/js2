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

//

//

//

//

