const printName=(name,year)=>{
    console.log(`My name is ${name}. I am in ${year}th year`);
}

setTimeout(printName("kanchi"),5000);

//If I give arguments along with fxn name in setTimeout then fxn would be executed 
//immediately independent of setted time.


//RESOLVE:
const customTime=setTimeout(printName,5000,"kanchi",4);


//ANOTHER WAY OF WRITTING setTimeout() fxn -- i.e. fxn can be directly placed inside setTimeout.
setTimeout((pos)=>{
    console.log(`this will execute ${pos}`)
},3000,"first");


const btn=document.querySelector("button");


//clearTimeout fxn -- used to cancel timeout before it executes
addEventListener('click',()=>{
    clearTimeout(customTime);
})

//setInterval-- used to execute fxn continusouly after givern interval

const fun1=()=>{
    console.log("working ok");
}

let interval=setInterval(fun1,1000);


//clearInterval -- used to stop the interval 
btn.addEventListener('click',()=>{
    clearInterval(interval);
})

//display time after every second
const printDate=()=>{
    console.log(new Date());
}

setInterval(printDate,1000);
