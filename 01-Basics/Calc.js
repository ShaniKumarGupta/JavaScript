var a = prompt("Enter your first number:");
var b = prompt("Enter your second number");
var num1 = parseInt(a);
var num2 = parseInt(b);
var c = prompt("Enter the operation:");

switch(c){
    case '+':
        document.write(num1 + num2);
        break;
    case '-':
        document.write(num1 - num2);
        break;
    case '*':
        document.write(num1 * num2);
        break;
    default:
        document.write("Invalid Operation");

}