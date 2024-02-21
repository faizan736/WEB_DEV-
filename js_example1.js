//ex1
//create a new string from old by adding first 3 char and last 3 char
const newstr =(str)=>
    //if len < 3then return str (: means return that if true) else remaing
    str.length <=3 ? str: str.slice(0,3) + str.slice(-3);

console.log(newstr('abcdef'));
console.log(newstr('abc'));
console.log(newstr('faizan_basha'))

//ex2
//extract first half of a str of even length

const extractEvenLength =(str)=>{
    let len = Math.floor(str.length / 2);
    return str.slice(0,len);

}
console.log(extractEvenLength('faizan'));
console.log(extractEvenLength("Faizan_Basha_Shaik"));

//ex3
//concatenate 2 str except their first char

const newstring = (str1, str2)=>{
    let a = str1.slice(1,str1.length);
    let b = str2.slice(1,str2.length);

    return a.concat(" "+b);
}
console.log(newstring('faizan','basha'));


//ex4
//2 number is given find which is nearest to 100
const nearesto100 =(a,b)=>{
    if(a % 100 > b % 100){
        console.log(`${a} is the closest to 100`);
    }
    else if(a % 100 == b % 100){
        console.log(`${a} and ${b} both are closest`);
    }
    else{
        console.log(`${b} is closest to 100`)
    }
}
console.log(nearesto100(57,75));
console.log(nearesto100(75,50));
console.log(nearesto100(50,50));
