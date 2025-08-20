// syntax
// switch (key) {  
//     case value:
        
//         break;

//     default:
//         break;
// }

const month =3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; //breaks the control flow if break is commented than it prints the below statements also accept default
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        
        break;
}