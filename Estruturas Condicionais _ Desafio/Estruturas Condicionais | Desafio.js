/**Calculadora
* 
    Usando todo o nosso aprendizado até aqui crie uma função chamada 
    calculadora.
    1.
    Essa função recebe os seguintes parâmetros numero1, numero2 e 
    operacao; 
    2.
    Dentro da função deve existir a seguintes condições3.
    operacao === soma
    operacao === subtracao
    operacao === divisao
    operacao === multiplicacao
    Logo em seguida cada condição deve tratar sua operação, exemplo:4.
    SE operacao === soma ENTÃO numero 1 + numero 2 5.
    Esse valor deve ser retornado da função, além disso deve existir uma 
    trativa para quando a operação não corresponder a nenhuma das 
    condições acima!
 */

function calculadora(numero1, numero2, operacao) {
    if (operacao === "soma") {
        return numero1 + numero2
    } else if (operacao === "subtracao") {
        return numero1 - numero2
    } else if (operacao === "multiplicacao") {
        return numero1 * numero2
    } else if (operacao === "divisao") {
        return numero1 / numero2
    } else
        return "operação inválida"
}

let resultado = calculadora(20, 10, "")
console.log(resultado)