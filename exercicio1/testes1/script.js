

/*const n = 9
const texto = `esse n é ${n}`

console.log(texto) */



/* const num =  200 - 100 + 232 / 2 * 123 - 22 + 121323
const texto = `O num é ${num}:` 

console.log(texto) */

/* const array = [10,24,32,232]
console.log(array[0]) */



/*
const users =[
 {
    name: "Jackson",
    idade: 30,
    estadocivil: false,
    conjuge: null,
},
{ 
    name: "adriana",
    idade: 27,
    estadocivil: true,
    conjuge: "chris" 

}
];
 users.forEach(usuario => {
    

if(usuario.estadocivil === true)
    console.log(usuario.conjuge);
else
    console.log(usuario);

console.log(users) 

 }); */ 

 /*
 const tamanhocidade = 310.000
 if(tamanhocidade >= 300.000)
    console.log("Cidade Grande")
else if(tamomhocidade => 200.000)
    console.log("cidade média")
else
    console.log("cidade pequena")
*/


/*
function cordoceu (tempo) { 
if (tempo === "noite") {
    console.log(`ceu preto`)
}
if(tempo === "tarde"){
    console.log(`ceu azul`)
}
if(tempo === "manha") {
 console.log("ceu azul")
}
}

cordoceu("noite") 


function definirCorDoCeu(hora) {
    return (hora >= 6 && hora <= 7) ? "Laranja" :
           (hora >= 8 && hora <= 16) ? "Branco" :
           (hora === 17) ? "Amarelo" : "Preto";
}

*/

/*
const corAgora = definirCorDoCeu(10); 
console.log(corAgora); 

////////////////////////--/////////////////


const cor = (hora >= 6 && hora <= 7) ? "Laranja" :
            (hora >= 8 && hora <= 16) ? "Branco" :
            (hora === 17) ? "Amarelo" : "Preto";

console.log(cor);

*/



/*
function tamanhocidade(populacao) { 
    return (populacao >= 300000) ? "Cidade grande" : "Cidade não é grande";
}
console.log(tamanhocidade(500000));
*/
/*
const somar = (numero1, numero2, numero3) => {
    const total = numero1 + numero2 + numero3
    return total; 
}
const resultadoFinal = somar(10, 340, 23)
console.log(resultadoFinal);
*/
//////////////////
 
/*
const nome = (nome1) => {
    const nome1 = "alberto"
    return nome
}
console.log(nome) 
*/
/*
const n = prompt("Adivinhe o número ?");
*/
/*<input type="text"> 
document.querySelector('input').value */
/*
if( n === "7") {
    alert("Numero certo")
}

else   { 
    alert(`errado`)
    loop();
}
loop(); */
/*
const MULTIPLICA = (num1 , num2 , num3) =>  {

    const resultado = num1 * num2
    const resultado2 = num1 * num3 - num2
    const resultado3 = num1 + num3 - num3 
    return [ resultado, resultado2 , resultado3]
}

console.log(MULTIPLICA(132, 213, 39)); */


/* com o DOM depois uma chamadas para o server só vai mudar para onde eu tiver enviando, a log n */



/* const kda = (kill, assist, death) => {

    const totalkda = `kd: ${kill}/${death}/${assist}`; 
    const estapositivo = `Está positivo? ${kill - death}`; 
    const impacto = `impacto: ${kill + assist - death}`;
    return [totalkda, estapositivo, impacto];
}
console.log(kda(17, 21 , 9)) */

/*
🛠️ O Desafio: A Função validadorPlayer
Crie uma função que receba dois parâmetros: kills e deaths.

As Regras (Tratativas):

Se as deaths forem 0: Retorne a mensagem: "Imortal! Dados perfeitos." (Pois não dá para dividir por zero na lógica de média).

Se as kills forem maiores que 50: Retorne: "Suspeito de Cheat! VSF."

Para todos os outros casos: Calcule o saldo (kills - deaths) e retorne o dado bruto com a frase: "Seu saldo é: [resultado]". */


  /*  const validadorP1 = (kill , death) => { 

    if(death === 0){  
             return "Imortal! Dados perfeitos."
    }
    if(kill > 50){  return "Ta xitado até o talo"

    }
    else  { return `seu saldo é ${kill - death}`

    }  
} 



console.log(validadorP1(13 , 22)) */


//mostrando os 3 resultados simultaneo sem vericação (if/else) *diagnostico completo' 

   /* const validadep1 = (kill, death) => {

        const imortal = `Imortal: ${death === 0}`;
        const cheat =  `Suspeito ${kill > 50}`
        const saldo = `seu saldo é: ${kill - death}`
        return [imortal , cheat , saldo]


    }
console.log(validadep1(40 , 38) )
*/





    ////
/*
while (true) {
    let ENTIDADE = pegar_tipo_entidade();
    
    if (ENTIDADE != Entidades.Abobora && ENTIDADE != null) {  colher(); plantar(Entidades.Abobora);
      
      
        if (num_itens(Itens.Fertilizante) > meta_fertilizante) {  usar_item(itens.Fertilizante);
}
    } 
    else if (ENTIDADE == null) {   plantar(Entodades.Abobora);
        
        if (num_itens(Itens.Fertilizante) > meta_fertilizante) { usar_item(Itens.Fertilizante);
        }
    } 
    else {
        if (pegar_agua() < 0.2) {
            usar_item(Itens.Agua);
        }
    }
    
    if (pode_colher()) {
        break;
    }
} */


    /* O Desafio: Sistema de Recompensa de Partida
Crie uma função chamada calcularRecompensa que recebe o número de pontos de um jogador em uma partida.

As Regras (Tratativas):

Se os pontos forem menores que 0: Retorne "Erro: Pontos inválidos".

Se os pontos forem de 0 a 10: Retorne "Recompensa: 100 moedas".

Se os pontos forem de 11 a 50: Retorne "Recompensa: 500 moedas".

Se os pontos forem maiores que 50: Retorne "Recompensa: 1000 moedas + Bônus de MVP". */

const calcularRecompensa = (pontos) => { 

if  /*  (pontos === 0){ return `erro, pontos inválidos`;  melhor forma para SUPLIR O REQUISITO! SE O PROGRAMA N LIDAR COM NUMERO NEGATIVO */

    (pontos <= 0){ return `erro, pontos inválidos`; /* supri  o negativo e o 0 */

   /* (pontos > -1 && pontos < 1){ return `erro, pontos inválidos`;  funciona */
    /* (pontos === 0){ return `erro, pontos inválidos`; */ /* melhor forma para  */


  /* ( pontos <= 0 && pontos <= -1 ){ return `erro, pontos inválidos`; 
    /* Não dá, assim ele pega todos os numeros entre -1 e 0 mas se coloca -2 em diante da undefined    (CORREÇÃO !, como estava lidando com numero negativo << muda o sinal !!)    
    vou deixar esse && complexo ai mas pode ser (pontos <= 0)
    
*/

}
if( pontos >= 1 && pontos <= 10) { return `recompensa 100 moedas `;

}
if(pontos >= 11 && pontos <= 50){  return `recompensa 500 moedas`;

}
if(pontos >= 50) { return `Recompensa 1000 moedas + mvp`;

}

}
console.log(calcularRecompensa(-232))
console.log(calcularRecompensa(4))
console.log(calcularRecompensa(23))
console.log(calcularRecompensa(67))