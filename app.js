
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);

// Clear input, used to clear forms
taskInput.value = '';

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Key Up
// taskInput.addEventListener('keyup', runEvent);

// Key Press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Copy
// taskInput.addEventListener('copy', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);

    // Update text in header to show live typing
    // heading.innerText = e.target.value;

    // Get input value
    console.log(taskInput.value);
    
    // When doing a submit, usually have to use prevent default method.
    // e.preventDefault();
}