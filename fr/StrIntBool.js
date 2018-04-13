//
var stringObject = new String('foo');
console.log(stringObject.length);
console.log(stringObject['length']);

var stringLiteral = 'foo';

console.log(stringLiteral.length);
console.log(stringLiteral['length']);
console.log('bar'.length);
console.log('bar'['length']);

var numberObject = new Number(1.10023);
console.log(numberObject.toFixed());
console.log(numberObject['toFixed']());

var numberLiteral = 1.10023;
console.log(numberLiteral.toFixed());
console.log(numberLiteral['toFixed']());
console.log((1234).toString());
console.log(1234['toString']());

var booleanObject = new Boolean(0);
console.log(booleanObject.toString());
console.log(booleanObject['toString']());

var booleanLiteral = false;
console.log(booleanLiteral.toString());
console.log(booleanLiteral['toString']());
console.log((true).toString());
console.log(true['toString']());

//
console.log(typeof new String('foo'));
console.log(typeof new Number(1));
console.log(typeof new Boolean(true));

console.log(typeof 'foo');
console.log(typeof 1);
console.log(typeof true);




