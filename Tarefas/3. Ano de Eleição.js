function pode_votar(ano_nascimento) {
    let idade = new Date().getFullYear() - ano_nascimento
    if (idade >= 16) {
        console.log('você poderá votar este ano');
    } else {
        console.log('você não poderá votar este ano');
    }
}
pode_votar(2008);