console.log("Hello");

//Functions
//defining function
function myfun(){
    console.log("Functions");
    console.log("Hello");
}
//calling function
myfun();

function myfun1(msg){
    console.log(msg);
  
}
myfun1("Good Morning");

//sum
function sum(a,b){
    console.log(a+b);
}
sum(2,4);
sum(3,6);
//sub
function sub(a,b){
    console.log(a-b);
}
sub(3,4)

//using return
function mul(a,b){
    x = a*b;
    return x;
}
 let val = mul(2,3);
 console.log(val);

//Arrow Functions
const sum1 =(a,b)=>{
    console.log(a+b);
}
sum1(12,2);
const mul1 =(a,b)=>{
    return a*b;
}
let ans = mul1(21,3);
console.log(ans);

//create fn and take keywords and return vowels
function countstr(msg){
    let count =0;
    for(let i =0 ;i<msg.length;i++){
        
        if(msg[i] == 'a' || msg[i] == 'e' || msg[i] == 'i' || msg[i] == 'o' || msg[i] == 'u'){
            count ++;
        }
        else{
            continue;
        }
    }
    return count;
}
let count = countstr("aeiou");
console.log(count);
//using arrow function
const countmsg = (msg)=>{
    let count =0;
    for(let i =0 ;i<msg.length;i++){
        
        if(msg[i] == 'a' || msg[i] == 'e' || msg[i] == 'i' || msg[i] == 'o' || msg[i] == 'u'){
            count ++;
        }
        else{
            continue;
        }
    }
    return count;
}
let countans = countmsg("Faizan basha shaik");
console.log(countans);

//For each :Excute every element without calling it
let ar =[1 ,2,4,9,8];
ar.forEach((val) =>{
    console.log(val);
});
//print square of the numbers using for each
let nums = [ 1,2,3,4,5,6];
nums.forEach((num) =>{
    console.log(num*num);
});
