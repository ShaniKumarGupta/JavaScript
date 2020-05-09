const superHeroes = ['Iron Man', 'Spiderman', 'Captain America', "Thor"]

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);

console.log(superHeroes[superHeroes.length - 1]);

console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

numbers[1] = 'Shani';

console.log(numbers)

//start

numbers.shift()
console.log(numbers);

numbers.unshift('Red')
console.log(numbers);

//end

numbers.pop()
console.log(numbers);

numbers.push('Green');
console.log(numbers);

//Middle

numbers.splice(2, 2, 'OM');
console.log(numbers);