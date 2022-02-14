//---01-CURLYBRACETS
console.log('---1---')
const someVar = "Hallihallo"
console.log(someVar)
console.log({ someVar }) // {} => very very very very very helpful for debugging variables!

const result1 = "1.45" + 10

console.log({ result1 })
//--02-vars-strings-numbers-math.js
console.log('---2---');

console.log("Willkommen: Hallo Dudes")

let undso = "Ich bin undso"
const undosweiter = "Ich bin undsoweiter"

// Console.log is a FUNCTION ! => erkennt man immer an den runden Klammern ()
console.log() // create empty line

// 1) Basic String operations
console.log( "Hello " + undso + " und hier gehts weiter " + undosweiter )
console.log( `Hello ${undso} und hier gehts weiter ${undosweiter}`)
console.log( undso, undosweiter )

console.log( undso.concat(undosweiter) ) // => undso + undsoweiter = undsoundsoweiter

const somethingNew = "Hallo" + 20 
const somethingElse =  1+2 //"1" + "2"
console.log(somethingNew);
console.log({somethingNew});
console.log( { somethingElse } )


// 2) Math

// Method = Function

const numby = 1.4 // 2

const numbyRounded = Math.round( numby ) // call a function, execute a function. numby = parameter / argument
console.log( { numbyRounded } ) // {} = geschweifte Klammern => curly braces

const numbyFloored = Math.floor( numby ) // floor rounds to the floor => DOWN => example: 1.5 => 1
console.log( { numbyFloored } ) // => 1

const numbyCeiled = Math.ceil( numby ) // ceil rounds to the ceiling => UP => example: 1.5 => 2
console.log( { numbyCeiled })

const aLotOfDigits = 1.4555555 // => 1.46
const roundedTo2Digits = aLotOfDigits.toFixed(2) // creates a string
console.log( { roundedTo2Digits } )

// parseFloat converts string to NUMBER (with digits) => so we can calculate with that sh*t
const result = 10 + parseFloat( roundedTo2Digits ) // 10 + 1.46 => 11.46
console.log( { result } )

// const numbyRandom = Math.random()  // Generates something between: 0..1
const numbyRandom = Math.round( Math.random() * 10)  // Generates something between: 1..10
console.log( { numbyRandom } )


// Integer & Float
const parsedInt = parseInt( "10.8aaaa" ) // parseInt does NOT round at all, it just plucks out the first whole number
const parsedFloat = parseFloat( "1.4" )

console.log( { parsedInt }) // Integer => FULL / Whole Numbers 1,2,3,100
console.log( { parsedFloat }) // FLOAT => Floating numbers with digits after comma, 1.45, 2.88777
//---/03-fruechte-spass-operators.js 
console.log('---3---');
let apples = 20
let oranges = 30
let mangoes = 5

const MangosplusÄpfeln = mangoes + apples; // 25
const OrangenminusMangos = oranges - mangoes; //25

console.log(MangosplusÄpfeln, OrangenminusMangos)
console.log(
  "ist die Summe aus Mangos und Äpfeln gleich Orangen minus Mangos ?",
  MangosplusÄpfeln >= OrangenminusMangos
);
//-- 04-nan
console.log('---4---');
// const htmlInputPrice = "30" // => we cannot calculate with fucking strings. so dont do it!

const hasNumber = parseInt("123aaaaaa")
const hasNoNumber = parseInt("aaaaaaa")

console.log( { hasNumber } )
console.log( { hasNoNumber } ) // NaN => Not a Number => Javascripts way tp tell us we tried to parse numbers out of shit
//-- 05-strings
console.log('---5---');
const name = "Marwyn Schuffold"

const firstname = name.substring(0, 6)
// const lastname = name.substring(7, 16) // grab lastname
const lastname = name.substring(7) // grab all from index 7 till the end

// const lastChar = name.substring(7, 3)
const lastNameBySlice = name.slice(-9)

console.log( name.includes("wyn") ) // this will give true, because "wyn" is in string
console.log( name.includes("Obi wan") ) // this will give false, because Obi wan is not in string


console.log( { firstname } )
console.log( { lastname })
console.log( { lastNameBySlice })
//-- 06 if else
console.log('---6---');
{/* <input type="text" name="wochentag" />  MO, DI, MI, DO, FR, SA, SO  */}

