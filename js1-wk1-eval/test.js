function makeAFunction( x, y) {
    let z = Math.abs(x-y);
    return z
}

let a = makeAFunction(8,9)
let b = makeAFunction(10,30)

console.log(a+b)

let myString = ['hello',' ', 'world'];

for (let ix = 0; ix < myString.length; ix = ix+1) {
    console.log(myString[ix]); // ix here changes from 0 to 2  
}
