// singalton object 
//const instauser = new Object()

// non singalton object
const instauser = {}

instauser.name= "Sarvesh"
instauser.id= "123bac"
instauser.age= 23

//console.log(instauser);

const fbuser={
    email: "sdhalad@fb.com",
    fullName:{
        userFullName:{
            firstname: "Sarvesh",
            lastname: "Halade"
        }
    }
}
//console.log(fbuser.fullName.userFullName.firstname);

const id1= {a:"12bc" , b:"34cd"}
const id2= {c:"12bc" , d:"34cd"}
//const id3 = Object.assign({},id1,id2)
const id3= {...id1, ...id2} // 90% will use this syntax 
// console.log(id3);

const users= [
    {
        id: 344,
        email: "sdh@Mail.com"
    },
    {
        
        id: 344,
        email: "sdh@Mail.com"
    }
]
users[1].email
// console.log(instauser);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(instauser.hasOwnProperty("id"));

const Book ={
    bookName: "How to win friends and influence people",
    price: "300",
    author: "Dale carnegie"
}

const {author : authorname}= Book //object destructuring
console.log(authorname);
