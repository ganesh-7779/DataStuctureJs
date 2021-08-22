/**
 * Purpose: Ability program to show Sum of three Integer adds to ZERO
*/
let numbers = [1,2,5,-4,5,7,3,-1,-5,-2,7];

for (let i=0;i<=numbers.length;i++){
    for(let j=i+1;j<=numbers.length;j++){
        for(let k=j+1;k <= numbers.length;k++){
            if(numbers[i]+numbers[j]+numbers[k]==0){
                console.log("Sum of three int: "+numbers[i]+","+numbers[j]+","+numbers[k]+" = 0")
            }
        }
    }
}