//Crie uma lista de frutas e coloque o nome de quantas frutas 
//quiser, depois use um dos métodos ensinados na aula para mostrar 
//no console a lista, seja o método filter para filtrar frutas 
//específicas, método find, para buscar uma fruta ou o método map;

const frutas = ["abacaxi", "caqui", "damasco","figo","goiaba", "jaca", "laranja", "mamão"]

console.log("============================ usando o filter ============================")
console.log(frutas.filter(fruta => fruta[1] == "a"));

console.log("============================ usando o find ============================")
console.log(frutas.find(fruta => fruta[1] == "a"));

console.log("============================ usando o map ============================")
console.log(frutas.map(fruta => fruta.toUpperCase()));