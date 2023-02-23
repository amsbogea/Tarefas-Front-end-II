/*
Crie uma classe que tenha no mínimo 2 atributos 
e crie pelo menos 1 comportamento (método/função) 
que faça algo com esses atributos, 
retornar eles em um console ou fazer algo que vocês queiram.

Criatividade conta! 
*/

class Cachorro {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        return this.nome = nome;
    }

    getRaca(){
        return this.raca;
    }

    setRaca(raca){
        return this.raca = raca;
    }
}

const cachorro1 = new Cachorro("Farofa", "Pincher");
console.log(cachorro1.getNome() + ", " + cachorro1.getRaca());
console.log("===================================================")


cachorro1.setNome("Faísca");
cachorro1.setRaca("Labrador");
console.log(cachorro1.getNome() + ", " + cachorro1.getRaca());