// Alle Wochentage => ARRAY of strings
const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]
// const numbers = [ 1, 1, 2, 4, 7, 8, 10 ] // Array of numbers

// random
const numWochentage = wochentage.length
const randomIndex = Math.floor( Math.random() * numWochentage  ) // 0..1
const wochentag = wochentage[ randomIndex ]

console.log( { wochentag } )

if( wochentag === "So" ) {
  console.log( "Heute ist Sonntag. Küche putzen oder Geld weg!" )
}
else if( wochentag == "Mo" ) {
  console.log("Heute ist Marwyn mit Bad dran!")
}
else if( wochentag == "Di") {
  console.log("Nathalie muss den Flur saugen!")
}
else {
  console.log( "Glück gehabt! Du bist noch nicht dran mit Putzen" )
}
//-- 07 random
console.log('---7 random---');
// Alle Wochentage => ARRAY of strings
const wochentage1 = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]

const numWochentage1 = wochentage1.length
const randomIndex1 = Math.floor( Math.random() * numWochentage1  ) // 0...6
// const index = Math.round( Math.random() * numWochentage1 - 1 ) // 0...6

console.log( { randomIndex1 } )

console.log( wochentage1[ randomIndex1 ] )

// ACCESS array elements by index
// console.log(wochentage1[0])
// console.log(wochentage1[1])
// console.log(wochentage1[2])
// console.log(wochentage1[3])
// console.log(wochentage1[4])
// console.log(wochentage1[5])
// console.log(wochentage1[6])
//-- 08 for loops
console.log('---08 for loops---');

// 1. **Addition.**
// Schreiben Sie ein Programm, um die Zahlen 1 bis 20 zu addieren.

// EXPECTED OUTPUT = 1+2+3+4+5+...... + 20 => 210

// we need a loop, because we want to do something repeated (adding numbers)

// FOR LOOP => fast immer für ARRAYS

// 1...20

const START_ITEM = 1
const MAX_ITEM = 20 // constants are for configuring stuff ONCE

// const summe = 0 // constant => cannot be changed anymore!
let summe = 0 // let => CHANGABLE => we can change the content

// executes 20 times 
for (let i = START_ITEM; i <= MAX_ITEM; i++) {
  summe += i // add i to the summe variable 
  // summe = summe + i // this is doing the same as the line above 
}
// OUTPUT ??

console.log( "Aufgabe 1 result:", { summe } ) // { summe: 210 }
// console.log( { name: "Rob" })



// 2. **Es befinden sich i Bierflaschen an der Wand.**
// Schreiben Sie ein Programm, das ausgibt: "Es befindet sich 1 Bierflasche an der Wand." "Es befinden sich 2 Bierflaschen an der Wand", bis es fünf Flaschen sind.

// EXPECTED OUTPUT:
// "Es befindet sich 1 Bierflasche an der Wand."
// "Es befindet sich 2 Bierflasche an der Wand."
// "Es befindet sich 3 Bierflasche an der Wand."
// "Es befindet sich 4 Bierflasche an der Wand."
// "Es befindet sich 5 Bierflasche an der Wand."
// for loop => 1 .. i

for( let i=1; i<=5; i++) {
  // console.log( "Es befindet sich", i, "Bierflasche an der Wand." )
  // console.log( "Es befindet sich " + i + " Bierflasche an der Wand." )
  console.log( `Es befindet sich ${ i } Bierflasche an der Wand.` )
}


// let i = 0 // set the start value outside the loop => not used that often => practically never

for( let i = 0; i<5; i++ ) {
  console.log(i)
}
//-- 09 arrays
console.log('---09 arrays---');

// const students = [] // Alexander Li
const students = ["Tetiana", "Hamideh", "Rami", "Yamen", "Akram", "Rob", "Ahmed"] // Alexander Li

// array methods => find me position of item, so I dont need to know the fucking index
const robIndex = students.findIndex( student => {
  return student === "Rob"
})

console.log( "Hallo".charCodeAt(1) ) // char code == ASCII code

console.log( robIndex )
students.splice( robIndex, 1 ) // kill rob at index wherever it is!

console.log( students )
// return



// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice

// return

console.log( "Vorher: ", students )

// students.splice(-3, 1)

students.splice(0, 0, "Alaa")

console.log("Nachher:", students)

// Replace one item => reserve slot and fill it later
// delete students[2] // deletes item, but KEEPS the space in the array
// students[2] = "New one"

