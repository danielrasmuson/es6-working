// greeter.js
class Greeter {
  sayHi(name = 'Daniel') {
    console.log(`Hello ${name}!`);
  }
}

var greeter = new Greeter();
greeter.sayHi();