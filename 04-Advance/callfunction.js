let name = {
    firstname: "Shani",
    lastname: "Gupta",
    printFullName: function(){
        console.log(this.firstname+ " "+ this.lastname);
    }
}

name.printFullName();

let name2 = {
    firstname: "Aman",
    lastname: "Kumar"
}

// Call method: Function borrowing
name.printFullName.call(name2);

let game = {
    name : "Cricket",
    TotalPlayer: 11,
}

let printGame = function(){
    console.log(this.name+" "+this.TotalPlayer);
};

printGame.call(game);