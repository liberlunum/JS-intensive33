// Function Declaration (FD)
function makeCounter1() {
   return 1+2;
}

// Function Expression (FE)
const makeCounter2 = function () {
    return 2+3;
}

//Named FE
const makeCounter3 = function otherCounter () {
    return 3+5;
}

const makeCounter4 = () => 2+5; //Arrow Function


const num = [1, 2, 3, 4, 5];
function makeCounter5 (num) {
    return num.reduce((a, b)=> a+b, 0); // <- Anonymous Function
}

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function makeCounter6 (num) {
    const counter = (elem) => elem % 2 === 0; // <- Callback Function
    return num.filter(counter); // <- Higher-Order Function
}

// Immediately Invoked FE (IIFE)
(function () {
    return 1+5;
})();

// Constructor Function
function MakeCounter7() {
    this.a = 3;
    this.b = 3;
    this.makeCounter = this.a + this.b;
}
const counter7 = new MakeCounter7();
