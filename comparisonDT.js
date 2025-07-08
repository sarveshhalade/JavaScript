 console.log(null > 0)//false
 console.log(null == 0)//false
 console.log(null >= 0)//true

// equality check '==' and comaprison operator >=,<=,<,> works differently 
// comparison converts null to number , treating as a zero
// avoid such type of comaprison

// === strict check
console.log("2" === 2);