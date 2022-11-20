// document.detElementsByClassName
// this way of pulling is global
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// // Below method is only pulling from ul and not globally pulling 'collection-items'
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// Convert HTML Collection into array
// lis = Array.from(lis);

// Break down this piece of code and understand what it does 100%
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })

// lis.reverse();

// console.log(lis);

// document.querySelectorAll
// outputs Node List, doesn't have to be converted to array
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#cccccc';
});

console.log(liEven);


// For loop will work with HTML collection and node list, since length still works on non arrays
for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}


console.log(items);