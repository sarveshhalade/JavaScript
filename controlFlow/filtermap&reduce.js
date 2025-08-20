// foreach does not return value

// const coding= ["html", "css", "javscript"]

// const values =coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// filter

const mynums= [1,2,3,4,5,6,7,8,9,10]

// const newnum =mynums.filter((num) => {
//     return num > 4
// })
// console.log(newnum);
const newnum= []
mynums.forEach( (num) => {
    if(num > 4){
        newnum.push(num)
    }
})
//console.log(newnum);

const cars = [
    { model: "Toyota", year: 2020 ,type:"SUV"},
    { model: "Honda", year: 2019 ,type:"sedan"},
    { model: "Toyota", year: 2021 ,type:"truck"},
    { model: "Toyota", year: 2018 ,type:"sedan"}
];

//let mycar = cars.filter((car) => (car.model ==='Toyota'))

mycar = cars.filter((car) => {
    return car.year >= 2018 && car.model === 'Toyota'
})
// console.log(mycar);


const btechNo =[1,2,3,4,5,6,7,8,9,10]
//const newnums = btechNo.map((num) => {return num + 10})

// chaining
const newnums = btechNo
                    .map((num) => (num * 10))
                    .map((num) => (num + 1))
                    .filter((num) => (num >=40))
// console.log(newnums);

// reduce
const carnum =[1,2,3]
//  const newcarnum= carnum.reduce(function(acc,curval){
//     console.log(`accumulated val:${acc},current val:${curval}`);
//     return acc + curval
//  },0)
//  console.log(newcarnum);
 const newcarnum= carnum.reduce((acc, curval) => (acc + curval),0)
//  console.log(newcarnum);

const shoppingCart= [
    {
        itemName: "oats",
        price: 230
    },
    {
        itemName: "bastmatirice",
        price: 500
    },
    {
        itemName: "parle",
        price: 30
    },
]
const totshopping= shoppingCart.reduce(function(acc,item){
     console.log(`accumulated val:${acc},current val:${item.price}`);
     return acc + item.price
 },0)
//const totshopping= shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(totshopping);
