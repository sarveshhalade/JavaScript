let a= 400
if (true){
    let a= 20
    const b= 50
    // console.log("Inner: ",a);
    
}
// console.log(a);

function car1() {
    const oldCar= "Swift Dzire"

    function car2() {
        const newCar= "Hyryder"
        console.log(newCar);
        
    }
    //console.log(newCar);
    
      car2()
}
car1()

// ifelse
if (true){
    const oldCar= "Swift Dzire"
    if(oldCar === "Swift Dzire"){
        const newCar= "Hyryder"
        // console.log(oldCar +  newCar);
        
    }
}

console.log(addone(5))
function addone(num){
    return num + 1
}

const addtwo= function(num){
    return num + 2
}
console.log(addtwo(3));
