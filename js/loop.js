//LOOP TYPES

// For Loop
// While Loop
// Do While Loop
// For-in Loop
// For-of Loop

// For-in

const person = {
  name: "hash",
  age: 24,
  sex: "Male",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

let colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log(key, ":", colors[index]);
}

// For-of

for (let color of colors) {
  console.log("Colors: ", color);
}
