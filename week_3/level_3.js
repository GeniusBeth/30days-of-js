const date = new Date
const year = date.getFullYear()
const month = String(date.getMonth()+1).padStart(2,'0')
const day = String(date.getDay()).padStart(2, '0')
const hour = String(date.getHours()).padStart(2 ,'0')
const minutes = String (date.getMinutes()).padStart(2,'0')
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)


