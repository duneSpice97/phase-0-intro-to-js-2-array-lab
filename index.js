// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let copyCats = cats.slice();
    copyCats.push("Broom");
    return copyCats;
}

function prependCat(name) {
    let copyCats = cats.slice();
    copyCats.unshift("Arnold");
    return copyCats;
}

function removeLastCat() {
    let copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    let copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}

 