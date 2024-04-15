//------CLASS------

class Myclass{
    
    //private variables -- can be only accessed inside class
    #a=30;
    #b=20;
   
    
    //CONSTRUCTORS IN CLASS
    constructor(val1,val2){
        this.#a=val1;
        this.#b=val2;
    }

    print(){
        console.log("I am printing",this.#a,);
    }

    //getter and setter function

    get getValue(){
        return this.#a;
    }

    set setVala(val){
        this.#a=val;
    }
}

// function Myclass(val1,val2){
//     this.a=val1;
//     this.b=val2;
// }

const obj1= new Myclass(120,50);
console.log(obj1);

console.log(obj1.getValue);// I don't need to apply braces when I am calling functions that have getter or setter function

obj1.setVala=500; // agrument needs to assigned to pass it to setter function

console.log(obj1.getValue);

obj1.print();

const obj = new Date();
console.log(obj);

console.log(obj.getDay())



//INHERITANCE 

class Electronics{

    //private variables
    #input
    #output
    #name
    
    //constructor 'c' must be samll
    constructor(input,output,name){
       this.#input=input;
       this.#output=output;
       this.#name=name;
    }

    print(){
        console.log(this.#name);
    }
}

//Here inheritance is taking place using extends keyword
class Charger extends Electronics{
    
    #plugType;

    constructor(input,output,name,plugType){
        //super keyword is used to send values to parent class
        super(input,output,name);

        this.#plugType=plugType;
    }
}


class hardDisk extends Electronics{
    #RPM;

    constructor(input,output,name,RPM){
      super(input,output,name);
      this.#RPM=RPM;
    }
    
    //getter function
    get hardiskspeed(){
        console.log(this.#RPM);
    }
}


const hpCharger = new Charger(200,20,'hpCharger',"european");
const dellCharger = new Charger(200,20,'hpCharger',"european");

hpCharger.print();

const  wdHardDisk = new hardDisk(200,250,"WD Hard Disk",7200);
wdHardDisk.hardiskspeed;// getter fxn- no need of '()'
wdHardDisk.print();
