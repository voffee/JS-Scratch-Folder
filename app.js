
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
// card.addEventListener('mouseenter', runEvent);

// Mouseleave
// card.addEventListener('mouseleave', runEvent);

// Mouseover
// card.addEventListener('mouseover', runEvent);

// Mouseout
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// Really need to understand and memorize how the above code works, it's super useful when making own apps.