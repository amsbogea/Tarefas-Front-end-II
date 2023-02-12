function retonaVogais(str) {
    let vogais = ['a','e','i','o','u'];
    let resultado = [];

    for (let index = 0; index < str.length; index++) {
        if (vogais.includes(str[index].toLowerCase())){
            resultado.push(str[index])
        }
    }

    return resultado
}
console.log(retonaVogais('alex'))

