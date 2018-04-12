//
var stringObject = new String('foo');
console.log(stringObject);
console.log(typeof stringObject);

var stringObjectWithOutNewKeyword = String('foo');
console.log(stringObjectWithOutNewKeyword);
console.log(typeof stringObjectWithOutNewKeyword);

var stringLiteral = 'foo';
console.log(stringLiteral);
console.log(typeof stringLiteral);

//
var stringObject = new String('foo');
console.log(stringObject);

console.log(typeof stringObject);

//
console.log(String());

console.log(String(undefined), String(null), String(true), String(false));
'undefined' 'null' 'true' 'false'

console.log(String(NaN), String(Infinity), String(-Infinity));
'Infinity' '-Infinity'

console.log(String(1.00), String(10.100));
console.log(String(1.00e10), String(-10.100));

console.log(String(10000000000000000), String(0.0000000999));

console.log(String(010). String(0xFF));

var obj = { prop: 'property' }
var arr = [1, 2, 3];
console.log(String(obj), String(arr));


