//foreach
//to take action on every elements we use for each loop
let arr = [10,20,30,40];
arr.forEach((value,index)=>{
    console.log("Number: ",value," Index: ",index);
})


//forof
let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
for(let value of numbers){
    sum += value;
}
console.log(sum);

// Output : 28


//forin
const person = {
    name: 'Faizan',
    age: 21,
    city: 'Delhi'
};
  
for (const key in person) {
    console.log(key + ": " + person[key])
}
  /* Output :
  name: faizan
  age: 21
  city: Delhi
  */
  
