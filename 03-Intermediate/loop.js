// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']

// console.log(days.length);

// let i = 0;
// for(i=0;i<days.length;i++){
//     console.log(days[i]);
// }

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']

let sayhello = function(){
    console.log("Hello Users!!")
}
days.forEach(sayhello)

days.forEach(function(){
    console.log("Shani Kumar Gupta")
})

days.forEach(function(days){
    console.log(days);
})

days.forEach(function(day, index){
    console.log(`Starts with ${index} --> ${day}`)
})