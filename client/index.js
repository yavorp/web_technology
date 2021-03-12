// something like cout of the c++
var object = { a: 10 };
// console.log(object.a);
// console.log(object['a']);

var func = function sum(a,b) {
    return a + b;
}

function demoWithHigherOrderFunction(fn, arg1, arg2) {
    return fn(arg1, arg2);
}

function composeFunctions(fn) {
    return function (a, b) {
       return  2 * fn(a, b)
    }
}

console.log(composeFunctions(func)(2, 2))
// higher order
// console.log(demoWithHigherOrderFunction(func, 1, 2));


// SERVER CONTENT 
var a = {};
// Show js is interepret;
if (false) {
    A.prototype = function() {
        console.log('sdasdsa');
    }    
}


// Demonstrate adding methods to prototype of a function with and without syntax sugar
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

Person.prototype.introduce = function() {
    return 'Hello my name is ' + this.name;
};

a = new Person('Yavor');
var b = 10;
// Execution Context Example
function factorial(n) {
    // b is part of Global scope
    console.log(b);
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(3);

let swim = {
    setSwimProperties(speed, direction) {
      this.speed = speed;
      this.direction = direction;
    },
   
    getSwimProperties(){
      console.log(`swimming ${this.speed} towards ${this.direction}`);
    }
}
   
class Reptile {
    constructor(name) {
      this.name = name;
    }
}
   
Object.assign(Reptile.prototype, swim);
let alligator = new Reptile("alligator");
alligator.setSwimProperties("5 m/s", "upstream");
alligator.getSwimProperties();

// Object and constructors
function FirstPoint(x, y) {
    this.x = x;
    this.y = y;
}

var firstPoint = new FirstPoint(10, 10);
var point = {
    x: 1,
    y: 2
}

console.log(firstPoint.__proto__ === point.__proto__);

function Point3d(x, y, z) {
    Point.apply()
}
// console.log(point.__proto__);

// // Prototype chain examples

// var objectA = {
//     a: 'some string'
// }

// var b = Object.create(objectA);
// console.log(`Using Object.create ${b} `);
// var c = Object.create(null);
// // should throw error because it does not know how to convert the object to string // good question
// // console.log(`Using null as value of the prototype ${c}`);


// // prototype chain example with constructor functions

// function Point(y) {
//     this.y = y;
// }
// // add properties to every instance of Point objects
// // Point.prototype.x = 10;

// // what happens with this?
// // Point.x = 10;

// Point.prototype.calculateRadiusVectorsLenghth = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
// }

// function Point3d (x,y,z) {
//     Point.call(this, y);
//     this.z = z;
// }

// // Why this is not the right way
// Point3d.prototype = Point.prototype;

// // Right way
// Point3d.prototype = Object.create(Point.prototype);
// const d3 = new Point3d(1,2,3);
// console.log(Point)

// Mixin Example
let sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
  };
  sayHiMixin = { // (or we could use Object.setPrototypeOf to set the prototype here)
  
    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Bye ${this.name}`); // (*)
    }
  };
  Object.setPrototypeOf(sayHiMixin, sayMixin);
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude
// END OF MIXIN EXAMPLE




