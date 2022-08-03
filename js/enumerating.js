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
