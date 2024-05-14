//spread method

let src = {
    fname : "faizan",
    age : 20,
    weight : 60,
    color:"fair"
}
let dst = {...src};
console.log(src);
console.log(dst);


//Assignment method

let source = {
    height : 6,
    collage :"Manipal institute of technology",
    state : "manipal"
}
let destination = Object.assign({},source);
console.log(source);
console.log(destination);

//iteration method

let src1 ={
    fname : "Ismah",
    age : 23,
    color : "fair",
    weight : 60
}
let dst1 = {};
for(let key in src1){
    let newKey = key;
    let newValue = src1[key];
    dst1[newKey] = newValue;
}
console.log(src1);
console.log(dst1);
