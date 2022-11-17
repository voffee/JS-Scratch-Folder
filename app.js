// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById(('task-title')).id);
console.log(document.getElementById(('task-title')).className);


// Store the method call in a variable and use that to change things
const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333333';
taskTitle.style.color = '#ffffff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';

// Insert HTML
taskTitle.innerHTML = '<span style = "color: red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// Only works with 1st selector seen, even with nth child odd or even!
document.querySelector('li:nth-child(odd)').style.background = '#cccccc';