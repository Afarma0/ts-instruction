let r = require('readline-sync');


//get a number
let nbr1: number = r.questionInt("Number? ");
let str1: string = r.question("String? ");
console.log(`nbr is ${nbr1}, str1 is ${str1}`);