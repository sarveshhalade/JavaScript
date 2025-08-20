// immediately invoked functions expression.

//named iife
(function car(){
    console.log(`Drifting a car `);   
})();

((carName) => {
    console.log(`One of the most luxary car brand is ${carName}`);
    
})('BMW.')