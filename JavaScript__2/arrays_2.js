const myCars =["Porsche", "Lamborgini", "Bugatti"]
const superHeros=["Thor", "Hulk", "Ironman"]

//superHeros.push(myCars)
// console.log(superHeros);

// const allarr = superHeros.concat(myCars)
// console.log(allarr);

// const allarr2 =[...myCars,...superHeros]
// console.log(allarr2);

const newArr =[1,2,3,4,[5,6],7,[6,7],8]

// const allNewArr = newArr.flat(Infinity)
// console.log(allNewArr);

console.log(Array.isArray("Sarvesh"));
console.log(Array.from("Sarvesh"));
console.log(Array.from({Name : "Sarvesh"})); //interesting

let result1 = 100
let result2 = 200
let result3 = 300
console.log(Array.of(result1,result2,result3));
