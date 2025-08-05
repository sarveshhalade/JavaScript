const today = new Date();                                   

// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toLocaleString());
// console.log(typeof today);  // Date is object its instance is today.   

// let createdDate = new Date(2025, 7, 5,12 , 12)
//let createdDate = new Date("2025-08-05")
let createdDate = new Date("08-05-2025")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long"
})