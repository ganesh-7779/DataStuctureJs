/**
 * find the digits that are repeated twice like 33, 77,etc and
 *  store them in an array
 */
let array =new Array();
let range = 100;
for (i= 11;i<=range;i++){
    let temp = i;
    let reverse = 0;
    while(temp>0){
        let rem = temp%10;
        reverse=reverse*10+rem;
        temp = parseInt(temp/10)
    }
    if(reverse==i){
        array.push(i);
    }
}
console.log(array);