//
var cody = new Object();

cody.living = true;
cody.age = 33;
cody.sex = 'male';

//
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.sex = 'male';
cody.getSex = function(){
  return cody.gender;
};
console.log(cody.getGender());

//
var myObject = new Object();

myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

var myString = new String('foo');
console.log(myString);

//
var Person = function(living, age, sex){
  this.living = living;
  this.age = age;
  this.sex = sex;
  this.getSex = function(){ return this.sex; };
};

var cody = new Person(true, 33, 'male');
console.log(cody);

var myString = new String('foo');
console.log(myString);

//
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.sex = 'male';
codyA.getSex = function(){
  return codyA.sex;
};

console.log(codyA);

var Person = function(living, age, sex){
  this.living = living;
  this.age = age;
  this.sex = sex;
  this.getSex = function(){ return this.sex; };
};

var codyB = new Person(true, 33, 'male');

console.log(codyB);

//
var Person = function(living, age, sex){
  this.living = living;
  this.age = age;
  this.sex = sex;
  this.getSex = function(){ return.this.sex; };
};

var cody = new Person(true, 33, 'male');

console.log(typeof cody);
console.log(cody);
console.log(cody.constructor);

//
var myArray = new Array();

console.log(typeof myArray);

console.log(myArray);
console.log(myArray.constructor);

//
var Person = function(living, age, sex){
  this.living = living;
  this.age = age;
  this.sex = sex;
  this.getSex = function(){
    return this.sex;
  };
};

var cody = new Person(true, 33, 'male');
console.log(cody);

var lisa = new Person(true, 34, 'female');
console.log(lisa);

//
var myString = new String('foo');
console.log(myString);

//
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate = new Date();
var myRegexp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Error');

console.log(myNumber.constructor);
console.log(myString.constructor);
console.log(myBoolean.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);

//
var myNumber = new Number(23);
var myNumberLiteral = 23;

var myString = new String('male');
var myStringLiteral = 'male';

var myBoolean = new Boolean(false);
var myStringLiteral = false;

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];

var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function(x, y){return x*y};

var myRegexp = new RegExp('\bt[a-z]+\b');
var myRegexpLiteral = /\bt[a-z]+\b/;

console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.construcotor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);

//
var myString = 'string'
var myNumber = 10;
var myBoolean = false;
var myNull = null;
var myUndefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined);

var myObject = {
  myString: 'string',
  myNumber: 10,
  myBoolean: false,
  myNull: null,
  myUndefined: undefined
};

console.log(myObject);

var myArray = ['string', 10, false, null, undefined];
console.log(myArray);

//
var primitiveString1 = "foo";
var primitiveString2 = String("foo");
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean1 = Boolean('true');

console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveNumber2);

var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x * y");
var myDate = new Date();
var myRegexp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('ERR');

console.log(
typeof myNumber,
typeof myString,
typeof myBoolean,
typeof myObject,
typeof myArray,
typeof myFunction,
typeof myDate,
typeof myRegExp,
typeof myError
);

//
var myString = 'foo';
var myStringCopy = myString;
var myString = null;

console.log(myString, myStringCopy);

//
var price1 = 10;
var price2 = 10;
var price3 = new Number('10');
var price4 = price3;

console.log(price1 === price2);

console.log(price1 === price3);

console.log(price4 === price3);

price4 = 10;

console.log(price4 === price3);
console.log(price4 == price3);

//
var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "foo";
var primitiveString2 = String('foo');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

console.log(primitiveString1.toString(), primitiveString2.toString());

console.log(primitiveNumber.toString(), primitiveNumber2.toStirng());

console.log(primitiveBoolean.toString(), primitiveBoolean1.toString());

console.log(myNull.toString());
console.log(myUndefined.toString());

//
var object = {
  myString: 'stirng',
  myNumber: 10,
  myBoolean: false,
  myNull: null,
  myUndefined: undefined
};

var array = ['string', 10, false, null, undefined];

var myString = 'string';
var myNumber = 10;
var myBoolean = false;
var myNull = null;
var Undefined = undefined;

//
var myObject = {};
var copyOffMyObject = myObject;
myObject.foo = 'bar';

console.log(myObject, copyMyObject);
Object { foo="bar" }

//
var objectFoo = { same: 'same' };
var objectBar = { same: 'same' };

console.log(objectFoo === objectBar);

var objectA = {foo: 'bar'};
var objectB = objectA;

console.log(objectA === objectB);


//
var objA = { property: 'value' };
var pointer1 = objA;
var pointer2 = pointer1;

objA.property = null;

console.log(objA.property, pointer1.property, pointer2.property);

//
var myNull = null;
var myUndefined = undefined;
var primitiveStirng1 = "string";
var primitiveStirng2 = String('string');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[]+\\b');
var myError = new Error('ERR');

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myObject);
console.log(typeof myArray);
console.log(typeof myFunction);
console.log(typeof myDate);
console.log(typeof myDate);
console.log(typeof myRegExp);
console.log(typeof myError);

//
String.augmentedProperties = [];

if(!String.prototype.trimIt){
  String.prototype.trimIt = function(){
    return this.replace(/^\s+|\s+$/g, '');
  }

  String.augmentedProperties.push('trimIt');
}

var myString = ' trim me ';
console.log(myString.trimIt());

console.log(String.augmentedProperties.join());

//
var foo = {};
console.log(foo.constructor === Object)

console.log(foo.constructor)

//
var myNumber = new Number('23');
var myNumberL = 23;
var myString = new String('string');
var myStringL = 'male';
var myBoolean = new Boolean('true');
var myBooleanL = true;
var myObject = new Object();
var myObjectL = {};
var myArray = new Array();
var myArrayL = {};
var myFunction = new Function();
var myFunctionL = [];
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpL = /./;
var myError = new Error();

console.log(
  myNumber.constructor === Number,
  myNumberL.constructor === Number,
  myString.constructor === String,
  myStringL.constructor === String,
  myBoolean.constructor === Boolean,
  myBooleanL.constructor === Boolean,
  myObject.constructor === Object,
  myObjectL.constructor === Object,
  myArray.constructor === Array,
  myArrayL.constructor === Array,
  myFunction.constructor === Function,
  myFunctionL.constructor === Function,
  myDate.constructor === Date,
  myRegExp.constructor === RegExp,
  myRegExpL.constructor === RegExp,
  myError.constructor === Error
);

//
var CustomConstructor = function CustomConstructor(){
  return 'Hi';
};
var instanceOffCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject.constructor === CustomConstructor);

console.log(instanceOfCustomObject.constructor);

//
var CustomConstructor = function(){ this.foo = 'bar'; };

var instanceOffCustomObject = new CustomConstructor();
console.log(instanceOffCustomObject instanceof CustomConstrucotr);

console.log(new Array('foo') instanceof Array);

//
var myArray = new Array();
myArray.prop = 'test';
console.log(myArray.prop);

//
var myString = new String();
var myNumber = new Number();
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array();
var myFunction = new Function('return 2+2');
var myRegExp = new RegExp('\bt[a-z]+\b');

myString.prop = 'test';
myNumber.prop = 'test';
myBoolean.prop = 'test';
myObject.prop = 'test';
myArray.prop = 'test';
myFunction.prop = 'test';
myRegExp.prop = 'test';

console.log(myString.prop,myNumber.prop,myBoolean.prop,myObject.prop,myArray.prop,myFunction.prop,myRegExp.prop);

var myString = 'string';
var myNumber = 1;
var myBoolean = true;

myString.prop = true;
myNumber.prop = true;
myBoolean.prop = true;

console.log(myString.prop, myNumber.prop, myBoolean.prop);


