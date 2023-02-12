function compraMaca(quantidade) {
    if (quantidade < 12) {
        maca = 0.30
        return (maca * quantidade)
    } else {
        maca = 0.25
        return (maca * quantidade)
    }
}
console.log("Valor total da compras de maçãs é " + compraMaca(11) + ' reais')