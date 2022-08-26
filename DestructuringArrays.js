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

//lets use rest operaror in destructuring arrays

let user = ["Muhammad Shakir","Paysense","Applied"];
let [name, ...arrgs] = user;
console.log(name);
console.log(arrgs);
//output;
Muhammad Shakir
(2) ['Paysense', 'Applied']

// using destructring arrays inside of a function.

const user1 = ([name,age,course]) => {
    console.log(name);
    console.log(age);
    console.log(course);
   
   };
user1(["Muhammad Shakir",21,"BS-SE"]);
//output.
Muhammad Shakir
21
BS-SE
//let's take another exapmle.

const user1 = () => {
return ["Muhammad Shakir",21,"BS-SE"]
   };
let[name,age,course] = user1();

// ouput.
user1()
(3) ['Muhammad Shakir', 21, 'BS-SE']
