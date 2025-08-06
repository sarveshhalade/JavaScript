//object leiterals

const mySym = Symbol("Key1")
const JsUser = {
    Name : "Sarvesh",
    "full name" : "Sarvesh Halade",
    [mySym] : "myKey1",
    age : 21,
    location : "Kolhapur",
    Email : "sdhaladegoogle.com",
    lastLoggedIn : ["Monday","Friday"] 
}

// console.log(JsUser["Email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);

JsUser.Email = "sarvesh@tradingview.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greetings = function(){
      console.log("Hello JS user");
      
}
JsUser.greetings2 = function(){
      console.log(`Hello JS user,${this.Name}`);
        
    }
    console.log(JsUser.greetings());
    console.log(JsUser.greetings2());
    
    