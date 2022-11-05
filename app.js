const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Boston',
        state: 'Massachusetts'
    },
    getBirthYear: function() {
        return 2022 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();
console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 29},
    {name: 'Nancy', age: 55}

];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}