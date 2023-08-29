// number 1a
const grade = prompt("What is your score")
console.log(49 >=grade? "You scored an F"
    :59 >= grade?"You scored a D"
    :69 >= grade?"You scored a C"
    :79 >= grade?"You scored a B"
    :100 >= grade?"You scored an A": "Input a valid number")
    
 // number 1b
 const grade1 = prompt("What is your score")
 switch(true){
     case grade1 <= 49:
     console.log("You scored an F")
     break;
     case grade1<= 59:
     console.log("You scored a D")
     break;
     case grade1 <= 69:
     console.log("You scored a C")
     break;
     case grade1 <= 79:
     console.log("You scored a B")
     break;
     case grade1 <= 100:
     console.log("You scored an A")
     break;
     default: 
     console.log("Input a valid number")
 }

    
// number 2a
const m =  String(prompt("Enter a new month"))
const m1 = m.toLowerCase().trim()
console.log((m1==="september"||m1==="october"|| m1==="november")? "The season is Autumn":m1==="december"||m1==="january"||m1==="february"?"The season is Winter":m1==="march"||m1==="april"||m1==="may"?"The season is Spring"
    :m1==="june"||m1==="july"||m1==="august"
    ?"The season is Summer":"Enter a valid month")

// number 2b
const mon = prompt("Enter a month")
const mon1 = mon.toLowerCase().trim()
switch(true){
    case (mon1==="september"||mon1==="october"|| mon1==="november"):
    console.log("The season is Autumn")
    break
    case (mon1==="december"||mon1==="january"||mon1==="february"):
    console.log("The season is Winter")
    break
    case (mon1==="march"||mon1==="april"||mon1==="may"):
    console.log("The season is Spring")
    break
    case (mon1==="june"||mon1==="july"||mon1==="august"):
    console.log("The season is Summer")
    break
    default:
    console.log("Enter a valid month")
}

// number 3a
const day = prompt("What is the day today?")
const day1 = day.toLowerCase().trim()
switch(day1){
    case "monday":
    console.log("Monday is a workday")
    break
    case "tuesday":
    console.log("Tuesday is a workday")
    break
    case "wednesday":
    console.log("Wednesday is a workday")
    break
    case "thursday":
    console.log("Thursday is a workday")
    break
    case "friday":
    console.log("Friday is a workday")
    break
    case "saturday":
    console.log("Saturday is a weekend")
    break
    case "sunday":
    console.log("Sunday is a weekend")
    break
    default:
    console.log("Not a day")
}

// number 3b
const dow = prompt("What day is today?")
const dow1 = dow.toLowerCase().trim()
const result = dow1==="monday"?"Monday is a weekday":dow1==="tuesday"?"Tuesday is a weekday":dow1==="wednesday"?"Wednesday is a weekday":dow1==="thursday"?"Thursday is a weekday":dow1==="friday"?"Friday is a weekday":dow1==="saturday"?"Saturday is a weekend":dow1==="sunday"?"Sunday is a weekend":"Enter a day"
console.log(result)



