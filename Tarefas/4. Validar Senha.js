function validaSenha (senha){
    if (senha === 1234){
        return ("ACESSO PERMITIDO")
    }else {
        return ("ACESSO NEGADO")
    }
}
console.log(validaSenha(12345));