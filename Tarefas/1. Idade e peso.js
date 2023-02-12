//Faça um programa que receba a idade e o peso de uma pessoa. De acordo com a tabela a seguir, 
//verifique e mostre em qual grupo de risco essa pessoa se encaixa.


//IDADE	ATÉ                     60KG	        ENTRE 60 E 90KG	    ACIMA DE 90KG
//Menores que 20 anos	         9	                8	                7
//De 20 a 50 anos	             6	                5	                4
//Maiores  que 50 anos	         3	                2	                1
//-----------------------------------------------------------------------------------------------------

idade = 19
peso = 60

if (idade < 20 && peso <= 60)
    console.log(9)

else if (idade > 20 && idade < 51 && peso <= 60)
    console.log(6)

else if (idade > 50 && peso <= 60)
    console.log(3)

else if (idade < 20 && peso >= 60 && peso <= 90)
    console.log(8)

else if (idade > 20 && idade < 51 && peso >= 60 && peso <= 90)
    console.log(5)

else if (idade > 50 && peso >= 60 && peso <= 90)
    console.log(2)

else if (idade < 20 && peso > 90)
    console.log(7)

else if (idade > 20 && idade < 51 && peso > 90)
    console.log(4)

else if (idade > 50 && peso > 90)
    console.log(1)