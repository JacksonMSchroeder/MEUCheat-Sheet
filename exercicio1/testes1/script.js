

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

/* const calcularRecompensa = (pontos) => { */

 /*  if  (pontos === 0){ return `erro, pontos inválidos`;  melhor forma para SUPLIR O REQUISITO! SE O PROGRAMA N LIDAR COM NUMERO NEGATIVO */

   /* (pontos <= 0){ return `erro, pontos inválidos`; */  /* supri  o negativo e o 0 */

   /* (pontos > -1 && pontos < 1){ return `erro, pontos inválidos`;  funciona */

    /* (pontos === 0){ return `erro, pontos inválidos`; */ /* melhor forma para  */

  /* ( pontos <= 0 && pontos <= -1 ){ return `erro, pontos inválidos`; 
    /* Não dá, assim ele pega todos os numeros entre -1 e 0 mas se coloca -2 em diante da undefined    (CORREÇÃO !, como estava lidando com numero negativo << muda o sinal !!)    
    vou deixar esse && complexo ai mas pode ser (pontos <= 0)
    
*/
/*
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
*/

/* As Regras (Requisitos):

Validação Inicial: Se o número for maior que 100 ou menor que 0, a função deve retornar: "Erro: Pontuação fora dos limites (0-100)".

Caso Positivo (IF): Se o jogador tiver 80 pontos ou mais, retorne: "Jogador Exemplar: Ganhou Skin Lendária".

Caso Neutro (ELSE IF): Se o jogador tiver entre 50 e 79 pontos, retorne: "Jogador Comum: Sem punições".

Caso Negativo (ELSE): Se for menos que 50 pontos, retorne: "Jogador Tóxico: Silenciado por 24h". */

/*
const validacao = (n) => {

    if(n >= 100 || n <= 0 ){ return `Erro: Pontuação fora dos limites (0-100`;  || =! &&    pq um é ou(||)  ,  && é isso + isso tbm é verdade, ou seja buga o cod, 

    }
    if(n > 80) {  return `Jogador Exemplar: Ganhou Skin Lendária`;

    }
    else if(n >= 50 && n <= 79 ){ return `Jogador Comum: Sem punições` ;

    }
    else { return `Jogador Tóxico: Silenciado por 24h`;

    }
}

console.log(validacao(213))
console.log(validacao(85))
console.log(validacao(66))
console.log(validacao(49))
*/




/*
Você precisa criar uma função chamada conectarBanco. Ela vai tentar conectar ao banco de dados até 5 vezes. Se não conseguir na quinta, ela desiste.

As Regras (A Equação do Jack):

Parâmetro inicial: Crie uma variável tentativas começando em 1.

O while: Ele deve rodar enquanto tentativas for menor ou igual a 5.

Tratativa dentro do while:

Imprima no console: "Tentativa número [valor da tentativa]...".

O if: Se a tentativa for a número 3, imprima: "Conexão estabelecida com sucesso!" e use o break (para não precisar chegar até a 5).

O "Combustível": Não esqueça de aumentar o valor da tentativa em cada volta (++).

Tratativa Final (Fora do while): Se o loop acabar e a tentativa for maior que 5, retorne: "Erro: Limite de tentativas excedido".
*/

/*
const conectorBanc = () => {
    let tentativa = 1 ;

    while (tentativa <= 5 ) {
console.log(`Tentativa número ${tentativa}`)
        if(tentativa === 3){ 
            console.log( `Conexão estabelecida com sucesso!`)
break; 
        }  

         tentativa++  

    }

 
}
conectorBanc (); 
/*

/*
Situação,Use...,Por quê?
Busca Simples,return,É mais rápido e limpo.
Processo em Etapas,break,"Você sai do loop, mas continua o ""trabalho de escritório"" da função."
Menu de Opções (Switch),break,"Para não deixar o código ""escorrer"" para a próxima opção."
*/ 

/* Boa, Jackson! Vamos testar se a "febre" da lógica baixou ou se o termômetro de ADS está batendo no topo.

Para esse exercício de while, vamos simular uma situação real do seu projeto CS: Justiça.





 O Desafio: "O Anti-Spam de Denúncias"
Cenário: Um usuário está tentando enviar denúncias em massa, mas o seu sistema tem um limite de segurança. 
Você precisa criar uma função que processe essas denúncias uma por uma, 
até chegar no limite de 7 denúncias.

Sua missão:

Crie uma variável let contador que começa em 1.

Use o while para rodar enquanto o contador for menor ou igual a 7.

Dentro do loop, use um if / else para dizer:

Se o número for par, imprima: "Denúncia [número] enviada com sucesso! ✅"

Se o número for ímpar, imprima: "Denúncia [número] em análise... ⏳" */

