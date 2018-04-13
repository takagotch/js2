//
var myBoolean1 = new Boolean(false);
console.log(typeof myBoolean1);

var myBoolean2 = Boolean(0);
console.log(typeof myBooelan2);

var myBoolean3 = false;
console.log(typeof myBoolean3);
console.log(myBoolean1, myBoolean2, myBoolean3);

//
var foo = new Boolean(0);
console.log(foo);

var bar = new Boolean(Math);
console.log(bar);

//
var falseValue = new Boolean(false);
console.log(falseValue);

if(falseValue){
  console.log('falseValue is truthy');
}

//
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(''));
consoel.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(1789));
console.log(Boolean('false'));

console.log(Boolean(Math));
console.log(Boolean(Array()));



