let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
// Multiple ways to set date, please read documentation for date
birthday = new Date('December 13 1921');

// getMonth method is 0 based, so 10 = November since - is January and this file was created in November 2022

val = today.getMonth();
val = today.getDate();
// getDay method gives numerical number of the day, starting from 0 = Sunday
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// getTime is timestamp
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1991);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(10);

console.log(birthday);