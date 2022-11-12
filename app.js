// General Loops
// For, While, Do-While

// for(let i = 0; i <= 10; i++){
//     // console.log(`Hello World ${i}`);
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i === 5){
//         console.log('Stop the loop')
//         break;
//     }
//     console.log('Number ' + i);
// }

// let i = 0;

// while(i < 10){
//     console.log('Number '+ i);
//     i++;
// }

// let i = 0;

// do {
//     console.log('Number is ' + i);
//     i++;
// }

// while(i < 10);
// Loop through array
const cars = new Array('Ford', 'Chevy', 'Honda', 'Toyota');
// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// Use forEach if wanna loop through array, best practice
// this can take in value, index and the entire array!
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// Map
// I DON'T UNDERSTAND MAP!!!
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Bob'},
//     {id: 3, name: 'Betty'},
//     {id: 4, name: 'Sarah'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);


// FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user){
//     console.log(`${x} : ${user[x]}`);
// }