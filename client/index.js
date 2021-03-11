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

console.log(firstPoint.__proto__ === point.__proto__)
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