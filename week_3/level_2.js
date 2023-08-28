// number 1
const num = 0.5
const base = prompt("Enter base:")
const height = prompt("Enter height:")
console.log(`The area of a triangle is 
 ${num*base*height}`)

// number 2
const a = +(prompt("Enter side a:"))
const b = +(prompt("Enter side b:"))
const c = +(prompt("Enter side c:"))
console.log(`The perimeter of the triangle is ${a+b+c}`)

// number 3
const length = +(prompt("Enter the length"))
const width = +(prompt("Enter the width"))
const area = length * width
const rectPerimeter = 2*(length+width)
console.log(`The area is ${area}`)
console.log(`The perimeter is ${rectPerimeter}`)

// number 4
const pi = 3.14
const r = prompt("Enter the radius")
const circleArea = pi*r*r
const circumference = 2*pi*r
console.log(`The area of the circle is ${circleArea}`)
console.log(`The circumference of the circle is ${circumference}`)

// number 5
let y = prompt("Enter the number")
let x = prompt("Enter the number")
const mm = 2
const con = -2
let y11 = (mm*x) + con
let x11= (y + 2)/2
console.log(`x is ${x11}  and y is ${y11}`)

// number 6
const y2 = 10
const y1 = 2
const x1 = 2
const x2 = 6
let m = (y2 - y1)/(x2 - x1)
console.log(`The slope is ${m}`)

// number 7
/*The slope for the first one was given as 2 and in the second one the slope was calculated because it wasn't given but we also arrived at 2*/

// number 8
let x3 = +(prompt("Enter a number"))
let y3 = (x**2+6*x+9)
console.log(`The value of y is ${y3}`)
// At point x = -3; y is 0

// number 9
const hour = +(prompt("Enter the hour"))
const ratePerHour = +(prompt("Enter the rate per hour"))
console.log(`Your weekly earning is ${hour * ratePerHour}`)

// number 10
const name = prompt("Enter the name")
console.log(name.length >7 ? "Your name is long" : "Your name is short")

// number 11
let firstName = "Owolabi".length 
let lastName = "Elizabeth".length 
console.log(firstName > lastName ? "FirstName is greater than last name" : "Last name is greater than first name")

// number 12
let myAge = +(prompt("How old are you?"))
let yourAge = +(prompt("How are you?"))
console.log(myAge > yourAge ? `I am ${myAge - yourAge} years older than you` : `You're  ${yourAge-myAge} years older than me`)

// number 13
const birthYear = +(prompt("Enter your birthYear"))
const date = new Date()
const yearToday = date.getFullYear()
const age = yearToday - birthYear
console.log(age>=18?`You are ${age}.You are old enough to drive`: `You are ${age}.You would be allowed to drive after ${18-age} year(s)`)

// number 14
const yearsInNumber = 60*60*24*365
const yearsNumber = +(prompt("Enter the number of years you live"))
console.log(`You lived ${yearsInNumber*yearsNumber} seconds`)

// number 15
const timeDate = new Date()
console.log(`${timeDate.getFullYear()}-${timeDate.getMonth()+1}-${timeDate.getDay()} ${timeDate.getHours()}:${timeDate.getMinutes()}`)
console.log(`${timeDate.getDay()}-${timeDate.getMonth()+1}-${timeDate.getFullYear()} ${timeDate.getHours()}:${timeDate.getMinutes()}`)
console.log(`${timeDate.getDay()}/${timeDate.getMonth()+1}/${timeDate.getFullYear()} ${timeDate.getHours()}:${timeDate.getMinutes()}`)


