let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user');
    console.log('Grant access');
}else if (isVerified || isGuest){
    console.log('Allow free previews');
}else{
    console.log('MESSAGE: Please contact admin');
}