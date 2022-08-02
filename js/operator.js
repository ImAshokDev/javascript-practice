// Relational Operator

let x = 5;

console.log(x < 5);
console.log(x <= 5);

console.log(x > 5);
console.log(x >= 5);

// Equality Operator

// Strict Equality
console.log(x === 5);
console.log(x !== 5);

// Lose Equality
console.log(1 == 1);

// string comparison
console.log("Alen" > "Anbu"); // dictionary

// comparison of different type

console.log("1" < 5); // 1<5
console.log(true == 1);

// 1 - True
// 0 - False

// Ternary operator

let age = 24;

// condition ? "value1" : "value2";
let type = age > 18 ? "Adult" : "Child";

console.log(type);

// logical operator

// AND - &&
// OR - ||
// NOT - !

console.log(false && false); // false
console.log(false || true); // true

// example
let highIncome = false;
let CIBILScore = true;

let eligiblePerson = highIncome || CIBILScore;

console.log("Status: ", eligiblePerson);

// Falsy (false)
// undefined
// null
// 0
// false
// ""
// NaN

// Truthy -> Anything that is not falsy is -> Truthy

// BitWise Operators

// Human code -> Machine code (0,1)

// 1 - 00000001 -> 1
// 2 - 00000010 -> 2
// 3 - 00000011 -> 3

console.log(1 | 2); // | BitWise OR -> Result 3

console.log(1 & 2); // & BitWise OR -> Result 0
