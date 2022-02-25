console.log("-1-");
// if (true) {
// let myName = 'Elis'
//     myName= 'Zen'
//     alert(myName)
// }
console.log("-2-");
let fName = "Elis";
let lName = "Arsa";
let age = prompt("Gues Elis age...");
let result = ` ${fName} ${lName} is ${age} years old`;
alert(result);

console.log("--");

// MAP => wir wollen durch JEDES ITEM des Arrays loopen und jedes item UMWANDELN (=map)

// map & filter => fast immer genutzt bei ARRAYS of OBJECTS

const books = [
  { title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  { title: "Stolz und Vorteil", author: "Jane Austen" },
  { title: "Love & Devolution", author: "Erica James" },
];

console.log({ books });

// Map kann man nutzen, um Infos zu EXTRACTEN (also nur TEIL-Informaton)
const bookTitles = books.map((book) => {
  return book.title; // wir wollen von allen Objects NUR den Titel!
});

console.log(bookTitles);

// update title von JEDEM BUCH zu uppercase
const booksUpdated = books.map((book) => {
  // update the title => achtung => hier verändern wir das ORIGINAL object
  book.title = book.title.toUpperCase();
  return book; // map PUSHT (!) das returnte item in den booksUpdated array !
}); // ACHTUNG: wenn wir ein Object in map updaten, wird das ORIGINAL verändert!

console.log({ booksUpdated });
console.log("--");
const books1 = [
  { title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  { title: "Stolz und Vorteil", author: "Jane Austen" },
  { title: "Anna", author: "Jane Austen" },
  { title: "Jane Austen Self Biography", author: "Jane Austen" },
  { title: "Love & Devolution", author: "Erica James" },
];

// FILTER
// => durchloopt einen Array und sucht Items nach einem bestimmten Kriterium
// => alle Items, die auf das Kriterium passen => pushe sie in einen Array

const booksJaneAusten = books1.filter((book) => {
  return book.author === "Jane Austen"; // true / false
});

console.log(books1);
console.log(booksJaneAusten);

// FILTER by partial term somewhere in the word (we dont know the exact position!)
const booksAusten = books1.filter((book) => {
  // includes helps to find something in a string (position does not matter
  return book.author.includes("Austen"); // true / false
});

console.log(books1);
console.log(booksAusten);
console.log("--");
const books2 = [
  { title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  { title: "Die Verwandlung", author: "Kafka" },
  { title: "Stolz und Vorteil", author: "Jane Austen" },
  { title: "Anna", author: "Jane Austen" },
  { title: "Jane Austen Self Biography", author: "Jane Austen" },
  { title: "Love & Devolution", author: "Erica James" },
];

// Search Function by autor
const searchBooksByAuthor = (author) => {
  // loop through all books2
  const booksSearched = books2.filter((book) => {
    // if book includes the given author => return true (=> push into new array)
    return book.author.includes(author); // true / false
  });

  // return the array with all books2 which were filtered out
  return booksSearched;
};

// search by author
console.log(searchBooksByAuthor("Kafka"));
console.log(searchBooksByAuthor("Austen"));
console.log("--");
// mit freundlichem Sponsoring von Marvin Luther King
function isPrime(zahl) {
  for (let i = 2; i < zahl; i++) {
    if (zahl % i === 0) {
      return false;
    }
  }
  return true;
}

// filtere prime numbers aus array

// first create an empty arra
const numbers = [];

// count from 1 to 100
// and push each number into the array
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
  // prime number => a number which can only be divided by 1 or itself
}

console.log(numbers);

// filter out prime numbers by using filter
const primeNumbers = numbers.filter((number) => {
  // for each check it is a prime using marvins function
  return isPrime(number); // true / false
});

console.log(primeNumbers);
console.log("--");

// **7. Wörterbuch.**
// Erstellen Sie eine Funktion, die eine Zeichenkette und ein Array mit Wörtern annimmt und ein gefiltertes Array
// mit den Wörtern zurückgibt, die mit denselben Buchstaben beginnen wie die Zeichenkette.
// Anmerkungen:
// * Wenn keines der Wörter übereinstimmt, wird ein leeres Array zurückgegeben.
// * Behalten Sie das gefilterte Array in der gleichen relativen Reihenfolge wie das ursprüngliche Array der Wörter.
// Beispiele:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

// EXPECTED RESULT
const searchWordsInWordsArray = (arrWords, strSearchWordBegin) => {
  const arrWordsSearch = arrWords.filter((word) => {
    return word.startsWith(strSearchWordBegin);
    // return word.indexOf( strSearchWordBegin ) != -1 // also possible! but more complicated
  });

  return arrWordsSearch;
};

// item ist teil von anderem item => includes, startsWith, endsWidth, indexOf
// search & match => regular expression => braucht man z.B. für GÜLTIGKEIT (VALID FORMAT) => PLZ, Phone, Email, Passwort

const arrWords = [
  "hallo",
  "du",
  "netter",
  "nett",
  "netto",
  "brutto",
  "steueroase",
  "steuerhinterziehung",
  "mensch",
];
const strSearchWordBegin = "nett";

// CALL der Function
const arrWordsSearch = searchWordsInWordsArray(arrWords, strSearchWordBegin);
console.log(arrWordsSearch);

// SORTIEREN
console.log(arrWordsSearch.sort());

// BEISPIEL

// INPUT: [ "hallo", "du", "netter", "nett", "netto", "brutto", "steueroase" "mensch" ], "nett"
// OUTUT: [ "netter", "nett" ] // => FILTER

// products.filter( ( product ) => {

// })

// books2.filter( (book) => {

// })

// blogPosts.filter( (blogPost) => {

// })
console.log("--");
console.log("--");
console.log("--");
console.log("--");
