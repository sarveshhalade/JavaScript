//if

// const temperature = 40

// if(temperature > 41){
//     console.log("Executed");
    
// } else{
//     console.log("temperature is greater than 40");
    
// }

// const score = 200
// if(score >100){
//     const power ="fly" //variable declared inside scope will only be limited to curly braces .
//     console.log(`User power :${power}`);
    
// }

// const balance = 1000
// //if (balance >500) console.log("Test"); //implicit scope 
// if (balance <500){
//     console.log("less than 500");
    
// }
// else if(balance <750){
//     console.log("less than 750")
// }
// else if(balance > 1200){
//     console.log("greater then 1200");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn =true
const debitCard = true
const userLoggedInFromGoogle =false
const userLoggedInFromEmail =true
   // '||' is a or operator checks multiple condition
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("User logged in");
    }