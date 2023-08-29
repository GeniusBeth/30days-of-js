
// number 1
const age = +(prompt("Enter your age"))
console.log(age>=18?`You are old enough to drive`: `You are left with ${18-age} years to drive`)

// number 2
const yourAge = +(prompt("Enter your age"))
const myAge = +(prompt("My age"))
if(yourAge>myAge){
    console.log(`You are ${yourAge-myAge} years older than me`)
}
else{
    console.log(`I am ${myAge-yourAge} years older than you`)
}

// number 3a
const firstNumber = +(prompt("Enter the first Number"))
const secondNumber = +(prompt("Enter the second Number"))
if(firstNumber>secondNumber){
    console.log(`${firstNumber} is greater than ${secondNumber}`)
}
else{
    console.log(`${secondNumber} is greater than ${firstNumber}`)
}

// number 3b
const firstNumber1 = +(prompt("Enter the first Number"))
const secondNumber1 = +(prompt("Enter the second Number"))
console.log(firstNumber1>secondNumber1?`${firstNumber1} is greater than ${secondNumber1}`:`${secondNumber1} is greater than ${firstNumber1}`)

// number 3c
const firstNum = +(prompt("Enter the first Number"))
const secondNum = +(prompt("Enter the second Number"))
switch(true){
    case firstNum > secondNum:
    console.log(`${firstNum} is greater than ${secondNum}`)
    break
    default:
    console.log(`${secondNum} is greater than ${firstNum}`)
}

// number 4
const number = +(prompt("Enter a number"))
console.log(number%2==0 ?`${number} is an  even number`: `${number} is an odd number`)

// number 4a
const num = +(prompt("Enter a number"))
switch(true){
    case num%2==0:
    console.log(`${num} is an even number`)
    break
    default:
    console.log(`${num} is an odd number`)
}
