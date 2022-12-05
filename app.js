
// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '32');

// set session storage
// sessionStorage.setItem('name', 'Bob');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    alert('Task Saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})