// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
//    console.log(num);
    
}
// can also print the string in for of loop

// maps
 const map = new Map()
 map.set('cse',"Computer Science")
 map.set('ailml',"Artificial Intelligence and Machine Learning")
 map.set('ds',"Data Structures")

// console.log(map);

 for (const [key, value] of map) {
   // console.log(key, ':-', value);
 }
// objects does not iterate in the same way as maps

// let us for objects
// for in loop
// for in iterates over keys only
const myobject = {
    js : "JavaScript",
    html : "HyperText Markup Language",
    css : "Cascading Style Sheets"
}
for (const [key, value] in myobject) {
    //console.log(`${key} shortcut is for ${value}`);
    }
// And here by using for in loop we cant iterate the MAPS

const programming =["JavaScript", "HTML", "CSS"]

for (const key in programming) {
    //console.log(`${key} is a programming language`);
   // console.log(`${programming[key]} is a programming language`);

    }

    // foreach loop
    const programminglang= ["JavaScript", "HTML", "CSS"]
    // programminglang.forEach(function (val){
    //     console.log(val);
        
    // })

    // programminglang.forEach( (item) => {
    //     console.log(item);
        
    // })

    // function printMe(item){
    //     console.log(item);      
    // }
    // programminglang.forEach(printMe);
    
    // programminglang.forEach((item, value, arr)=> {
    //     console.log(item, value, arr);
        
    // })

    const mylang =[
        {
            lanName: "JavaScript",
            lanFile: "JS"
        },
        {
            lanName: "HTML",
            lanFile: "html"
        },
        {
            lanName: "CSS",
            lanFile: "css"
        }
    ]

    mylang.forEach((item) => {
        console.log(item.lanName);
        
    })