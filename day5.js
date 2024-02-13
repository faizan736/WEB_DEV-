console.log("HEllo");

//foreach loop
let arr = [1,2,3,4];
arr.forEach(function printval(val){
    console.log(val);
})
//method2
arr.forEach((val,index) =>{
    console.log(val,index);
});
//for each is a higher order function

//square of numbers using foreach
//method1
let nums = [1,2,3,4,5];
nums.forEach((val) =>{
    console.log(val*val);
});
//method2
let calSquare = (num) =>{
    console.log(num*num);
}
nums.forEach(calSquare);

//Maps
let ans = [9,8,7,6,5];
ans.map((val) =>{
    console.log(val);
});

//filters
let ans1 = [1,2,3,4,5,6,7,8,9];
let even = ans1.filter((val) =>{
    return val %2 ===0;
});
console.log(even);

//Reduce
let array = [1,2,3,4,5,6,7,8,9];
const result =  array.reduce((res,curr) =>{
    return res+curr;
});
console.log(result);

//Largest using reduce method 
let numbers = [ 1,2,5,4,7,8,9];

let highestnumber = numbers.reduce((prev,curr) =>{
    return prev >curr ? prev : curr;
})
console.log(highestnumber);

//array marks of students filter out of the marks of student that scored 90+;
let marks = [ 75,78,79,85,87,90,97,100];
let goodmarks = marks.filter((val) =>{
    if(val >= 85){
        return val;
    }
});
console.log(goodmarks);

//take input from the user
//find sum and product

let n = prompt("Enter a number");

let answer = [];
for(let i =1;i<=n;i++){
    answer[i-1] = i;
}
let sumans  = answer.reduce((prev,curr) =>{
    return prev+curr;
});
let mulans = answer.reduce((prev,curr) =>{
    return prev*curr;
});
console.log(`sum = ${sumans}`);
console.log(`mul = ${mulans}`);
