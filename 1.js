let add = (a,b) => a+b;
let divide= (a ,b) => a/b;
let subtract =(a,b) =>a-b;
let multiple =(a,b) => a*b;
let calculate= (x,y, operation) => operation (x,y);
console.log(calculate(2,2, add));
console.log(calculate(2, 2, divide));
console.log(calculate(5, 3, subtract));
console.log(calculate (2 ,3, multiple));

