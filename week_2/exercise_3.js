// number 1
let quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(quote.match('love'))

// number 2
let phrase ="You cannot end a sentence with because because because is a conjunction"
console.log(phrase.match('because'))

// number 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedText = sentence.replace(/[^\w\s]/g , '')
console.log(cleanedText)
const findFrequent = cleanedText.split(' ')
console.log(findFrequent)
    

// number 4
let text =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let regex = text.match(/\d+/g)
console.log(regex)
let monthlySalary = parseInt(regex[0])*12
console.log(monthlySalary) 
let annualBonus = Number(regex[1])
console.log(annualBonus)
let onlineCourse = +(regex[2])
console.log(onlineCourse)
let total = (`${monthlySalary + annualBonus} euros`)
console.log(total)


