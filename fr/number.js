//
var numberObject = new Number(1);
console.log(numberObject);
console.log(typeof numberObject)

var numberObjectWithOutNew = Number(1);
console.log(numberObjectWithNew);
console.log(typeof numberObjectWithOutNew);

var numberLiteral = 1;
console.log(numberLiteral);
console.log(typeof numberLiteral);

//
var integer = 12341234;
console.log(integer);

var floatingPoint = 2.132;
console.log(floatingPoint);

//
var numberOne = new Number(456);
console.log(numberOne);

console.log(typeof numberOne);

console.log(Number(1),Number(1.1),Number(-10),Number(0xff));

console.log(Number('10'),Number('0010'),Number('1.0e1'));

console.log(Number(''),Number(' '),Number('123abc'));

console.log(Number('0x0a'),Number('010'));

console.log(Number(undefined),Number(null),Number(true),Number(false));

console.log(Number({}),Number(function(){}));

console.log(Number([]),Number([1]),Number(['010']),Number([1,2]));


