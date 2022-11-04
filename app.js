// alert(123);

const name = 'John';
const age = 29;
const job = 'Co-Founder';
const city = 'Auckland';

let html;

// Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

// html = '<ul>' + 
//         '<li>Name: '+ name + '</li>' +
//         '<li>Name: '+ age + '</li>' +
//         '<li>Name: '+ job + '</li>' +
//         '<li>Name: '+ city + '</li>' +
//         '</ul>';

//  With template strings

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;