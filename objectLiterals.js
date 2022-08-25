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

// Use variable as a property name.
let n = "student";
let stdDetails = {
    [n + "Name"] : "Muhammad Shakir",
    [n + "Dept"] : "BS-SE",
    [n + "Semester"] : 5,
    [n + "Location"] : "Karachi, Pakistan"
};
//output.
{studentName: 'Muhammad Shakir', studentDept: 'BS-SE', studentSemester: 5, studentLocation: 'Karachi, Pakistan'}

//let's take anotehr example by creating a function inside of an object.
let n = "student";
let stdDetails = {
    [n + "Name"] : "Muhammad Shakir",
    [n + "Dept"] : "BS-SE",
    [n + "Semester"] : 5,
    [n + "Location"] : "Karachi, Pakistan",
    message : function(){
        return `${this.studentName} is a Student of ${this.studentDept} and currently studying in ${this.studentSemester} semester and he lives in ${this.studentLocation}`
    }
};
document.write(stdDetails);
document.write(stdDetails.message());

// lets take an other exapmle of a newer syntax of creating functions inside of object in ES6.
// first let's take an example of an older versin.

let stdName = {
name : "Muhammad Shakir",
show : function(){
console.log(this.name);
}
}

console.log(stdName.show());


// now let do it with a newer version.
let stdName = {
    name : "Muhammad Shakir",
    show(){
        return this.name;
    }
};
console.log(stdName.show());



































