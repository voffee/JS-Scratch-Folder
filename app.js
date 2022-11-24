
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     // e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){
    // console.log('Clicked');

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Not sure how below code works, the e?
    // e.target.innerText = 'Hello';

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    //  Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    //  Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}