function retornarVogais(str) {
    let vogais = ['a','e','i','o','u'];
    let vogaisEncontradas = [];


    for (let index = 0; index < str.length; index ++); {
        let letra = str[index].toLowerCase();
        if (vogais.includes(letra)) {
            vogaisEncontradas += letra;
        }        
    }
    return vogaisEncontradas;
}
console.log(retornarVogais("string"));