const prompt = require('prompt-sync')();
let number = prompt('Enter a number find out prime factor : ');
console.log("Prime Factor of :  " +number);
let array=new Array();
for(let i=2;i<=number;i++){
    while(number%i==0){
        array.push(i);
        number/=i;
    }
}
console.log("Prime Factor are:  " +array);