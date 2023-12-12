 //type conversion

 let a=10;

 console.log(a);
 console.log(typeof(a));

 console.log(typeof String(a));// 'S' of string must be capital

 console.log(typeof(a));

 let b="454";

 console.log(b);
 console.log(typeof(b));
 console.log(typeof Number(b));// 'N' of number must be capital


 // for external permanaent changes

 let c=21;
 c=String(c);// need to assign converted value into c for permanent changes.
 console.log(c);
 console.log(typeof(c));

//type conversion via methods

let d= 434;
d=d.toString(); // toString method
console.log(d);
console.log(typeof(d));


//STRING BASICS & methods

let s="i am kanchi";//indexing starts from 0
console.log(s[2]);// to access character from string


//indexOf and lastIndexOf function
console.log(s.indexOf("m"));

console.log(s.indexOf("i")); // gives index from start
console.log(s.lastIndexOf("i"));// gives index from the end

console.log(s.indexOf("kanchi"));//gives starting index


// charAt function--gives character at particular index
console.log(s.charAt(3));


// endsWith fxn-- returns true if string ends with the particular string
//             -- else returns false
let s1="my name is kanchi";
console.log(s1.endsWith("my"));
console.log(s1.endsWith("kanchi"));
console.log(s1.endsWith("is kanchi"));


//includes fxn-- returns true if given string includes given string, else return false

console.log(s1.includes(" name "));
console.log(s1.includes("sharma"));
console.log(s1.includes("name is"));

//substring function and slicing

let s2="my name is kanchi";

// in substring fxn we give(starting index,ending index)
console.log(s2.substring(11,16));//first index->included , last index->excluded

console.log(s2.slice(11,16));

//split method

console.log(s2.split(" ")); 

//replace method
console.log(s2.replace("kanchi","vaibhav"));

//length method -> no circular brackets required
console.log(s2.length);

//upper and lower case methods
console.log(s2.toUpperCase());
console.log(s2.toLowerCase());

//substr fxn-> in sustr fxn we give (starting index, length)
console.log(s2.substr(11,6));

// String DOM Manipulation

let s3="i am from himachal pradesh";
let heading=document.getElementById("myheading");

heading.innerText=s3;
heading.style.backgroundColor="red";
heading.style.color="white";
