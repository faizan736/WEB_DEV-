class Human{
    age = 13;//public
    #wt = 80;//private
    ht = 70;
    Fullname = "Faizan";

    constructor(newAge,newHeight,newWeight){
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    walking (){
        console.log("Iam walking");
    }

    running(){
        console.log("Iam running")
    }

    myName(){
        console.log("My name is ",this.Fullname);
    }

    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){
        this.#wt = val;

    }

}
let obj = new Human(25,50,75);
console.log(obj.age);
console.log(obj.fetchWeight);

obj.walking();
obj.myName();

//gettter and setter
//to access and update the values of private we use getter and setter
