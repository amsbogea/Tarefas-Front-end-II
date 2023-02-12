function categoria(idade) {
    if (idade >= 5 && idade <= 7) {
        return 'Este nadador possui ' +idade +' anos, portanto sua categoria é Infantil'
    } else if (idade >= 8 && idade <= 10) {
        return 'Este nadador possui ' +idade +' anos, portanto sua categoria é Juvenil - Nivel 1'
    }else if (idade >= 11 && idade <= 15) {
        return 'Este nadador possui ' +idade +' anos, portanto sua categoria é Juvenil - Nivel 2'
    }else if (idade >= 16 && idade <= 30){
        return 'Este nadador possui ' +idade +' anos, portanto sua categoria é Adulto'
    }else if (idade > 30) {
        return 'Este nadador possui ' +idade +' anos, portanto sua categoria é Sênior'
    }else
        return 'Crianças menores de 5 anos não competem.'
 }

 console.log(categoria(55))
