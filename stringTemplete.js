//  String temeplete literals.


let fname = "Muhammad";
let lname = "Shakir";
const fullname = (fname,lname) => {
    return `${fname} ${lname}`
};

document.write(fullname(fname,lname));
