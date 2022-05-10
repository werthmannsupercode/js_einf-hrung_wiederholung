// lev1_3

let i = 1;
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof (i));
console.log(typeof (lastName));
console.log(typeof (j));
console.log(typeof (status));
console.log(typeof (hello));
console.log(typeof (helloWorld));

// lev1_4

let a = "John";
let b = 3.14;
let h = NaN;
let c = false;
let d = [1, 2, 3, 4];
let e = { name: 'John', age: 34 };
new Date()
// function () { }
let f = null;
let g = "";
3 + 2 == 5
3 + "3"

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));
console.log(typeof (f));
console.log(typeof (g));
console.log(typeof (h));
console.log(typeof (3 + 2 == 5));
console.log(typeof (3 + "3"));

// lev1_8 

let x = 20;
let y = 30;
let z = 10;

console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let resultOne = x * y - z;
console.log(resultOne);

let m = 15;
let n = 9;
console.log(m % n);

let o = 20;
let resultTwo = (m + n) * o;

console.log(resultTwo);

console.log(++m);
console.log(--n);

let resultThree = m - n
console.log(resultThree);

console.log(resultOne % resultTwo);

// lev1_14

// 100
// 3.14
// -15
// "hello"
// "false"
// 1 + 7 + 3.14
// 0
// -0
// NaN 
// null
// false

console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

// lev1_15

let num = 5;
let anotherNum = 8;

// ==
// >
// <
// >=
// <=

console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);

// == "5"
// != 8
// != "5"

console.log(num == "5");
console.log(num != 8);
console.log(num != "5");

// lev2_1
let navHome = document.getElementById("navHome");

function changeHome() {
    navHome.style.backgroundColor = "tomato";
}

// lev2_2

let vorName = document.getElementById("vorname");
let nachName = document.getElementById("nachname");
let country = document.getElementById("land");

function showValues() {
    console.log(vorName.value);
    console.log(nachName.value);
    console.log(country.value);
}

// lev2_10

let element = document.getElementById("element");

function makeSmall() {
    element.classList.add("small");
    element.classList.remove("middle");
    element.classList.remove("big");
}

function makeMiddle() {
    element.classList.remove("small");
    element.classList.add("middle");
    element.classList.remove("big");
}

function magBig() {
    element.classList.remove("small");
    element.classList.remove("middle");
    element.classList.add("big");
}

// lev2_11 

let background = document.getElementById("hintergrund");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    background.style.backgroundColor = getRandomColor();
}
