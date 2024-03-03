// This is how we create object 
// Semicolon(;) must be placed when object is closed
// object consist of name value pairs
const obj={
    name:"kanchi",
    sname:"sharma"
};

console.log(obj);

//object -- reference data type
//number,string,boolean,null,undefined -- primitive data types


//variables are passed by value
let a =10;
let b=a;

console.log(a);
console.log(b);

b= 20;

console.log(a);
console.log(b);

//whereas objects are passed by reference
//---therfore any chance in the refrenced variable is reflected in the initial variable
const obj2=obj;
console.log(obj);
console.log(obj2);

obj2.name="vaibhav";
console.log(obj);
console.log(obj2);


const RomanReings={
    weight:256,
    height:185,
    quote:()=>{
        console.log("Head of the table");
    }
};

const setRollins={
    weight:225,
    height:185,
    quote:()=>{
        console.log("Burn it down");
    }
}


//object creation via factory function
const createCharacter=(a,b,quote)=>{
    return{
    weight:a,
    height:b,
    
    quote:()=>{
        console.log(quote);
    }
};
}

const temp=createCharacter(50,172,"I will do it for sure");
console.log(temp);

let roman=createCharacter(200,175,"break the table");
let rollins=createCharacter(250,160,"burn it down");

console.log(roman);
console.log(rollins);

// constructor function

const sample={
    name:"kanchi",
    roll:7365,
    class:12,
    section:"a"
};

console.log(sample);


function student(name,roll,room,section){
    return{
        name:name,
        roll:roll,
        room:room,
        section:section,

        fun:()=>{
            console.log("i am a student");
        }
    }
}

const ujj=student("ujjwal",7347,39,"b");
const adi=student("aditya",7392,20,"b");

console.log(ujj);
console.log(adi);

console.log(ujj.constructor);

//constuctor function
// the name of constructor function starts with a capital letter


function Star(w,h){
    this.weight=w;
    this.height=h;
} 

const Reings = new Star(250,180);
console.log(Reings);

console.log(Reings.constructor);

//Object can be created this way -- behind the scenes

const zs = new Object({name:'vaibhav',roll_id:21,sname:"sharma"});
console.log(zs);


//SPREAD--OPERATOR -- allows us to spread elements of an iterable
// denoted by three dots "..."

// used for -> Concatinating arrays
//          -> Spreading Strings
//          -> Merging and Cloning Objects

const arr=[10,20,30];
console.log(...arr);

let arr2 = new Array(...arr,70,80,90);
console.log(arr2);


const starDust =new Star(500,500);
console.log(...starDust);
