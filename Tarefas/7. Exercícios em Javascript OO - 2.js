/*
Crie uma classe que tenha no mínimo 2 atributos 
e crie pelo menos 1 comportamento (método/função) 
que faça algo com esses atributos, 
retornar eles em um console ou fazer algo que vocês queiram.

Criatividade conta! 
*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        return this.nome = nome;
    }

    setIdade(idade){
        return this.idade =idade;
    }
}

const Pessoa1 = new Pessoa("Alex", 36);
console.log(Pessoa1.getNome());
console.log(Pessoa1.getIdade())

Pessoa1.setNome("Alisson");
Pessoa1.setIdade(14)
console.log(Pessoa1.getNome());
console.log(Pessoa1.getIdade());