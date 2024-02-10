//'M' of Math must be capital

const a=Math.round(3.5);
console.log(a);

const b=Math.round(5.2);
console.log(b); 

const c=Math.ceil(5.2);
console.log(c);

const d=Math.floor(5.2);
console.log(d);

// truncate function -- returns integer value and ignores fractional part
const e=Math.trunc(4.1111);
console.log(e);

// sign function -- return 1 for +ive no. and -1 for -ve no.
const f=Math.sign(123);
const g=Math.sign(-111);
console.log(f);
console.log(g);

//pow function -- returns number raised to the power
const h=Math.pow(2,10);
console.log(h); 

//sqrt function -- returns the square root of a number
const i=Math.sqrt(625);
console.log(i);

//absolute fxn -- returns the absolute value(i.e. value without sign)
const func1=(a,b)=>{
    return Math.abs(a-b);
}
console.log(func1(2,3));

//sin,cos,tan fxns -- Takes value in radians;

const j=Math.sin(90);
console.log(j);

// for value in degree
let angleInDegree=(90*Math.PI)/180;
console.log(Math.sin(angleInDegree));

//min and max functions
const k= Math.max(20,90,66,3,2,11);
console.log(k);

const l=Math.min(77,11,30,2,6,6,0);
console.log(l);

//random function -- generates random value(0-1)
const m=Math.random();
console.log(m);

//if we want random value from 0-10
const n=Math.floor(Math.random()*10)+1;
console.log(n);

// if i want between 5-10
const o=Math.floor(Math.random()*5)+5;
console.log(o);

//logarithmic functions
const p= Math.log2(64);// log base2
console.log(p);

const q=Math.log10(100);//log base10
console.log(q);

//////////////DATE///////////////////

const r= new Date();
console.log(r); // this will give todays date

// this is how we palce our own data in dates(yy-mm-dd)
const s=new Date(2012,0,12,11,11,11);// months starts form 0 index
console.log(s);

// if only one value is passed, it is treated as millisecond
const t= new Date(20000);
console.log(t);

//another way of placing date
const u=new Date("feb 12 2024");
console.log(u);

//understanding months concept in javascript
let v=new Date(2024,1,10);
let w=new Date(2024,13,10);// if month is greter than 11 it will shift years
console.log(v);
console.log(w);

// DATE FUNCTIONS
const x=new Date();
console.log(x);
console.log(x.getDate());
console.log(x.getDay());
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getMilliseconds());
console.log(x.getTime());// time will come in milliseconds
console.log(x.toISOString());

// how to set time and date

const y= new Date("2024/2/10"); // if string is passesd index begins from 1
y.setHours(5);
y.setMinutes(50);
console.log(y);
