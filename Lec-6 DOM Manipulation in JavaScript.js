console.log(document.body);// here document refers to the HTML-documnent.

console.log(document.documentElement);

//used to access first child element of the body
console.log(document.body.firstElementChild);

//used to access all children of the body
const list=(document.body.children);

// used to convert anything into arrays
const newArr= Array.from(list);

console.log(list);
console.log(newArr);

for(let i=0;i<newArr.length;i++){
    console.log(newArr[i]);
}

const point=2100;

console.log(point);

//this is how we select elements using their id
console.log(document.getElementById("point"));

//this is how we select elements by className
const points=document.getElementsByClassName("pointer");
console.log(points[0]);// this is how we select 1st elements among mutiple elements in a class


//this is how we select tags using tagname
const x=document.getElementsByTagName("span");
console.log(x[0]);
//generally when we are selecting elements indexing also becomes important
// to denote which span/element we are refering to in  document.

//this is how we modify html of an element 
x[0].innerHTML="what is coding";

console.log(x[0]);

x[0].innerHTML=`<span class="inner-class"> learning to learn </div>`

//this is how we can implement css via js
x[0].style.backgroundColor="red";
x[0].style.color="white";
x[0].style.font="100 1.5rem 'Italic'";

//makes changes in button element via javascript
const mybtn= document.getElementById("mybtn");

mybtn.style.backgroundColor="black";
mybtn.style.color='white';
mybtn.style.border='none';
mybtn.style.padding='2vmax 4vmax';
mybtn.style.cursor='pointer';

//using query selector to make changes
const here=document.querySelector(".here");

here.innerText="nonce";

//getAttribute-- is used to get attributes of an element
const att=mybtn.getAttribute("id");
console.log(att);

let natt=mybtn.getAttribute("class");
console.log(natt);

//setAttribute-- is used to set attributes of an element

mybtn.setAttribute("class","thisIsButton");

natt=mybtn.getAttribute("class");
console.log(natt);

//to create element
const mybtns=document.querySelectorAll("button");

//onclick event-listeners for triggering fxns
mybtn.onclick=bringMeHeading;
mybtns[1].onclick=deleteElement;

//function to append/prepend element into our html document
function bringMeHeading(){
const h2=document.createElement("h2");
h2.innerText="good to go";
console.log(h2);

document.body.append(h2);// append is used to add element in the last of body
document.body.prepend(h2);//prepend is used to add element to the starting of document
}

mybtns[1].innerText="erase";

// designed fxn for removing element.
function deleteElement(){
    const h2 =document.querySelector("h2");
    h2.remove();
    console.log('click');
}

// functions can be written up or down
//whereas variables need to follow up sequence




