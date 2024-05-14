let arr = ["Faizan",100,2,5,"basha",true];

// console.log(arr);
arr.push(25);
arr.pop(1);
console.log(arr);
arr.splice(1,0,"Faizan");


//Map
let array = [1,2,3,4,5,6];

let ansArray = array.map((number)=>{
    return number*number;
})
console.log(ansArray);

array.map((number,index)=>{
    console.log(number,index);

})

//filter
let arra = [1,2,3,4,5,6,7];
let evenArray = arra.filter((number)=>{
    if(number %2  === 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(evenArray);

let arrays = [1,2,3,'faizan','shaik',4,5,6];
let ansString = arrays.filter((value)=>{
    if(typeof(value) == 'string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(ansString);


//reduce
let nums = [10,20,30,40];
let ans = nums.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ans);


//sort
let number  = [1,4,5,6,3,2,0];
number.sort();
console.log(number);
