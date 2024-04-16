//javaScript is single thread synchronous language
// synchronous means "only one line will execute at a time"
// next line will execute whwn first line has been executed


// in Asynchronous parallel excution can take place, order doen't matter

//we can make js asychronous using:
//callback
//Promise
//Async Await


//example

function example2(name="kanchi"){

//set timeout is asynchronous    
    setTimeout(()=>{
        for(let i=0;i<50;i++)
        console.log(`${name}: ${i}`)
    },4000)
}

example2();
console.log("lastline");
