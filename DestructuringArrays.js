// Before ES6 we assign the value of an array to a variable like this.

let user = ["Muhammad Shakir",25];
let name = user[0];
let age = user[1];

// but when ES6 comes we do this while stuff like this.

let[name,age] = user;
name = "Muhammad Shakir";
age = 21;

// let's take another exapmle.
let user = ["Muhammad Shakir",21,"BS-SE","SMI University",["Male","2.5 lac"]];
let [name,age,depart,uni,[gender,salary]] = user;
console.log(name);
console.log(age);
console.log(depart);
console.log(uni);
console.log(gender);
console.log(salary);
