let sayHello = function (name){
    console.log("Greeting Message");
    console.log("Hello User");
    console.log(`Hey ${name}`);
}

let name = "Shani"
sayHello(name)

let fullName = function (fName, lName){
    console.log("Greeting Message for User");
    console.log("Hello in the world of JavaScript");
    console.log(`Hey ${fName + " " + lName }`);
}

let fName = "Shani Kumar"
let lName = "Gupta"
fullName(fName,lName);


let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}

let result = myAdder(12, 23)
console.log(result);

// Default Parameters

let num1
let num2 = 10
let multiplication = multi(num1,num2);
console.log(multiplication);

function multi(num1=12,num2) {
    let reult = num1 * num2;
    return reult;
}
