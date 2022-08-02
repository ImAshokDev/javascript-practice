// CONDITION STATEMENT

// if condition
let hrs = new Date();
let hour = hrs.getHours();

console.log("date....", hour);
if (hour >= 0 && hour <= 13) console.log("Good Morning");
else if (hour >= 13 && hour <= 17) console.log("Good Afternoon");
else console.log("Good Evening");

// Switch case
