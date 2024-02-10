 const input=document.getElementById("myInput");
 const btn= document.getElementById("myBtn");
 const deleteBtn=document.getElementById("deleteBtn")

 // session storage continues working until the tab is not closed

//  const btnClick=()=>{
//     sessionStorage.setItem("key1",input.value);
//  }

//  const deleteFxn=()=>{
//     sessionStorage.removeItem("key1");// removes specifie key
//     //sessionStorage.clear()--> used for clearing full session storage
//  }

//  btn.addEventListener('click',btnClick);
//  deleteBtn.addEventListener('click',deleteFxn);

//  if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"));
//  }

//  console.log(sessionStorage.key(0));
//  console.log(sessionStorage.length);


// SESSION STORAGE IS DIFFERENT FOR DIFFENT TABS BUT LOCAL STORAGE IS SAME

const btnClick=()=>{
    //localStorage.setItem("key1",input.value);
    localStorage.setItem("key1",
    JSON.stringify({name:'vaibhav', age:'21'}));
    // this is how to convert object into strings and put object in local storage
 }

 const deleteFxn=()=>{
    localStorage.removeItem("key1");// removes specifie key
    //sessionStorage.clear()--> used for clearing full session storage
 }

 btn.addEventListener('click',btnClick);
 deleteBtn.addEventListener('click',deleteFxn);

 // this is how we get item at key from storage 
 if(localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")));
 }

 console.log(sessionStorage.key(0));
 console.log(sessionStorage.length);  

 // JSON.stringify() is used to convert object into string
 // JSON.parse() is used to convert string into object

 // session storage can store upto 5mbs of data
 // local storage can store upto 5-10mbs of data

