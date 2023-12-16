//functions in javascript

let a=20;
let b=20;
let c=20;


//declared using keyword function
function printTheValue(a=0,b=0,c=0){ // default value 0 is assigned
    console.log(a);
    
    let result=(a*10 + b*10 +c*10)/10;
   return(String(result));
}

console.log(`My inclome is ${printTheValue(10,10,10)}`);//passing values into function


//another type of function declaration

const func=function(g=0){
    console.log(`value of g is :${g}`);

}

func(10);


// fxn to return total of an array

function total(a=[])
{
    let sum=0;

    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }    
    return sum;
}

let arr=[10,20,30,40,50];
console.log(total(arr));


//scoping of variables in javascript

let x=10;
{
    let x=20;
    console.log(x);
}
console.log(x);



// Variables declared by let are only available inside the block where they're defined.
//Variables declared by var are available throughout the function in which they're declared.

//We can declare a variable again 
//even if it has been defined previously in the same scope using var keyword.

//but let is used nowadays because var creates confusion.

{
    var y=20;
    console.log(y);
}
console.log(y);
