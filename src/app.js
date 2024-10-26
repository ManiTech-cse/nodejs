//squred the given array

// const num=[1,2,3,4,5]
// let doubledarr=num.map(num =>(num*num))
// console.log(doubledarr)

// //capitilize the firstletter

// const string=["hello","this","javascript"]
// const capitilizeString= string.map(str=>str.charAt(0).toUpperCase() + str.slice(1));
// console.log(capitilizeString)  

// //reverse the strings

// let strings="hello";
// let rstring="";
// let strleng=strings.length-1;
// for(let i=0;i<strleng;i++){
//     rstring+= strings[strleng-1-i];
// }
// console.log(rstring);
// app.js
// In the file where you want to use the functions

// const  {concat,subtract } = require('../practice.js'); 

// concat(5,3);     
// subtract(3,2);   


//find first even numbers in given array
// const arr=[1,3,5,7,12,4,7,]
// const firstevennum=arr.find(number=>number % 2== 0);
// console.log( firstevennum)


//using filter method

// const arr=[1,2,3,445,56,67,89,];
// const heighst=arr.filter(number=>number>20);
// console.log(heighst)


// squre the values

// const arr=[1,2,3,4,5];
// const squred=arr.map(num=>num*num);
// console.log(squred)

// const arr = [1, 2, 3, 4, 5, 6];
// const addm = [];

// arr.forEach(num => addm.push(num + 5));

// console.log(addm);

//find negitive numbers
//  const arr=[-1,-2,0,3,4,];
//  const nagitive=arr.find(number=>number< 0);
//  console.log(nagitive)

//split method

// const str="javascript";
// const chararr=str.split('');
// console.log(chararr)

// assending order

// const arr=[2,1,45,6,7,9,8,10];
// const assend=arr.sort((a,b)=>a-b);
// console.log(assend);

// const reverse = require("../practice")
// console.log(reverse.reverse());


// function duplicate(str){

//     return [...new Set(str)].join('');
// }
// const str= "hello world"
// console.log(duplicate(str))
// const duplicate=require("../practice")
// const str="helloworld"
// console.log(duplicate.duplicate(str))

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./login/login.js')
const app = express();
const auth = require('./auth/auth.js')
app.use(bodyParser.json());
app.use(auth);
app.use("/login",login)
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Veda");
});




app.listen(process.env.PORT||3001, () => {
    console.log("App is running on port 3001");
});
// to find non repeted charecter in a given string
function nonrepetedchar(str) {
    for (let i = 0; i < str.length; i++) {
    
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(nonrepetedchar("swiss"))

// reverse the given string

function reverse(str) {
    let reversed = ""; 

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}

console.log(reverse("hello"));

//factorial of a given number
function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5))

// fizzbuzz 

function fizzbuzz(){

    for(let i=1; i<=100; i++) {

        if(i % 15 === 0)     
console.log("fizzbuzz");

        else if(i % 3 === 0)
            console.log("buzz");

        else if(i % 5 ===0)
            console.log("fizz")

else console.log(i)
        }
}
fizzbuzz();

// first letter must be capitailize
function capitalize(...strings) {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(capitalize("manimohan", "reddy"));
 
function reverse(str){
    return str.split('').reverse().join('')
}
console.log(reverse("javascript"))

// find nagitive numbers

function negitivenumber(nums){

    return nums.filter(num =>num <0 );

}
console.log(negitivenumber([-1,-2,-3,34,5,6]))

// remove duplicate string

function duplicate(str){
    return ([...new Set(str)].join(''))
}
console.log(duplicate("hello"))