var a = true;
console.log(a);//true
console.log(!a);//false

var b = false;
console.log(!b);//true

var a = true;
var b = true;

console.log(a && b);//true

a = false;
console.log(a && b);//false

a = b = false;
console.log(a && b);//false

a = b = true;
var c = false;
console.log(a && b && c);//false

var a = true;
var b = true;

console.log(a || b);//true

a = false;
console.log(a || b);//true

a = b = false;
console.log(a || b);//false

b = true;
var c = false;
console.log(a || b || c);//true

var a = true;
var b = false;
var c = false;
var d = true;

console.log(a || b && !c && !d)