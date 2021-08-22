/**
 * Purpose Sort array and Find 2nd largest And Smallest Number
 * @author: Ganesh Gavhad
 * @since: 22/8/2021
 */

let array=[];
for(let i = 0; i <=9;i++ ){
    array[i] =(Math.floor(Math.random()*999%888+100));
}
console.log("Before Sorting Array of random Number");
console.log(array);
console.log("After Sorting Array of random Number");
let sortedArray= array.sort();
console.log(sortedArray)
console.log("Second smallest element is:  "+  sortedArray[1]);
console.log("Second largest element is: "+ sortedArray[8]);