/*
const controledenuncia = () => {
let contador = 1;

while(contador <= 7){ 
    if(contador % 2 === 0){
 
        console.log( `Denúncia ${contador} enviada com sucesso! ✅`);
    }
    else {
        
        console.log(`Denúncia ${contador} em análise... ⏳`);
    }
contador++
}


}
controledenuncia();
*/


/*
🛡️ O Desafio: "O Contador de XP do Clan"
Cenário: Você tem uma fila de 10 jogadores entrando no servidor. Cada um ganha uma quantidade de XP baseada na posição de entrada (o seu contador).

Se o contador for múltiplo de 3 (3, 6, 9...), o jogador ganha 100 de XP.

Se não for, ele ganha apenas 10 de XP.

Sua missão:

Crie uma variável let totalXP = 0; (fora do loop).

Crie o seu while de sempre, contando de 1 até 10.

Dentro do if, use o % 3 === 0 para dar os 100 de XP.

O pulo do gato: A cada volta, você deve somar o XP ganho na variável totalXP. (Dica: use totalXP += valor).

No final de tudo (fora do while), dê um console.log mostrando o XP Total acumulado pelo clan.  */

/*
const XPCLAN = () => {
let totalxp = 0;

for( let i = 1 ; i <= 10; i++)

    if(i % 3 === 0){  console.log (`Jogador ${i} multiplicou por 3, ganhou 100 ponto`)
        totalxp += 100; 
  
    }
    else{ console.log (`Jogador ${i} ganhou 0 pontos `)
 totalxp += 10;
    }
console.log(`XP TOTAL ACUMULADO: ${totalxp}`);
};

XPCLAN(); */



/* O TRIBUNAL DO CLAN (NÍVEL JUNIOR)
Cenário: Você recebeu uma lista de nomes do banco de dados do seu sistema de CS. Você precisa criar um filtro de integridade para separar quem vai pra análise e quem está liberado.

O Array de Entrada:
const suspeitos = ["Jackson", "Bolt", "Gaules", "S1mple", "Fallen", "Coldzera", "Fer"];

Sua Missão:

Percorra toda a lista de suspeitos.

Aplique a regra: Se a posição (índice) do jogador na lista for um múltiplo de 2, ele deve ser marcado como "EM REVISÃO".

Se a posição não for múltiplo de 2, ele está "LIBERADO".

No final do código, o console deve mostrar a quantidade total de jogadores que ficaram "EM REVISÃO".

🔍 Regras do Jogo:
Use um loop (você escolhe se for ou while).

Use o operador % para a lógica da posição.

Crie uma variável para contar quantos caíram na revisão.

O Desafio: O resultado final (o total) só pode aparecer depois que o loop terminar. */

/*
const tribunal = () => {
    const suspeitos = ["Jackson", "Bolt", "Gaules", "S1mple", "Fallen", "Coldzera", "Fer"];
let revisao = 0;
let liberado = 0;

for(let i = 0; i < suspeitos.length; i++){

    if(i % 2 === 0 ){
        console.log(`EM REVISÃO ${suspeitos[i]}`)
  revisao = revisao + 1;  para contar uma array , usar uma variavel + ela + 1 
    }
    else  {
        console.log(`Liberado ${suspeitos[i]}` )
       liberado = liberado +1;
    }

}
console.log(`${revisao} total em revisão `)
console.log(`${liberado} total liberados `)

}
tribunal();    */




/*
"O Filtro de Overwatch"
Cenário: Você tem uma lista de pontuações de denúncia (de 0 a 100).
 Você precisa varrer essa lista e separar os jogadores em dois grupos: os que vão para o BAN imediato e os que ficam em OBSERVAÇÃO.

O Array de Entrada:
const denuncias = [10, 85, 30, 95, 50, 70, 20];

Sua Missão:

Crie duas listas vazias (Arrays) antes do loop: let banidos = []; e let observacao = [];.

Percorra a lista de denuncias usando um for.

A Regra: * Se a denúncia for maior ou igual a 70, use o .push() para jogar o valor na lista de banidos.

Se for menor que 70, use o .push() para jogar o valor na lista de observacao.

No final (fora do loop), mostre no console:

"Valores de Ban: [os números aqui]"

"Total de banidos: [quantidade]"  */

const overwatch = () => {
const denuncia = [10, 85, 30, 95, 50, 70, 20];
    
let banidos = [];
let observacao = [];


for (let i = 0; i < denuncia.length; i++) {

    if(denuncia[i] >= 70 && denuncia[i] <= 100){ 
banidos.push(denuncia[i]);
console.log(`User #n: ${denuncia[i]} ban!`)
    } 
     if(denuncia[i] < 70 ){
observacao.push(denuncia[i])
console.log(`User #n: ${denuncia[i]} em observação!`)
    }
}
console.log(`lista de banidos ${banidos}`)
console.log(`lista em obervação ${observacao.length}`)
console.log(`lista de banidos ${banidos.length}`)
}
overwatch();