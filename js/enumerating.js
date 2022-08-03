const user = {
  name: "Anbu",
  getFullName() {
    console.log(`My name is ${this.name}`);
  },
};

for (let key in user) {
  console.log(key, user[key]);
}

for (let key of Object.keys(user)) {
  console.log(key);
}

for (let key of Object.entries(user)) {
  console.log(key);
}

// using if

if ("name" in user) {
  console.log("Yes!");
} else console.log("No!");

if ("age" in user) {
  console.log("Yes!");
} else console.log("No!");

// object cloning
// 1)
let another1 = user;
console.log("Object Cloning....1", another1);

// 2)
let another2 = Object.assign(user);
console.log("Object Cloning....2", another2);

// 3)
let another3 = { ...user };
console.log("Object Cloning....3", another3);
