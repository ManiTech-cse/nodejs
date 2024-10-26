// const concat = (a, b) => console.log(a + b);
// const subtract = (a, b) =>console.log( a - b);

// console.log(concat(5, 3));     
// console.log(subtract(3, 2));  
// module.exports = { concat, subtract };
// function reverse() {
//     const str = "hello";
//     let rstr = ''; 
//     const leng = str.length;

//     for (let i = leng - 1; i >= 0; i--) {
//         rstr += str[i]; 
//     }

//     return rstr; 
// }

// module.exports= {reverse};


function duplicate(str){

    return [...new Set(str)].join('');
}
// const str= "hello world"
// console.log(duplicate(str))
module.exports={duplicate};
