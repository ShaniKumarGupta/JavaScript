// if (5<8) {
//     console.log('I am inside if block');
// }else if (5>2){
//     console.log('Shani');
// }else{
//     console.log('Notice this part');
// }

var whoIsHere = 'user'

if (whoIsHere === 'user'){
    console.log('Greeting message for user');
    console.log('Allow access to view all cources');
}
else if (whoIsHere === 'teacher'){
    console.log('Greeting message for Teacher');
    console.log('Allow access to his courses');
}
else{
    console.log('MESSAGE: please verify your email');
    console.log('Send user an email for verification');
}