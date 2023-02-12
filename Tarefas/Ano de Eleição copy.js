function podeVotar(anoNascimento) {
    let idade = new Date().getFullYear() - anoNascimento;
    if (idade >= 16) {
      console.log(`Você tem ${idade} anos e já pode votar!`);
    } else {
      console.log(`Você ainda não tem 16 anos. Faltam ${16 - idade} ano(s) para você votar.`);
    }
  }
  
  podeVotar(2008);
  