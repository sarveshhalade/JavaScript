const cardet= {
    carOwner: "Sarvesh",
    type: "SUV",
    welcomeMesssage: function(){
        console.log(`${this.carOwner},Jai shree ram`);// this word is use to know the current context 
        // console.log(this.cardet);
        
    }
}

console.log(cardet);

cardet.welcomeMesssage()
cardet.carOwner= "Yash"
console.log(cardet);
cardet.welcomeMesssage()

// arrow functions
// const addtwo= (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addtwo(24,5));

const addtwo= (num1, num2)=> (num1 + num2) //frequently used in "React"

console.log(addtwo(24,5));


