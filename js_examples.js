//checking numbers if single is 100 or sum is 100
let a = prompt("Enter the first number : ");
let b = prompt("Enter the second number : ");

if(a == 100 || b == 100 || (a+b) == 100){
    console.log("True");
}
else{
    console.log("False");

}

const isequal = (a,b) =>{
    if(a === 100 || b === 100 || (a + b) === 100){
        console.log("True");
    }
    else{
        console.log("False");
    }
} 
isequal(50,50);
isequal(100,0);
isequal(0,100);
isequal(50,23);


//ex2
// replace every char in a str with char following it in the alphabet
const replacewithnext =(str)=>{
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('');
}
console.log(replacewithnext('faizan'));

//ex3
//add new infront of the string if already present dont add

const addnew = (str) =>
    str.indexOf('New') === 0 ? str:`New ${str}`;

console.log(addnew('New faizan'));

