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
