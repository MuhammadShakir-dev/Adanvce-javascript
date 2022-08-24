// Arrow function is the new and shortes way to declare functions in javascript the arrwo function was introduced in the ES6 version.
// Before Arrow function we write our functions in this way.

function fullname(fname,lname){
  document.write(fname + lname); 
};

fullname("Muhammad","Shakir");

// We also write functions in the other way

let fullname = function(fname,lname){
document.write(fname + lname)
};

fullname("Shafiqa " + " Iqbal");


// But when arrow function comes

let fullname = (fname,lname) => document.write(fname,lname)
fullname("Shafiqa","Iqbal");

