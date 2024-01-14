const arr=[2,4,6,8,10];

//find function

arr.find(myfunc);

function myfunc(value,index){
if(6===value)
console.log("value exists");
}

//another way of writing find function

const result=arr.find((value,index)=>{
    if(value>4)
    return value;
})

console.log(result);

//using find function we can only return single value


//filter function-->used to return array of values that satisfy condition
const ans=arr.filter((value,index)=>{
    if(value>4)
    return value;
})

console.log(ans);


//every function --> returns true if every value of the array follows the 
                //   condition else false
const res=arr.every((value,index)=>{
    return value > 4;
})
console.log(res);

//some function --> returns true if some value in array satisfies the condition
// else it returns false if none of the value satisfies the condition

const print=arr.some((value,index)=>{
    return value < 4 ;
})
console.log(print);


//for-of loop
for(let value of arr){
    value+=3;          //original values doesn't change on changing values here
    console.log(value);
}

console.log(arr);


//for-each loop
arr.forEach((value,index)=>{
value+=20;   // original values aren't changed
console.log(value);
})
console.log(arr);


const pos=arr.forEach((value,index)=>{ //forEach fxn doesn't return any value
    return value;
})
console.log(pos);


//map function

const mprint=arr.map((value,index)=>{
    return value+20;
})

console.log(mprint);
console.log(arr); //original array values arent altered using map also.


//reduce method
const resu=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(resu);
