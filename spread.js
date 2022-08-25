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

