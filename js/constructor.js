// constructor

function Person(name) {
  this.name = name;
  this.greeting = function () {
    console.log(`My name is ${this.name}`);
  };
}

let person = new Person("anbu");
person.greeting();
