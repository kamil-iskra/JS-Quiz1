"aaaaaa".length;
22.2.toString();
//niby mają, ale...
// console.log(toString(new Object))
console.log({}.toString());
console.log(22.2.toString());
// console.log(toString(new Array))

console.log(toString.call(()=>{}));
console.log(toString.call([]));

let num1 = 10;
let num2 = num1;
num1 = 30;
console.log(num2);

let a = 5;
a++
console.log(a);