// replace in ONE step
students.splice(3, 1, "Marvin")

console.log( students )

// insert new buddy
students.splice(3, 0, "Nathalie") // insert Nathalie AT index 3 => push every dude further


// delete ONE item starting from position 2
// students.splice(2, 1) // splice => splice off => aussplittern => delete
// delete TWO items starting from position 0
// students.splice(0, 2) // splice => splice off => aussplittern => delete
console.log( "Nachher: ", students )
// return

// add "Alexander Li"

// students[6] = "Alexander" // DONT DO THIS !
// students.push( "Alexander Li" )

// send an email to all these studs


// print all students
// !!! DONT DO THIS HERE EVER !!!
// console.log( students[0] )
// console.log( students[1] )
// console.log( students[2] )

// loop

const MAX_INDEX = students.length

for(let i=0; i< MAX_INDEX; i++ ) {
  // console.log( students[i] ) // grab student dynamically from array by index
  console.log("Sending email to " + students[i])
}
//-- 10 nested stuff
console.log('---10 nested stuff---');

  
// NESTED info
const students1 = [
    // "Alaa", "Hamideh" // flat ARRAY
    { name: "Alaa", hobbies: [ 'Coding', 'Procrastinating' ] }, // more info for each item!
    { name: "Rami", hobbies: [ 'Schwimmen', "Coding", "Fishing" ] }, // more info for each item!
  ]
  
  // console.log( students1 )
  
  // looping through nested array
  for(let i=0; i<students1.length; i++) {
    let student = students1[i]
    console.log( student.name )
  
    // loop for NESTED array (child array)
    for(let j=0; j< student.hobbies.length; j++ ) {
      console.log( "--", student.hobbies[j] )
    }
  }
  
  
  // const pizzas = [
  //   "Hawaii", "Funghi"
  // ]
  
  
  const pizzas = [
    { name: "Hawaii", price: 5.99, image: "http://images.com/hawaii" },
    { name: "Funghi", price: 6.99, image: "http://images.com/funghi" },
  ]
  //-- 11 nested numbers
console.log('---11 nested numbers---');
// NESTED loops with numbers
// for(let i=100; i<=1000; i = i + 100) {
//   console.log(i)
// }

const matrix = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ]
  
  // outer loop to access OUTER array
  for(let i=0; i<matrix.length; i++) {
  
    const arrChild = matrix[i] 
    // inner loop to access INNER array
    for(let j=0; j<arrChild.length; j++ ) {
      console.log( arrChild[j] )
    }
  }
  
  
  // for(let i=1; i<=2; i++) {
  //   console.log(i + "0")
  //   for(let j=1; j<=9; j++) {
  //     console.log(i+""+j)
  //   }
  // }
  //-- 12 palindrom
console.log('---12 palindrom---');
const word = "ôllô" // ollah => hallo = ollah = false

// console.log( hallo[0] ) // aha! a string is also just an array!

// loop over a string
for(let i=0; i<word.length; i++) {
  console.log(word[i])
}

// REVERSE a word => simply be reversing the string ARRAY
let reverse = "" // "o" => "ol" => "oll" => "olla" => "ollah"
// count DOWN loop
for(let i= word.length-1; i>=0; i--) {
  // console.log( word[i] )
  reverse += word[i]
}

console.log( word )
console.log( reverse )

// CHECK : ist string == reverse string ?

// handles palindrome 
if( word === reverse ) {
  console.log(`Heyyy, ${word} is a palindrome!`)
}
// handles NOT palindrome
else {
  console.log(`Naaaah, ${word} is not a fuck*** palindrome! Try again`)
}
//-- 13 Function
console.log('---13 Function---');
// FUNCTION DECLARION

sayMyFirstName() // => this will WORK => because JS pushes all functions (not in variables!) to the top before executing the file
// sayMyLastName() // => this will NOT WORK because Javascript does not know variable sayMyLastName at this point

// HOISTING => hoist => push all global functions to the TOP of the script 
// normal named function
function sayMyFirstName() {
  console.log( "Robert")
}

// arrpw function
const sayMyLastName = () => {
  console.log( "Ristock")  
}


sayMyLastName()
//-- 14 functions-return-vs-noreturn
console.log('---14 functions-return-vs-noreturn---');
const persons = [ 'Rob', 'Ahmed', 'Alaa' ]

