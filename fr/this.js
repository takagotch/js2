//
var cody = {
  libing : true,
  age : 33,
  sex : 'male',
  getSex : function(){ return cody.sex; }
};

//
var cody = {
  living : true,
  age : 33,
  sex : 'male',
  getGender : function(){ return this.sex; }
};

console.log(cody.getSex());

//
var foo = 'foo';
var myObject = { foo: 'str' };

var sayFoo = Function(){
  console.log(this['foo']);
};

myObject.sayFoo(); //myObject.sayFoo()
sayFoo(); //sayFoo()

//
window.foo = 'foo';
window.myObject = {foo: 'str'};

window.sayFoo = function(){
  console.log(this['foo']);
};

window.myObject.sayFoo = sayFoo;

window.myObject.sayFoo(); //sayFoo()
window.sayFoo();

//
var myObject = {
  func1: function(){
    console.log(this);
    var func2 = function(){
      console.log(this)
      var func3 = function(){
        console.log(this);
      }();
    }();
  }
}

myObject.func1();

//
var foo = {
  func1 : function(bar){
    bar();
    console.log(this);
  }
}

foo.func1( function(){ console.log(this); });

//
var myObject = {
  myProperty: 'str',
  myMethod : function(){
    var that = this;
    var helperFunction = function(){
      console.log(that.myProperty);
      console.log(this);
    }();
  }
}

myObject.myMethod();


//
var myObject = {};

var myFunction = function(param1, param2){
  this.foo = param1;
  this.bar = param2;
  console.log(this) 
};  

myFunction.call(myObject, 'foo', 'bar');

console.log(myObject)

//
var myObject = {};

var myFunction = function(param1, param2){
  this.foo = param1;
  this.bar = param2;
  console.log(this)
};

myFunction.apply(myObject, ['foo', 'bar'])'
console.log(myObject)

//
var Person = function(name){
  this.name = name || 'str';
}

var cody = new Person('Str');

console.log(cody.name); #=> 'Str'

//
var Person = function(name){
  this.name = name || 'Str';
}

var cody = Person('Str');
console.log(cody.name);

console.log(window.name);

//
var Person = funtion(x){
  if(x){ this.fullName = x; };
};

Person.prototype.whatIsMyFullName = function(){
  return this.fullName;
}

var cody = new Person('str');
var tky = new Person('str');

console.log(cody.whatIsMyFullName(), tky.whatIsMyFullName());

//
Object.prototype.fullNmae = 'str';
var tky = new Person();
console.log(tky.whatIsMyFullName());















