//Rest operator are super usefull when you have multiple arrguments in you functions.

const std = (name,course,...marks) => {
let std = 0;
for(let i in marks){
std += marks[i];
}
document.write(`${name} of ${course} taken total marks : ${std}`);
}

std("Muhammad Shakir","Software Eng",90,88,76,90,90,90);
std("Anum Mustafa","Software Eng",90,88,76,90,80,80);


// anotehr example.

let gdsc = (lead,colead,...rest) => {
    document.write(`${lead} : GDSC Lead`);
    document.write(`${colead} : GDSC colead`);
    document.write(`GDSC Team : ${rest} `);
}

gdsc("Wajid","Shakir","Auum","Shiza","Ayesha")