// actually this for loop variant (with incrementing the i) is not needed that often!
// for(let i=0; i<persons.length; i++) {
//   console.log( persons[i] )
// }
// console.log()


const displayPeopleUppercases = () => {

  // nice alternative to for loop for looping through fu**** arrays!
  for( let person of persons ) {
    console.log( person.toUpperCase() )
  }
  // no return! 
  // => because we don't want any NEW info!
  // => just display EXISTING (already known) info!
}

displayPeopleUppercases()

// pleaee GIVE ME BACK all people uppercase!
// return => change stuff / update stuff, manipulate stuff, change format, NEW information
// return => always delivers us something we do not know YET ! / something new we dont have
const getPeopleUppercased = () => {

  const arrPersonsUc = []

  for( let person of persons ) {
    const personUc = person.toUpperCase()
    arrPersonsUc.push( personUc )
  }
  // return our NEW info
  return arrPersonsUc
}

const result2 = getPeopleUppercased() // whatever the function returns, will be stuffed into variable "result"

console.log( result2 )
//--15 scrope intro
console.log('---15 scrope intro---');
const persons3 = [ 'Rob', 'Ahmed', 'Alaa' ]


const getPeopleUppercased3 = () => {

  // nice alternative to for loop for looping through fu**** arrays!

  const arrPersonsUc = []

  for( let person of persons3 ) {
    const personUc = person.toUpperCase()
    arrPersonsUc.push( personUc )
  }
  // return our NEW info
  return arrPersonsUc

}

const result3 = getPeopleUppercased3() // whatever the function returns, will be stuffed into variable "result3"
console.log( result3 )

// THIS console log below would not work! Because arrPersonU is not visible here.
// It belongs to the function only! (kind of its "property")
// We call that the SCOPE of the function 
// console.log( arrPersonsU )  
//-- 16 scope
console.log('---16 scope---');
const a = "a"
const b = "b"

function child() {
  const c = "c"

  console.log(a)
  console.log(b)
  console.log(c)
}

// we will see: child gets ALL variables declared in parent right away!
// but all variables declared INSIDE child (like c) are just know to the child
// so "c" cannot get accessed by the parent!
// we say that "c" belongs to the "SCOPE" of the function
// And "c" does NOT belong to the scope of the parent!
child()
//-- 17 params
console.log('---17 params---');

// INPUT for new identity card
  // all info that comes from MEEEE as the client (=the caller of the function)
  const firstname1 = "Rob"
  const lastname1 = "Whatever"
  const familyname = "Whatever Elderly"
  const birthDate = "01.01.1871"
  const eyeColor = "bluegrey"
  const height = "181cm"
  
  // EXPECTED OUTPUT => identity card
  const id = "123345574271"
  const ausstellendesAmt = "Bezirksamt Neukölln"
  const expireDate = "01.01.2027" // date when this ID gets invalid 
  
  
  const getMyFreakinIdentityCardFromFuckingLazyAmtPeople = (
    firstName, lastName, birthDate, height, eyeColor,  
  ) => {
  
    // actions the amt does... (we are not super interested in all the details)
    // PRE-checks
  
    // Example internals:
    // calculate expire date today? => 03.03.2022 => expireDate = 03.03.2032
  
    // OUTPUT: identity card + all inpit field + ID, ausstellende behörde, expireDate
  
    // return all new info as ARRAY
    // const output = [
    //   firstName, lastName, birthDate, height, eyeColor,
    //   "1234567", "Bezirksamt Neukölln", "03.03.2032"
    // ]
  
    // return all new info as OBJECT
    const output = {
      firstName, lastName, birthDate, height, eyeColor,
      id: "1234567", behoerde: "Bezirksamt Neukölln", expireDate: "03.03.2032"
    }
  
    return output
  }
  
  
  // this is my input that fu*** amt wants to know! okay...
  
  const output = getMyFreakinIdentityCardFromFuckingLazyAmtPeople( 
    firstname1, lastname1, birthDate, height, eyeColor 
  )
  console.log( output )
  //-- 18 break
console.log('---18 break---');
for(let i=0; i<8; i++) {

    if(i == 5) {
      break;
    }
    console.log(i)
  }
  // IMPORTANT! 
  // Break does NOT break just the IF!
  // Break terminates the whole FOR LOOP! 
  //-- 19-find-item-case-insensitive.
console.log('---19-find-item-case-insensitive.---');

