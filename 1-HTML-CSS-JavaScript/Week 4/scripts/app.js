
//using environment variables
//let a = Number(process.env.A);
//const b = Number(process.env.B);



//console.log(process.env.A);

//node app a b ----- node app 27 13
//let a = Number(process.argv[2]);
//let b = Number(process.argv[3]);

const command = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

if(command === 'add'){
    console.log(a + b);
} else if (command === 'subtract'){
    console.log(a - b);
} else if (command === 'multiply'){
    console.log(a * b);
} else if (command === 'divide'){
    console.log(a / b);
}


//console.log(a + b);


let mat = require('.')