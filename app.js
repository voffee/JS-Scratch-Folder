// Function Declarations

function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    // console.log('Hello');
    return 'Hello '+ firstName + ' ' + lastName;
}

// console.log(greet('Steve', 'Jobs'));

// Function Expressions

const square = function(x = 3){
    return x * x;
};

// console.log(square());

// Immediately Invokable FUnctions Expressions - IIFEs
// (function(){
//     console.log('IFFE RAN..');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Bob');

// Property Methods

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log(`Delete todo...`);
}

todo.add();
todo.edit(22);
todo.delete();

// I DON'T UNDERSTAND PROPERTY METHODS!!