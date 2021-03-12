const a  = { 
    a: 10
 };
function test() {
    console.log(this.a)
}

const testWithContextOfA = test.bind(a);
testWithContextOfA();