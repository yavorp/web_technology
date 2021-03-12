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