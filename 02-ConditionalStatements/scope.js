// let iAmGlobal = 'someValue'

// if(true){
//     let iAmLocal = 'someMoreValue'
//     console.log(iAmGlobal);
//     iAmGlobal = 'Shani'
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }

// //console.log(iAmLocal);
// console.log(iAmGlobal);


// Kings territory problem

let king = 'Shani'

if (true){
    let king = "Aman"

    if(true){
        //let king = "Prince"
        console.log(king);
    }
}

if (true){
    console.log("I am second part :"+king);
}