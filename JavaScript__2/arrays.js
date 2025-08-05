const myarr = [0,1,2,3,4,5]
const cars = ["BMW" , "Audio", "Porsche"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// Array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(8)
// myarr.shift()

// console.log(myarr.includes(5));
// console.log(myarr.indexOf(4));
// const newArr = myarr.join()
// console.log(myarr);
// console.log(newArr);

// slice , splice
console.log("A ",myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("c ",myarr);
