const animals = ['🐱', '🐶', '🦁', '🦊', '🐯'];
const cars = ['🚗', '🚙', '🏎', '🚕', '🚓'];
const sports = ['⚽️', '🏀', '🏈', '🏐', '🎾', '🏉'];
const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];
const differentArray = [1, 'two', '3', 4, 'five', 6, '7', 'eight', 9, '10'];
const twoDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const randomEmojis = ['🥸','🤙','👻','👺','💩'];
const eliteCoders = ['Rome','Janeth','Sebastian','Daniel','Ariel','Dave','Jesse','Cody','Tyler'];
const theDevLeague = ['Paula','Brandon','Aaron','Thomas','Brianna','Paul','Maurice','Evan','Amanda'];
const mechaPodzilla = ['Joshua','Joseph','Shawn','Christopher','Jason','Avery','Tibor','Charlene','Stephen'];
const reallyCoolPodName = ['Brian','Jordan','Anthony','Vinny','Edison','Edward','Jeremy','Omar'];
const podTeams = [eliteCoders, theDevLeague, mechaPodzilla, reallyCoolPodName];

const favoriteArtistList = [['Eminem'], ['Post Malone'], ['Foo Fighters'], ['Metallica']];
const favoriteSportsList = [['Basketball'],['Volley Ball'],['Bowling'],['Water Polo']];
const favoriteGamesList = [['Path of Exile'],['League of Legends'],['Apex'],['Rocket League']];

console.log(favoriteGamesList);

favoriteArtistList.forEach((artist) => {
    artist.forEach((data) => {
        console.log(data);
    });
});


// example of using length
for (let i = 0; i < teams.length; i++) {
    // steps/process/algorithm (steps)
    let teamElement = teams[i]; // Nets
    // console.log(teamElement + ' Stadium'); // 3 Nets
    console.log(`${i} ${teamElement} Stadium`); // template literal
}
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let addTwo = num + 2;
    console.log(addTwo);
}
// TODO: 3 examples of using a for loop with arrays

for (let i = 0; i < favoriteSportsList.length; i++) {
    let num = favoriteSportsList[i];
    let addTeam = "Varsity " + num ;
    console.log(addTeam);
}

for (let i = 0; i < favoriteGamesList.length; i++) {
    let num = favoriteGamesList[i];
    let addRanked = num + " ranked";
    console.log(addRanked);
}

for (let i = 0; i < favoriteArtistList.length; i++) {
    let num = favoriteArtistList[i];
    let addSinger = "Singer " + num;
    console.log(addSinger);
}

// TODO: Make a push to Github after testing in browser

// Methods

//concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()


let animalLength = animals.length;
console.log(animalLength);
// 5
const carsAndProfessionals = cars.concat(professionals);
console.log(carsAndProfessionals);
// ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(theDevLeague.indexOf('Brianna Giorgi'))
// 6
console.log(theDevLeague);
// ["Paula Bauerman", "Brandon Hall", "Thomas Duong", "Paul Knick", "Evan Woodworth", "Aaron Prince", "Brianna Giorgi", "Maurice Chevez", "Amanda Posey"]0: "Paula Bauerman"1: "Brandon Hall"2: "Thomas Duong"3: "Paul Knick"4: "Evan Woodworth"5: "Aaron Prince"6: "Brianna Giorgi"7: "Maurice Chevez"8: "Amanda Posey"length: 9__proto__: Array(0)
console.log(theDevLeague[6]);
// "Brianna Giorgi"
console.log(theDevLeague.indexOf('brianna giorgi'));
// -1
console.log(professionals.pop());
// "👨🏼‍⚖️"
console.log(professionals);
//  ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾"]
console.log(professionals.push('👨🏼‍⚖️'));
// 4
console.log(professionals);
// ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(cars.includes('Rome'));
// false
console.log(cars.includes('🚓'));
// true
console.log(numbers);
//  [1, 66, 48, 9, 23, 19, 20, 66, 30]
console.log(numbers.toString());
// "1,66,48,9,23,19,20,66,30"
let stringOfNumbers = numbers.toString();
console.log(stringOfNumbers);
"1,66,48,9,23,19,20,66,30"
console.log(stringOfNumbers.split(','));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]
let moreStrings = "1-66-48-9-23-19-20-66-30";
console.log(moreStrings.split('-'));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]