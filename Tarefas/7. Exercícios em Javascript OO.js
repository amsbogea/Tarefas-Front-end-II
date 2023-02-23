/*
Crie uma classe que tenha no mínimo 2 atributos 
e crie pelo menos 1 comportamento (método/função) 
que faça algo com esses atributos, 
retornar eles em um console ou fazer algo que vocês queiram.

Criatividade conta! 
*/

class Lampada {

    #acesa


    constructor() {
        this.#acesa = false;
    }

    acende(){
        this.#acesa = true;
    }

    apaga(){
        this.#acesa = false;
    }

    get acesa(){
        return this.#acesa;
    }
}

const minhaLampada = new Lampada();
console.log(minhaLampada.acesa); //false

minhaLampada.acende();
console.log(minhaLampada.acesa); //true

minhaLampada.apaga();
console.log(minhaLampada.acesa); //false