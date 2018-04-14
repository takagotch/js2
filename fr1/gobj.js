//
var myStringVar = 'myString';
var myFunctionVar = function(){};
myString = 'String';
myFunction = function(){};

//
console.log('myStringVar' in window);
console.log('myStringVar' in window);
console.log('myString' in window);
console.log('myFunction' in window);

//
var foo = 'bar';
var myApp = function(){
  var run = function(){
    console.log(foo);
  }();
}
myApp();

//
var myFunction = function(){ var foo = 'bar'; };

var myApp = function(){
  var run = function(){
    try{
      console.log(foo);
    } catch(e){
      console.log(e);
    }
  }();
}
myApp();

//
var a = 10;
b = 100;

delete a;
delete b;

console.log(a);
console.log(b);
//
var foo = 'bar';
windowRef1 = window;
windowRef2 = this;

console.log(windowRef1, windowRef2);
console.log(windowRef1, windowRef2.foo);

//
var foo = {
  fooMethod: function(){
    alert('foo' + 'bar');
    window.alert('foo' + 'bar');
  }
}

foo.fooMethod(); //window.foo.fooMethod()

