// FUNCTIONS

/**
 * Imprime un mensaje en la consola.
 * @param {*} toPrint 
 * @returns {void}
 */
const consolePrint = toPrint => console.log(toPrint);

/**
 * Calcula el discriminante de un polinomio cuadrático.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */
const discriminante = (a, b, c) => (b ** 2) - (4 * a * c);

/**
 * Calcula las raíces complejas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático.
 * @returns {string}
 */
function complexRoots(a, b, disc) {
    let firstTerm = -b / (2 * a);
    let secondTerm = ((-disc) ** 0.5) / (2 * a);
    let result = "x1 = " + firstTerm + " + " + secondTerm + "i ; x2 = " + firstTerm + " - " + secondTerm + "i";
    if (firstTerm === 0) { // Mejora la presentación del resultado
        result = "x1 = " + secondTerm + "i ; x2 = " + " - " + secondTerm + "i";
    }
    return result
}

/**
 * Calcula las raíces reales repetidas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @returns {string}
 */
function realRepeatedRoots(a, b) {
    let root = -b / (2 * a);
    return "x1 = " + root + " ; x2 = " + root;
}

/**
 * Calcula las raíces reales distintas de un polinomio cuadrático.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} disc - Discriminante del polinomio cuadrático.
 * @returns {string}
 */
function realDistinctRoots(a, b, disc) {
    let x1 = (-b + disc ** 0.5) / (2 * a);
    let x2 = (-b - disc ** 0.5) / (2 * a);
    return "x1 = " + x1 + " ; x2 = " + x2;
}

/**
 * Determina el tipo de raíces de un polinomio cuadrático y las calcula.
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} c - Constante c del polinomio cuadrático.
 * @returns {string}
 */
function resolvente(a, b, c) {
    let message = "";
    let disc = discriminante(a, b, c);
    if (disc < 0) {
        message = "Raíces complejas: " + complexRoots(a, b, disc);
    } else if (disc === 0) {
        message = "Raices reales repetidas: " + realRepeatedRoots(a, b);
    } else {
        message = "Raices reales distintas: " + realDistinctRoots(a, b, disc);
    }
    return message;
}


// EXECUTION

let numberA = parseInt(prompt("Ingrese la constante 'a'"));
let numberB = parseInt(prompt("Ingrese la constante 'b'"));
let numberC = parseInt(prompt("Ingrese la constante 'c'"));
// let number = prompt("Ingrese un número")

consolePrint(resolvente(numberA, numberB, numberC));

// consolePrint(number)