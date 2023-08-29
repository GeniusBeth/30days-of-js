// number 1
const m = prompt("Enter a month")
const m1 = m.toLowerCase().trim()
switch(true){
    case m1==="september"||m1==="april"||m1==="june"||m1==="november":
    console.log(`${m1} has 30 days`)
    break
    case m1==="january"||m1==="march"||m1==="may"||m1==="july"||m1==="august"||m1==="october"||m1==="december":
    console.log(`${m1} has 31 days`)
    break
    case m1==="february":
    console.log(`${m1} has 28 days`)
    break
    default:
    console.log("Enter a valid month")
}

// number 1a
const mon = prompt("Enter a month")
const mon1 = mon.toLowerCase().trim()
console.log(mon1==="september"||mon1==="april"||mon1==="june"||mon1==="november"?`${mon1} has 30 days`:mon1==="january"||mon1==="march"||mon1==="may"||mon1==="july"||mon1==="august"||mon1==="october"||mon1==="december"?`${mon1} has 31 days`:mon1==="february"?`${mon1} has 28 days`:"Enter a valid month")

// number 1b
// with leap year
const month = prompt("Enter a month")
const month1 = month.toLowerCase().trim()
switch(month1){
    case "january":
    console.log("January has 31 days")
    break
    case "february":
    console.log("February has 29 days")
    break
    case "march":
    console.log("March has 31 days")
    break
    case 'april':
    console.log("April has 30 days")
    break
    case "may":
    console.log("May has 31 days")
    break
    case "june":
    console.log("June has 30 days")
    break
    case "july":
    console.log("July has 31 days")
    break
    case "august":
    console.log("August has 31 days")
    break
    case "september":
    console.log("September has 30 days")
    break
    case "october":
    console.log("October has 31 days")
    break
    case "november":
    console.log("November has 30 days")
    break
    case "december":
    console.log("December has 31 days")
    break
    default:
    console.log("Enter a valid month")
}




