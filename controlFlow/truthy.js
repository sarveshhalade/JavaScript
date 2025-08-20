// const usremail= "sarvesh@tradingview.com"

// if(usremail){
//     console.log("Got the useremail");
    
// }else{
//     console.log("dont have user email"); 
// }

//flasy values [false, 0, -0, Bigint 0n, "", null, undefined, Nan]
//truthy values["0", 'false', " ", [], {}, funstion(){}]
const emptObj= {}
if(Object.keys(emptObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??): null undefined

let val1;
    // val1 = 5 ?? 10
    val1 = null ?? 10

    console.log(val1);
    
    //Terniary operator
    //condition ? true : false
    const muttonthaliPrice = 320
    muttonthaliPrice <= 300 ? console.log("less than 300") : console.log("More than 300");
    
     