// const arrKeywords = [ "shit", "fuck", "fuck the corona", "corona", "bill gates" ]

// const strPostUser = " Bill gates invented corona and the vaccine passes, chips and so on"


const pizzas2 = [ "hawaii", "funghi", "salmone" ]

const searchPizza = ( search  ) => {
  for(let pizza of pizzas2) {
    if( pizza.toUpperCase() === search.toUpperCase() ) {
      return pizza
    }
  }

}

let found = searchPizza( "haWAii" )
console.log( found )
//-- 20-array-in-or-outside-function
console.log('---20-array-in-or-outside-function---');
// Where to put f*** array? in or outside function?


// OUTSIDE function => we wanna re-use the array in our program
// INSIDE function => the array JUST matters inside the function and nowhere else



const checkSpam = ( text ) => {
    const arrKeywords = ['shit', 'fuck you', 'bill gates', "fauci"]
  
    // check every keyword if it is in text
    for( let keyword of arrKeywords) {
      // does text contain any of these????
      if( text.includes( keyword ) ) {
        // flag as SPAM / SCAM whatever
        return true
      }
    }
    return false
  }
  console.log ( checkSpam("fauci invented the whole thing ") )
  //-- 21-capizalize-string
console.log('---21-capizalize-string---');
  
// capitalize => just make FIRST letter uppercase
// toUppercase => makes WHOLE WORD uppercase
const capitalize = ( strWord ) => {
    return strWord[0].toUpperCase() + strWord.slice(1) // when => w => W + hen => When 
  }
  
  // INPUT = when is all that stuff finally over
  // OUTUT = When Is All That Stuff Finally Over
  
  const strText = "when is all that stuff finally over"
  
  const arrWords = strText.split(" ")
  console.log( arrWords )
  
  let strTextNew = "" 
  for( let word of arrWords ) {
    // word = all
    let wordUc = capitalize( word ) // => All
    console.log(wordUc)
    strTextNew += wordUc + " " // "When " + "Is " + "All " => "When Is All That Stuff Finally Over"
  }
  console.log( strTextNew )
  
  // console.log( "Old word: ", strWord)
  // console.log( strWord[0], strWord[0].toUpperCase(),  )
  // console.log( "New word: ", strWord[0].toUpperCase() + strWord.slice(1) )
  // console.log( "New word: ", strWord.replace( strWord[0], strWord[0].toUpperCase() ))
//   return
  
  const strBigText = "when is all that stuff finally over"
  
  
  const capitalizeWords = ( text ) => {
  
    // expected output variable
    let capitalizedString = ""
  
  
    // logic
    // find all words => take first character => make it uppercase
  
    // output
    return capitalizedString
  }
  
  const result4 = capitalizeWords( "when is all that stuff finally over" )
  console.log( result4 )
  //-- 22-for-in-vs-of-vs-foreach
console.log('---22-for-in-vs-of-vs-foreach---');
const arrPizzas = ['hawaii', 'funghi', 'teriyaki']

// for .. in => loopt over INDEXES / KEYS of array
for(let index in arrPizzas) {
  console.log( index )
}

// for .. of => loopt over VALUES of array
for(let value of arrPizzas) {
  console.log( value )
}

// forEach => if we need BOTH, value & index 
arrPizzas.forEach( (value, index) => {
  console.log( index, value)
//   console.log(value, index)
})
//23-1 tests
console.log('---23-1 tests---');
console.log( 0 + 1 ) // two numbers? AHA! => add them => 1
console.log( "0" + 15 + 5 )  // one part of formula is a STRING? => JS concatenates stuff!
console.log( "0" + (15 + 5) )  // one part of formula is a STRING? => JS concatenates stuff!

// "0" + "1" = > will produce: "01"

const strNumber = "15"
const number = 15

console.log(  strNumber + number ) // => this produces => 1515
console.log( parseInt( strNumber ) + number ) // => this produces = 30

// trimming stuff

const str = "hallo "
console.log(str, str.length)
console.log(str.trim(), str.trim().length)

const strWikipediaArticle = 
"     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi odit libero consequuntur, pariatur ut facere temporibus adipisci perspiciatis soluta minima eius distinctio, dicta accusantium eos magnam fuga. Maxime, possimus."

console.log( strWikipediaArticle )
console.log( strWikipediaArticle.trim() )
console.log('------');
