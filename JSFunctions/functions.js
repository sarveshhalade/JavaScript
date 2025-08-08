// const { use } = require("react");

function sayMyName() {
    console.log("S");
     console.log("A");
      console.log("R");
       console.log("V");
        console.log("E");
         console.log("S");
          console.log("H");
}
// sayMyName()

// function addTwoNo(number1, number2)//parameters
// {
//     console.log(number1 + number2);
    
// }

// function addTwoNo(number1, number2)//parameters
   {
       //let result =number1 + number2;
      //  return result
      //  return number1 + number2
   }
    //addTwoNo(3,7)//arguments
    //const result = addTwoNo(5,8)
// console.log("Result :",result);

// function cricket(player){
//     if(player === undefined){
//         console.log("plz enter a player name");
//         return
//     }
//     return `${player} is my favourite pacer`
// }
//console.log(cricket("Bhuvneshwar Kumar"));
//console.log(cricket());

function calculateCartPrice(...num1)//rest operator
{
    return num1
}
    console.log(calculateCartPrice(200,4080,299,8900));

// how to pass the objects into functions
const user= {
    username: "Sarvesh",
    age: 21,

}    
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the age is ${anyObject.age}`);
    
}
// handleObject(user)
handleObject({
    username : "Priyanka",
    age: 21
})

const array= [200,400,240,599]
function getSecondArr(getarr){
    return getarr[1]
}
//console.log(getSecondArr(array));
console.log(getSecondArr([200,500,504,800]));
