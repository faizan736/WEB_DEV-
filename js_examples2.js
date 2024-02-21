//ex1
//find even numbers
const evennumbers =(arr)=>{
    let count =0;
    for(i =0;i<arr.length;i++){
        if(arr[i] %2 == 0){
            count++;
        }
    }
    return count;
}
let array = [1,2,3,4,5,6,7,8];
console.log(evennumbers(array));

//ex2
//find even value upto given number

const evennumber =(num)=>{
    let count =0;
    for(i =1;i<=num;i++){
        if(i % 2 == 0){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}
console.log(evennumber(50));

//ex3 
//check if sorted or not
const checksort =(arr)=>{
    for(i =0;i< arr.length ;i++){
        if(arr[i+1] < arr[i]){
            return false;
        }
    }  
    return true;  
}
console.log(checksort([1,6,9,5,6]));

//ex4
//largest even number from array
const largestevennumber = (arr) =>{
  
    let maxi =0;
    for(i =0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
           maxi = Math.max(maxi,arr[i]);
        }
    }
    return maxi;
}

console.log(largestevennumber([2,3,4,5,75,22,84,32]));
console.log(largestevennumber([9,8,6,5,4,3,44,22,2,105,68]));

//ex5
//repalce first index
const replaceFirstindex =(str)=>{
    // return `$${str.slice(1,str.length)}`;
    return str.replace('a','$');
}

console.log(replaceFirstindex('faizan'));

//ex6
//given year check if leap year or not
const checkleapyear =(num)=>{
    if((num % 400 ===0 )&& (num % 100 !==0)||(num %4 === 0)){
        return "Leap year"
    }
    else{
        return "Not a leap year";
    }
}
console.log(checkleapyear(2004));

//ex7
//generate random hexadecimal code

const randomHexaCode = ()=>
    //after 9 it converts into str hexdecimal base is 16 if we give 10 converts to decimal
   Math.floor(Math.random()*16).toString(16);

const getRandomHexcolor = ()=>
     '#'+Array.from({length :6}).map(randomHexaCode).join('');

console.log(getRandomHexcolor());

