const myTodos = []

myTodos.push("Hi")
myTodos.push("Shani")
myTodos.push("Aman")

myTodos.forEach(function(todo,index){
    console.log(`Your task no. ${index+1} is: ${todo}`)
})