// Lets learn how to create objects in javascript ES6 version.

// the old method of creating objects before ES6.
let name = "Muhammad Shakir";
let studentName ={
name : name,
}
document.write(studentName.name);

// shorter way .
// this way is only works if your property name and your variable name both are same.
let name = "Muhammad Shakir";
let studentName ={
name,
}
document.write(studentName.name);


//lets take an other example.
let stdName = "Muhammad Shakir";
let stdDesg = "Co Lead";
let stdComm = "Google developer Student Clubs";
let stdDetials = {
    stdName,
    stdDesg,
    stdComm,
}
//output.
{stdName: 'Muhammad Shakir', stdDesg: 'Co Lead', stdComm: 'Google developer Student Clubs'}
