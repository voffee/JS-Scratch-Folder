// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function Scope: ', a, b, c);
// }

// test();

// Block Level Scope
// if(true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Block Scope: ', a, b, c);
// }

for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c)