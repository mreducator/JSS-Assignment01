let  userName = prompt('Please enter your name');
let  userEmail = prompt('Please Enter your email');
let userAge = prompt('Please enter your age');


let studentName = String(userName);
let studentAge = Number(userAge);
let studendEmail = String(userEmail);
if(typeof(studentName) === 'string'){
    console.log(`${studentName} should be a string`)
}
if(typeof(studentAge) === 'number'){
    console.log(`${studentAge} should be a number`)
}
if(typeof(studendEmail) === 'string'){
    console.log(`${studendEmail} should be a string`)
}