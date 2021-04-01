// module.exports = class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
// }
console.log('evaluated from module');
module.exports = {
  a: 10
}


const countryStatesMap = new Map([
  ['USA', ['California', 'Texas', 'Nevada', 'Connecticut', 'Others']],
  ['Canada', ['Ontario', 'Quebec', 'Others']]]);
console.log(countryStatesMap.get('USA'));