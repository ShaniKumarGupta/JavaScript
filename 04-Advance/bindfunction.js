let name = {
    firstname: "Shani Kumar",
    lastname: "Gupta"
};

let printName = function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
}

// function borrowing
printName.call(name, "Renukoot","UP");

// apply function
printName.apply(name,["Renukoot","UP"]);

//bind function

let printMyName = printName.bind(name,"Renukoot","UP");
console.log(printMyName);
printMyName();

// bind method gives the copy of that method
// which will invock later