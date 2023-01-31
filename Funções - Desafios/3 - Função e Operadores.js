/**A - Crie uma função que receba dois números e retorne a soma dos mesmos.
 * 
B - Crie uma função que recebe dois números e retorne a multiplicação entre 
eles 

C - Crie uma função que receba dois números e retorne o módulo entre eles */

function Soma(n1, n2) {
    return n1 + n2
}

let resultado = Soma(3,4)
console.log("Soma " + resultado)

function multiplica(n3,n4) {
    return n3*n4
}

let produto = multiplica(5,6)
console.log("produto " + produto)

function mudulo(n7,n8) {
    return n7 % n8
}

let resto = mudulo(7,3)
console.log("Resto da divisão " + resto)