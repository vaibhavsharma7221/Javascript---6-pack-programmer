let num=Number(prompt("enter a number"));
console.log(typeof(num));

// comparison operator

//== ->simple comparison operator 
// ===->strict comparison operator ->compares datatype also.

// if-else if-else notation
if(num===10){
    console.log("red valvet");
}else if(num===21){
    console.log("Butterscotch");
}
else{
    console.log("random");
}


//switch ststement

switch(num){
    case 20:
        console.log("i got 20");
        break;

    case 100:
        console.log("I found 100");
        break;
        
    default:
        console.log("i found nothing");
        break;    
}


//for loop
for(let i=0;i<10;i++){
    console.log("loop of "+i)
}

//while loop
let j=0;
while(j<10)
{
    console.log('hi');
    j++;
}

//do-while loop
do{
    console.log("this is do-while loop");
}while(j<10);
