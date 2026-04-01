/*
1.2 Cálculo de total de compras com decimais

Dificuldade: ⭐
Conceitos: números inteiros, decimais, operações *, -, toFixed.
Explicação:

    Números com ponto são decimais.

    toFixed(2) arredonda para duas casas decimais e retorna uma string.

Tarefa:
Simule uma compra:

    precoUnitario = 49.90

    quantidade = 3

    Calcule subtotal = precoUnitario * quantidade

    Calcule desconto = subtotal * 0.1 (10% de desconto)

    Calcule total = subtotal - desconto

    Exiba o total com duas casas decimais, precedido de "Total: R$ ".
*/

let precounitario = 49.90;
let quantidade = 3;

let subtotal = precounitario * quantidade;

let desconto = subtotal * 0.1;

let total = 0;
total = subtotal - desconto;


console.log(`Total: R$`, total.toFixed(2)); //to fixed corre as  casas decimais 0 nenhuma, 2 vai ser 2 depois da , 135,xx 
