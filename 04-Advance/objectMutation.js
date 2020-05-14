// Mutation means a change in the form or nature of the original data.

const react = {
    l:{
        name : 'React'
    }
};

const vue = react;

vue.l = {
    name: 'Vue'
}

console.log(react.l.name);

// Because objects are reference type data.
// Whenever we create an object, it gets a new memory location.
// If we create a new aobject from that object, the memory id shared.

// Solution

const run = {
    first:{
        name : "Shani"
    }
};

const ft = Object.assign({},run);

ft.first = {
    name: "Vue"
};

console.log(run.first.name);