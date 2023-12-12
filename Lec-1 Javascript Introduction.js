alert("speaking from js file");

console.log("printed via console log");

//VARIABLE NMAE MUST START WITH LETTER OR _ OR $
//VARIABLES ARE CASE SENSITIVE

//let variable

let x=120;

console.log(x);

x=20;
console.log(x);

x=30;//assignment is allowed---different values
x=40;// redeclartion not allowed
console.log(x);

console.log(x);


//const variable -- value cannot be changed

const PI=3.14;

console.log(PI);
//can only be assigned once
console.log(PI);

console.log(PI);

console.log(PI);


// var variable

var z=99;
console.log(z);


// string and typeof

let s="kqnchi_7221"
console.log(s);
console.log(typeof(s));

//boolean

let p= true;
console.log(p);
console.log(typeof(p));

//null and undefined

let q=null;
console.log(q);
console.log(typeof(q));

let r;
console.log(r);
console.log(typeof(r));

//basics and concatination

let c=14;
let d=16;

console.log(14+16);
console.log(14+d);
console.log(c+d);

let e=true;
console.log(c+d+e);

let f='kanchi';//single & double quotes mean same
console.log(c+d+f);//concatination


//printing notations

//traditional

let name="kanchi";
let surname='sharma';

console.log("My name is "+ name + " "+surname);

//backtick-dollar notation

console.log(`My name is ${72} ${surname}`);

let statement=`${name} live in baijnath`;
console.log(statement);


// to pring single quote and double quote

let st='"let life happen"';
console.log(st);

let s1="it's my life";
console.log(s1);

let s2=`he said,"who are you"`;
console.log(s2);
