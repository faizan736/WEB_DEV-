console.log("day2")

//Array
let arr = [1,2,3,4,5,6,7];
let str = ["Faizan","Irfan","Usman","Suhail"]

for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(str[i]);
}

for(let el of arr){
    console.log(el);
}

//question to calculate the avg of th marks
let marks = [85,97,44,37,76,60];
let sum =0;
for(let i =0;i<marks.length;i++){
    sum = sum+marks[i];
}
sum = sum/marks.length;
console.log(`The avg of the class = ${sum}`);

//price after discount of 10% on every item and store in same array
let price  =[250,645,300,900,50];
for(let i =0;i<price.length;i++){
    price[i] = price[i]-price[i]/10;
    console.log(`The price of the item after discount ${price[i]}`);
}
// for(let  i= 0 ;i<price.length;i++){
//     console.log(price[i]);
// }

//Array Methods
//push
//pop
//to string (tostring() )converts to string
let items =["Potato","apple","litchi","banana"];
console.log(items);
items.push("chips");
console.log(items);

items.pop();
console.log(items);

let shifteditem = items.shift();
console.log(shifteditem);

//slice()
console.log(items.slice(1,2));

//splice()
items.splice(1,2,"hello");
console.log(items)


//create array to store compaines 
//remove first
//remove uber add ola
//amazaon  at end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//remove first
let firstremove = companies.shift();
console.log(companies);
//remove uber add ola
companies.splice(1,1,"Ola");
console.log(companies)
//add 
companies.push("Amazon");
console.log(companies)
