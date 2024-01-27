const heading=document.getElementById("heading");
const btn=document.getElementById('myBtn');
const box1=document.getElementById("box1");
const input=document.querySelector("input");

//EVENT-LISTENERS
btn.addEventListener('click',()=>{
    box1.classList.add("box1class");// THIS IS HOW WE CAN ADD CLASS TO AN ELEMENT
});


function func1(){
    btn.style.transform="scale(1.2)";
    heading.style.backgroundColor="pink";
}

//mouseover-event listener
box1.addEventListener('mouseover',func1);

//TO REMOVE EVENT LISTENER
//box1.removeEventListener('mouseover',func1);

//mouseout-event listener
box1.addEventListener('mouseout',()=>{
    btn.style.transform="";
    heading.style.backgroundColor="";
}) 

// PREVENT ELEMENT'S DEFAULT BEHAVIOUR
btn.addEventListener('contextmenu',(event)=>{
    btn.style.backgroundColor='purple';
    box1.removeEventListener('mouseover',func1);
    event.preventDefault();
})

// to prevent an event from happening in whole site-page
//therefore directly applyling event listner will do the job
addEventListener('contextmenu',(e)=>{
    //e.preventDefault();
})

//OR

window.addEventListener('contextmenu',(e)=>{
    btn.style.filter='blur(5px)';
})


// so,here eveything happens inside the window
//therefore, if we write....
//window.document.getElementById() or
//document.getElementById() 
//Both means the same



//TO KNOW CLICK-COORDINATES OF MOUSE
addEventListener("click",(e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
})


// click-event listener
box1.addEventListener('click',()=>{
    document.body.style.backgroundColor='black';
})

box1.addEventListener('click',()=>{
    document.body.style.backgroundColor='black';
})

//double-click event listener
box1.addEventListener('dblclick',()=>{
    document.body.style.backgroundColor='beige';
})

//change-event listener
input.addEventListener('change',(e)=>{
    console.log(e.taget.value);
})
