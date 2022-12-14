// spread operator are samae as rest operatores .
// spread opreator sperate array into differents arrguments and then perfom operations on it.
// speard operator spread an array into multiple arrguments.
// spread operator will always declear at tha calling of a function.
// the main difference between the reet and spread operator is that .
// rest operator assign or dclear as a parameter in a function.
// spread operator will assign at the calling of a function.
// you can also add or remove any value to an array  as well as in an objects using spread operator.
// you can concate arrays and objects using spread operators.

// lets strart practice   
// example no 1 in which we use both rest and spread function.
const sum = (name, ...arrg) => {
    let sum = 0;
    for(let i in arrg){
        sum += arrg[i];
    }
    document.write(`${name} total marks: ${sum}`)
}

let arr = [90,95,93,95,95];
let arr1 = [89,99,87,95,90]
sum("Muhammad Shakir",...arr);
sum("Anum Mustafa",...arr1);

//example no 2 the spread operator covert the array into multiple singel values
let arr = [10,20,30,40];
document.write(...arr)

//exapmle no 3 
// example no 1 
let arr = [10,20,30,40];
let arr2 = arr
arr2.push(50);
document.write(arr);
document.write(...arr2);

//example no 4
// old method of doing concatination
let arr1 = [10,20,30,40];
let arr2 = [50,60,70];
let arr3 = arr1.concat(arr2);

//exapmle no 5
//using spread operators.
// keep in mind one thing the order of concatenation depends upon which array your write frist.
let arr1 = [10,20,30,40,50];
let arr2 = [60,70,80];
let arr3 = [...arr1,...arr2]


//example no 6
// now using push method using spread operator.
// push adds an element or a value to the end of an array.
// pop adds and element or a value to the begening of an array.
let arr1 = [10,20,30,40,50,60];
let arr2 = [70,80,90,100];
let arr3 = [5,...arr1,...arr2,105];
//output
(12) [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 105]

//example no 7
// now using spread operator to concate objects .
 var obj1 = {
    name : "Muhammad Shakir",
    rank : "Co-lead",
};
    var obj2 = {
        age: 21,
        community : "Google Developer Student Clubs",
    };
         var obj3 = {...obj1,...obj2};

//output
{name: 'Muhammad Shakir', rank: 'Co-lead', age: 21, community: 'Google Developer Student Clubs'}



