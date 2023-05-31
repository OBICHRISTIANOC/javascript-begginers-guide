function one() {
    return 'one';
}
                                     // u should learn about
//let value = one();                 // string
//console.log(value); or                // boolean
// console.log(one());                // number
                                     // undefined 
                                     //  function
 //let value = one;
// console.log(typeof value);  or u insert a variable
 // console.log(typeof one);
// console.log(value());


/*
 function two() {
    return function () {
        console.log('two');
    }
 }
let myfunction =two();
myfunction(); 
*/


 //illustration which u may never come across
 function three() {
    return function() {
        return 'three';
    }
 }
  console.log(three()());




