const PI = 3.14;
const object = {
    a: {
        b: 10
    }
}

const a = [];
a.push(1, 2, 3);
console.log(a.reduce((prev, currentArrayValue) => {
    console.log(prev);
    return prev + currentArrayValue;
}, 0));

a.forEach((element, index, arr) => {
    console.log(element);
    console.log(index);
    console.log(arr);
    console.log('\n');
});
console.log(a[3]);
// object.a = 12;

// console.log(PI);