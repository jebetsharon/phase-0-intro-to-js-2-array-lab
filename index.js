let cats = ['Milo', 'Otis', 'Garfield'];

// Destructive Methods
function destructivelyAppendCat(name) {
  cats.push(name); // Mutates the original `cats` array
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // Mutates the original `cats` array
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Mutates the original `cats` array
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Mutates the original `cats` array
}

// Nondestructive Methods
function appendCat(name) {
  return [...cats, name]; // Returns a new array without mutating `cats`
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array without mutating `cats`
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1); // Returns a new array without mutating `cats`
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without mutating `cats`
}
