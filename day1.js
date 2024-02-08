console.log("Hello");

Name = "Faizan";
console.log(Name);

age = 24;
console.log(age);

price = 150.5;
console.log(price);

x = null;
y = undefined;
console.log(x);
console.log(y);

isFollow = true;
console.log(isFollow);

//variable cannot be re declared but can be updated
let name = "Faizan shaik";
console.log(name);

//varuable cannot be re decleared or updated
const time =24;
console.log(time);  

//objects
const student ={
    fullname :"Faizan",
    age :20,
    marks :9.5,
};
//to update the objects
student.age = student.age+1;
student.fullname = "Faizan shaik"

console.log(student);

//to access only name;
console.log(student["fullname"]);
console.log(student.fullname);
console.log(student.age);

//Arthemetic operarors
let a =5;
let b = 7;
//add
console.log("a+b =",a+b );
//mul
console.log("a*b",a*b);
//div
console.log("a/b =",a/b);
//sub
console.log("a-b=",a-b);
//modules
console.log("a%b=",a%b);
//exp power
console.log("a**b",a**b);
//increment
console.log("a++",++a,"b++",++b);
//decrement
console.log("a--",--a,"b--",--b);

//assignment operatos
a +=4;
console.log(a);
b -= 2;
console.log(b);
a %=2;
console.log(a);
b **=2;
console.log(b);

//comparison operators
console.log("a == b",a==b);
console.log("a!=b",a!=b);
console.log("a>=b",a>=b);
console.log("a<=b",a<=b);
//strict comparison
console.log("a === b",a === b);
console.log("a !== b",a !== b);


//logical operators

//if both true then true
console.log("a && b",a&&b);
//if any one is true result will be true
console.log("a || b",a||b);
//logical not
console.log("!a",!a,"!b",!b);

//conditional statements
let myname;
myname = "hello";
if(myname  === "Faizan"){
    console.log("You can vote");
}
else if(myname === "shaik"){
    console.log("You can vote");
}
else{
    console.log("Enter the correct name")
}


//turnary operator
let myage= 2;
y = 3;
//condtion ? true output : false output
let result  = myage> 4 ? "true":"False";
console.log(result);

//taking input from the users
let FullName = prompt("Hello");
console.log(FullName);
