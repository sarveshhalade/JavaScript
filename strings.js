const gameName = "GymShark"
const repoCount = 25 

console.log(gameName);
console.log(`My gamename is ${gameName} and my repo count is ${repoCount}`);

const myName = new String('Sarvesh-h-com')

console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toLocaleUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('s'));

const newString = myName.substring(0,4) 
console.log(newString);

const anotherString = myName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  sarvesh  "
console.log(newStringOne.trim());
 
const url = "https://sarvesh.com/sarvesh%20halade"
console.log(url.replace('%20','-'))
console.log(url.includes(sarvesh));

console.log(myName.split('-'));
