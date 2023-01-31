/**
 * A - Crie uma função que receba uma string como parâmetro e retorne o 
mesmo parâmetro mas do tipo numérico. 
===================================================================================================
 */

function string_para_numero(str) {
    return Number(str)
}

let str = "123"
let num = string_para_numero(str)
console.log(typeof num)
 
/*=================================================================================================
 * B - Crie uma função que receba a seguinte lista como parâmetro: 
        [“Júlia”, “Anna”, “Pedro”, “Rafael”, “Paula”] 
 Essa função deve retornar a mesma lista porém com um filter que só 
retorne os nomes que começam com a letra “P”
==================================================================================================
 */
let minha_lista = ["Júlia", "Anna", "Pedro", "Rafael", "Paula"];

function filtraNomesComP(lista) {
  return lista.filter(nome => nome.startsWith("P"));
}

let nomes_filtrados = filtraNomesComP(minha_lista);
console.log(nomes_filtrados); // saída: ["Pedro", "Paula"]

