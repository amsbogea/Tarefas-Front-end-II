//Crie uma função que retorne o maior número de uma lista de números
function getMaxNumber (numbers) {
    return Math.max(...numbers)
}

const numbers = [0,2,3,4,5,6,7,8,9]
console.log(getMaxNumber(numbers))