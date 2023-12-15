// arrays

let arr=[12,33,44,10];

console.log(arr);
console.log(arr[3]);

let arr1=['vaibhav','sharma'];
console.log(arr1);

//array can be assigned with different types of values
let arr2=[1,'vaibhav',2,[33,44]];
console.log(arr2);
console.log(arr2[3][1]);

arr2[0]=11;
arr2[1]='kanchi';
console.log(arr2);

let array=[];
array[1]=1;
array[2]=2;
array[3]=3;
console.log(array);

let arr3=new Array(1,2,3,5);
console.log(arr3);


// push and pop fxn in js in arrays

//push->used to add elements in array from behind
//pop->used to pop elements from array from behind

let narr=[11,12,13];
console.log(narr);

narr.push(14);
narr.push(14);
narr.push(14);
narr.push(14);
narr.push(14);
console.log(narr);

narr.pop();
narr.pop();
narr.pop();
narr.pop();
console.log(narr);

//unshift and shift fxn in js arrays

//shift is used to delete elemnent from the starting
//unshift is used to add element to the starting

narr.shift();
narr.shift();
console.log(narr);

narr.unshift(12);
narr.unshift(11);
console.log(narr);

let newarr=[1,2,3,4,5,6,7,8,9,10];
//length doesn't require circular brackets
console.log(newarr.length);

//splice fxn --> used to delete multiple elements from array
//arr.splice(starting index,number of elements to be deleted) 

newarr.splice(3,2);
console.log(newarr);


//reverse fxn ->used to reverse an array
newarr.reverse();
console.log(newarr); 

// slice fxn --> returns subarray from the given array
// array.slice(starting index(included),ending index(excluded))

let subarr=newarr.slice(1,3);
console.log(subarr);

//includes fxn-->returns bool value
// true if element exists in array
// false if element doesn't exist in array

console.log(newarr.includes(5));
console.log(newarr.includes(7));

let arr11=[];

for(let i=0;i<100;i++)
{
    arr11[i]='kanchi';
    //arr11.push(1);
}
console.log(arr11);



//const can be used in array in a way
//such that new values can be added to it.
//but it is not possible to assign new array to it 

const arr22=[];

arr22.push(10);
arr22.push(0);
arr22.push(90);

console.log(arr22);

// objects in javascript

const obj1={
    name:'vaibhav',
    surname:'sharma',
    rollno:21,
    male:true
};

const obj2={
    1:'hello',
    2:'how',
    3:'are',
    4:'you'
}

console.log(obj1);
console.log(obj2);

// altering name-vale pairs
obj1.name='kanchi';
console.log(obj1);

//adding name-value pairs into objects
obj1.phno=7807760560;
obj1.address='Baijnath';
console.log(obj1);
