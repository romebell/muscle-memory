// 5 variables of different data types
// string
// number
// array
// boolean
// object (4 different key/value pairs) [string], [number], [array], [boolean]

let sentence = 'Today, it is Friday!';
console.log(sentence);

let name = 'Rome';

let age = 32;
console.log(age);

const motorcycles = ['Kawasaki', 'Yamaha', 'Suzuski'];
console.log(motorcycles);

let doesThisWork = true;
console.log(doesThisWork);

const lakers = {
    headquarters: 'Los Angeles',
    numberOfPlayers: 11,
    players: ['LBJ', 'Anthony Davis', 'Danny Green'],
    areChampions: true
}

console.log(lakers);

// make 10 different functions
// one of your function need to pass in an array
// one of your functions need to pass in a callback
// .... string
// .... object
// ... boolean
// ... freestyle

// TEST YOUR CODE!!!

function displayCoolBikes(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let bike = array[i];

        if (bike.length > 7) {
            result.push(bike);
        }
    }

    return result;
}

// console.log(displayCoolBikes(motorcycles));

function removeFromArray(callback, array) {
    let result = callback(array)[0];
    console.log(result);
}

removeFromArray(displayCoolBikes, motorcycles);

function printSentence(string) {
    console.log(string);
}

printSentence(sentence);
printSentence(name);

function printPlayers(object) {
    console.log(object.players);
}

printPlayers(lakers);

function printEachPlayer(object) {
    object.players.forEach(eachPlayer => {
        console.log(eachPlayer);
    });
}

printEachPlayer(lakers);

function doesThisReallyWork(boolean) {
    if (boolean) {
        console.log('this works');
    } else {
        console.log('This does not work');
    }
}

doesThisReallyWork(doesThisWork);

const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);
const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);
const sectionFour = document.querySelector('#section-four');
const sectionFive = document.querySelector('#section-five');
console.log(sectionFour);
console.log(sectionFive);

sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Warriors';
sectionThree.textContent = 'Celtics';
sectionFour.textContent = 'Nets';
sectionFive.textContent = 'Blazers';

const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);
paraOne.textContent = 'Lebron James';

const paraTwo = document.querySelector('.paragraph-two');
console.log(paraTwo);
paraTwo.textContent = 'Steph Curry';

const paraThree = document.querySelector('.paragraph-three');
console.log(paraThree);
paraThree.textContent = 'Kemba Walker';

const paraFour = document.querySelector('.paragraph-four');
console.log(paraFour);
paraFour.textContent = 'Kyrie Irving';

const paraFive = document.querySelector('.paragraph-five');
console.log(paraFive);
paraFive.textContent = 'Damien Lillard';

const containerSix = document.createElement('div');
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement('h2');
sectionSix.setAttribute('id', 'section-six');
sectionSix.textContent = 'Rockets';
console.log(sectionSix);

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
paraSix.textContent = 'James Harden';
console.log(paraSix);

const body = document.querySelector('body');
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

// create another container
const containerSeven = document.createElement('div');
// add class
containerSeven.classList.add('container-seven');
console.log(containerSeven);    

// create another section
const sectionSeven = document.createElement('h2');
// add an id
sectionSeven.setAttribute('id', 'section-seven');
// add textContent
sectionSeven.textContent = 'Bucks';
console.log(sectionSeven);

// create another paragraph
const paraSeven = document.createElement('p');
// add a class
paraSeven.classList.add('paragraph-seven');
// add textContent
paraSeven.textContent = 'Giannis Antetokounmpo';
console.log(paraSeven);

body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);



// append the container to the body
// append section to the container
// append the paragraph to the container


// PUSH TO GITHUB
// IN THE THREAD PASTE YOUR LINK