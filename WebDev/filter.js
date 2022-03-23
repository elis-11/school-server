// https://www.youtube.com/watch?v=sfIMbe4RLug&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=6
// https://www.youtube.com/watch?v=Y5YlT0Q1v28&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=2
console.log("----FILTER----");
const lists = ["Hydrogen", "Helium", "Lithium", "Beryllium", 4, 7, 8, 1];
const filterLists1 = lists.filter((list, index) => {
  if (list % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterLists1);
const filterLists2 = lists.filter((list, index) => {
  if (list % 11 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterLists2);
const filterLists3 = lists.filter((list, index) => {
  if (list % 27 == 0) {
    return true;
  }
});
console.log(filterLists3);
const filterLists = lists.filter((list, index) => {
  return list > 0;
});
console.log(filterLists);
const filterLists4 = lists.filter((list, index) => {
  if (list > 0) return true;
});
console.log(filterLists4);
const filterLists5 = lists.filter((list, index) => {
  return typeof list === "string";
});
console.log(filterLists5);
const filterLists6 = lists.filter((list, index) => {
  return typeof list === "number";
});
console.log(filterLists6);
console.log("-----FILTER-----");
const massivs = [3, 5, 38, -6, 4, -3, 6, 55, -74, 9];
const newMassivs = massivs.filter((massiv) => {
  if (massiv > 7) return true;
});
console.log(massivs);
console.log(newMassivs);
const newMassivs1 = massivs.filter((massiv) => {
  if (massiv > -6) return true;
});
console.log(newMassivs1);
console.log("-----index-----");
const newMassivs2 = massivs.filter((massiv, index) => {
  return index;
});
console.log(newMassivs2);
const newMassivs3 = massivs.filter((massiv) => {});
console.log(newMassivs3);
const newMassivs4 = massivs.filter((massiv) => {});
console.log(newMassivs4);
console.log("-----FILTER-collectors-----");
const clients = [
  { iin: "etrw", user: "Igor", debt: 14 },
  { iin: "hjfjg", user: "Miki", debt: 649 },
  { iin: "tzizizu", user: "Laila", debt: 0 },
  { iin: "ztiuz", user: "Maly", debt: 47 },
  { iin: "hgfg", user: "Luis", debt: 0 },
];

const dolgs = clients.filter((client) => client.debt >= 10);
console.log(dolgs);
const dolgs1 = clients
  .filter((client) => client.debt >= 10)
  .sort((a, b) => b.debt - a.debt);
console.log(dolgs1);
const dolgs2 = clients
  .filter((client) => client.debt >= 10)
  .sort((a, b) => a.debt - b.debt);
console.log(dolgs2);
console.log('-----filter Rob------');
const words = [ "Jack", "Yamen", "Michael", "Alaa" ] // Jack, Alaa
const searchWord= (strSearch) =>{
  const wordsFiltered=words.filter((word) =>{
    return word.includes(strSearch)
  })
  return wordsFiltered
}
console.log(searchWord('e'));
console.log('----- CRUD - CREATE - READ - UPDATE - DELETE-------');
const books = [
  {  _id: "b1", title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  _id: "b2", title: "Stolz und Vorurteil", author: "Jane Austen" },
  {  _id: "b3", title: "Emma", author: "Jane Austen" },
  {  _id: "b4", title: "Love & Devolution", author: "Erica James" },
]
console.log(books);
console.log({books});
console.log('----- CRUD - CREATE - READ - UPDATE - DELETE-------');

// Add NEW BOOK OBJECT at end of array
const addBook=(books, bookNew)=>{
  const booksCopy=[...books]   // sozdali copiy
  booksCopy.push(bookNew)      // added bookNew
return booksCopy               // pokasat' sozdannuy copiy
}
//Delete a book from array
const deleteBook=(strId)=>{
  //Delete OBJECTS in  array using FILTER
  const booksFiltered=books.filter((book)=>{
return book._id !== strId
  })
return booksFiltered
}
const updateBook=()=>{
}
// Testing our CRUD
console.log('----booksNew-----');
const bookNew={title: 'New Book', author: 'John Smith'}
const booksNew = addBook(books, bookNew)
console.log({booksNew});
console.log('----booksFiltered-----');
const booksFiltered=deleteBook('b2')
console.log({booksFiltered});

console.log('---------');
const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]
console.log(wochentage);
const numWochentage=wochentage.length
const randomIndex= Math.floor( Math.random() * numWochentage  )
const wochentag= wochentage[ randomIndex]
console.log({wochentag});
if(wochentag==='So'){
  console.log( "Heute ist Sonntag. Küche putzen oder Geld weg!" );
}else if(wochentag==='Mo'){
  console.log("Heute ist Marwyn mit Bad dran!")
}else if(wochentag==='Di'){
  console.log("Nathalie muss den Flur saugen!")
}else{
  console.log( "Glück gehabt! Du bist noch nicht dran mit Putzen" )
}
console.log();
console.log('---------');
const wochentage2 = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]
const numWochentage2=wochentage2.length
const randomIndex2 = Math.floor( Math.random() * numWochentage2  )
console.log({randomIndex2});
// console.log(wochentage[randomIndex2]);

console.log(wochentage2[0]);
console.log(wochentage2[1]);
console.log(wochentage2[2]);
console.log(wochentage2[3]);
console.log(wochentage2[4]);
console.log(wochentage2[5]);
console.log(wochentage2[6]);
console.log('-------kueche-------');
const kueche = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}
const kuecheCopy= {...kueche}
kuecheCopy.ofen = 'Orlando'
console.log({kueche});
console.log(kuecheCopy);

const kitchen = [ 'Ofen', 'Spuelmaschine', 'Kuehlschrank' ]
const kitchenCopy=[...kitchen]
console.log({kitchenCopy});
console.log({kitchen});
console.log('--------------');
const kueche2 = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}
let { ofen, spuelmaschine } = kueche

ofen = "Neues Ofen-Modell"

kueche.mikrowelle = "Mikro MX 1000"

console.log( kueche2)


console.log('----------kueche3-----');
const kueche3 = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}

// ALLOW USER to insert new key value data 
const addItemToKueche = (key, value) => {
  kueche3[key] = value // => kueche3.mikrowwelle = value
}

addItemToKueche("mikrowelle", "Mikro MX 1000" )
addItemToKueche("wasserkocher", "Kochi K2")


// HARDCODED => mikrowelle, wasserkocher
// NACHTEIL => wir, die Coder, müssen wissen, was ins Object soll
kueche3.mikrowelle = "Mikro MX 1000"
kueche3.wasserkocher = "Kochi K2"
console.log(kueche3);