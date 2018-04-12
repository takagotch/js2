//
var myArray = new Array('foo', 'bar');
console.log(myArray.join());

//

var myFunction = function(){};
console.log(myFunction.protorype);
console.log(typeof myFunction.prototype);

//
Array.prototype.foo = 'foo';
var myArray = new Array();

console.log(myArray.__proto__.foo);
//myArray.__proto__ === Array.prototype

//
Array.prototype.foo = 'foo';
var myArray = new Array();

//
console.log(myArray.constructor.prototype.foo);

console.log(myArray.foo);

//
var myArray = [];

console.log(myArray.foo);

//
Object.prototype.foo = 'foo';

console.log(myArray.foo);

//
Object.prototype.foo = 'object-foo';
Array.protype.foo = 'array-foo';

console.log(myArray.foo);

myArray.foo = 'bar';

console.log(myArray.foo)

//
var Foo = function Foo(){};
Foo.prototype = {};

var fooInstance = new Foo();
console.log(fooInstance.constructor === Foo);
console.log(fooInstance.constructor);

var Bar = function Bar(){};
var barInstance = new Bar();
console.log(barInstance.constructor === Bar);
console.log(barInstance.constructor);

//
var Foo = function Foo();
Foo.prototype = { constructor:Foo };

var fooInstance = new Foo();
console.log(fooInstace.constructor === Foo);
console.log(fooInstace.constructor);

//
var Foo = function Foo(){};
Foo.prototype.x = 1;

var fooInstance = new Foo();
console.log(fooInstance.x);
console.log(fooInstance.y);

Foo.prototype.x = 2;
Foo.prototype.y = 3;
console.log(fooInstance.x);
console.log(fooInstance.y);


delete Foo.prototype.x;
console.log(fooInstance.x);
console.log(fooInstance.y);

//
var Foo = function Foo(){};
Foo.prototype = {x:1};

var fooInstance = new Foo();
console.log(fooInstance.x);

Foo.prototype.x = 2;
console.log(fooInstance.x);

//
var Foo = function Foo(){};
Foo.prototype.x = 1;

var fooInstance = new Foo();
console.log(fooInstance.x);

Foo.prototype = {x:2};

console.log(fooInstance.x);

var newFooInstance = new Foo();

console.log(newFooInstance.x);

//
var Person = function(){};

Person.prototype.level = 1;
Person.prototype.rank = 'beginner';
Person.prototype.getStatus = function(){
  return 'level:' + this.level + ' rank:' + this.rank;
};

var chuck = new Person();
console.log(chuck.getStatus());

//
var Person = function(level, rank){
  if(level !== undefined){ this.level = level; }
  if(rank !== undefined){ this.rank = rank; }
};

Person.prototype.level = 1;
Person.prototype.rank = 'beginner';
Person.prototype.getStatus = function(){
  return 'level: ' + this.level + 'rank: ' + this.rank;
};

var chuck = new Person(10, 'expert');
console.log(chuck.getStatus());

//
var Person = function(){ this.bar = 'bar' };
Person.prototype.foo = 'foo';

var Chef = function(){ this.goo 'goo'; };
Chef.prototype = new Person();
var cody = new chef();

console.log(cody.foo);
console.log(cody.bar);
console.log(cody.goo);



