console.log("Hello");

//for loop
for(let i =0;i<=5;i++){
    console.log("Intership");
}

//sum
let sum =0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}
console.log(sum);

//while
let i=0;
while(i<=5){
    console.log("i = ", i);
    i++; 
}

//do while
//atleast ones the loop will run
i =0;
do{
    console.log("Faizan");
    i++;
} while(i<=5);


//for of loop
let str = "Faizan";
for(let i of str){
    console.log(i);
}

//for in loop
let student = {
    name:"faizan",
    age :20,
    cgpa : 80,
};

for(let i in student){
    console.log(i);
}

//print all the even number from 1 to 1000
for(let i =0;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    }
} 

//random game
let a = prompt ("Enter the number");
let num =45;
while( a != num){
    a = prompt("Enter the correct  number");
}
console.log("You are correct")


//STRINGS
let st = "faizan";
let ans = st.length;
console.log(ans);

//Template  literals
let obj ={
    item:"pen",
    cost :20
};
let specialstring = `This is a template literal`;
//diff b/w normal string and template
let output =  `The cost of ${obj.item} is ${obj.cost} ruppees`;
console.log(output);

console.log("The cost of the",obj.item,"is",obj.cost,"rupees");
