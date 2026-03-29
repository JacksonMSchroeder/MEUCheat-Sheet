

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

/*
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
overwatch(); */





/* Exercício: O Conferente de Carga
Você tem uma lista com o peso de várias caixas.

Se a caixa pesa mais de 50kg, ela é considerada "Pesada" (vai para o fundo do container).

Se a caixa pesa 50kg ou menos, ela é "Leve" (vai para o topo).

Seu objetivo:

Criar uma lista de pesos: const pesos = [12, 55, 8, 90, 45, 70];

Criar duas "caixas" (arrays) vazias: caixasPesadas e caixasLeves.

Usar o for com o .length para percorrer os pesos.

Usar o if para testar se o peso é > 50.

Usar o .push() para guardar o peso na lista certa.

No final, dar um console.log mostrando quantos kg tem na lista de pesadas. */


/*
const pesocaixa = () => {
const pesos = [12 , 55, 8, 90, 50 ,50, 50, 45, 70, 82, 12,11,32,80,];
let caixaspesadas = [];
let caixaLeves = [];
let somatotalpesado = 0;
let somtatotalleve = 0;


for(let i = 0; i < pesos.length; i = i +1){
if(pesos[i] > 50){ 
    caixaspesadas.push(pesos[i]);
    console.log(`Caixa Pesada ${pesos[i]}`)
    somatotalpesado = somatotalpesado + pesos[i]; 
  
}


if(pesos[i] <= 50) { 
    caixaLeves.push(pesos[i]);      
    console.log(`Caixa Leve ${pesos[i]}`)
    somtatotalleve += pesos[i];

}

}

if(somtatotalleve + somatotalpesado >= 1000){ 
    console.log(`Ultrapassou limite de peso do Caminhão`)
}

else { 
    console.log(`Não ultrapassou limite de peso do Caminhão`)
}




console.log(`É pesado ou leve? `)
console.log(`Pesado  ${caixaspesadas.length}`)
console.log(`Leve ${caixaLeves.length}`)

console.log(`Os pesados tem ${somatotalpesado } kg `)
console.log(`Os leves tem ${somtatotalleve } kg`)
}
pesocaixa();
*/






/* Vamos colocar esse seu processo mental de "Gaveta, Motor e Filtro" para trabalhar. Como você está na pegada de ADS e gosta de games e logística, montei um exercício que simula um sistema real.

Imagine que você está desenvolvendo o backend para uma transportadora em Joinville. Você recebeu uma lista de pesos de cargas e precisa organizar o galpão.

 O Desafio: Operador de Logística JS
Você tem a seguinte array de pesos (em kg):
const cargas = [120, 45, 200, 80, 30, 150, 40, 90];

Sua missão é criar um script que:

Percorra toda a array (linha por linha).

Identifique quais cargas são "Leves" (abaixo de 100kg) e quais são "Pesadas" (100kg ou mais).

Crie duas novas gavetas (arrays vazias) chamadas cargasLeves e cargasPesadas e jogue os valores nelas.

Some o peso total de todas as cargas para saber o peso bruto do caminhão.

Conte quantas cargas pesadas existem. */


/*
const tranportadora = () => {
const carga = [120, 45, 200, 80, 30, 150, 40, 90];
let cargasleves = [];
let cargaspesadas = [];

let somaleve = 0;
 let somapesada= 0;
let totalpesadas = 0;



for(let i = 0; i < carga.length ; i++){

    if(carga[i] >= 100){
        cargaspesadas.push(carga[i]);
        console.log(`cargas pesadas ${carga[i]}`)

        somapesada = somapesada + carga[i];
        totalpesadas = totalpesadas +1;
    }

    if(carga[i] < 100){
        cargasleves.push(carga[i]);
        console.log(`cargas leves ${carga[i]}`)
        somaleve = somaleve + carga[i];

    }
      
}


console.log(`Soma das pesadas é ${somapesada}`)
console.log(`Soma das leves é ${somaleve}`)
console.log(`Soma total é ${somaleve + somapesada}`)
console.log(`total de carga pesada é ${totalpesadas}`)
}
tranportadora(); */




/*

 Exercício: O Scanner de Integridade
Imagine que você recebeu uma lista de scores de comportamento de jogadores. 
Mas, como a internet oscila, alguns dados vieram corrompidos (NaN, Strings ou Números Negativos).

Sua missão é criar um for que limpe essa lista e nos dê o relatório real.

A Lista de Entrada:
const scores = [85, "erro", 120, -10, NaN, 150, 40, "banido", 200];

O que seu código deve fazer:

Criar uma variável somaValida que começa em 0.

Criar uma variável contagemErros que começa em 0.

Usar um for para percorrer a lista scores.

Dentro do for, use um if para checar se o dado é válido:

Dica 1: Use typeof scores[i] === 'number' para garantir que é número.

Dica 2: Use !isNaN(scores[i]) para garantir que não é um NaN.

Dica 3: O número deve ser maior que 0 (não queremos scores negativos).

Se o dado for válido: Some ele na somaValida.

Se o dado for INVÁLIDO: Aumente 1 na contagemErros.
*/

// const entrada = () => {
// const scores = [85, "erro", 120, -10, NaN, 150, 40, "banido", 200];
// let somaValida = 0;
// let contagemErros = 0;
// let validos = [];   
// let invalidos = [];
// //let somatotalvalidos = 0; sem necessidade ! soma valida já suple a soma total dos validos 


// for(let i = 0; i < scores.length; i++){

//     if(typeof scores[i] === `number` && !isNaN(scores[i]) && scores[i] > 0 ){
//         somaValida = somaValida + scores[i]; /* para mostrar o valor do erro, ou seja o valor que não é valido, ou seja o valor que não é numero, ou seja o valor que é string ou numero negativo ou NaN */
//         //console.log(`Score válido: ${scores[i]}`)
//         validos.push(scores[i]);
//         //somatotalvalidos = somatotalvalidos + scores[i];
//         /*  usa typeof para garantir o tipo.

//      usa !isNaN para garantir que o numero é real.( isNan = numero real, com o ! não é numero)

//      usa && para criar uma "porta lógica". */


//     }
//     else { 
//         contagemErros = contagemErros + 1;
//         invalidos.push(scores[i]); /* para mostrar o valor do erro, ou seja o valor que não é valido, ou seja o valor que não é numero, ou seja o valor que é string ou numero negativo ou NaN */
//         //console.log(`Score inválido: ${scores[i]}`)
            
//         //console.log(`Contagem de erros: ${contagemErros[i]}`)
//     }
    
   
   
// }   
// console.log(`soma valores total: ${somaValida}`)
// console.log(`Valores válidos: ${validos}`)
// console.log(`Valor do erro: ${invalidos}`)
// console.log(`Contagem de erros: ${contagemErros}`)
//  console.log(`Soma dos scores válidos: ${somaValida}`)

// //console.log(typeof 2026); //teste typeof

// //console.log(typeof "ADS Uniasselvi"); //teste

// //console.log(typeof (5 > 2)); //teste

// }
// entrada();

////

/* 
O Array de Entrada (A "Tabela" do Banco):

JavaScript
const arsenal = [
    { id: 1, nome: "AK-47", estado: "novo", power: 90 },
    { id: 2, nome: "M4A1", estado: "quebrado", power: 85 },
    { id: 3, nome: "AWP", estado: "novo", power: 100 },
    { id: 4, nome: "Glock", estado: "quebrado", power: 20 },
    { id: 5, nome: "Desert Eagle", estado: "novo", power: 75 }
];
Sua Missão:
Crie uma função chamada organizarArsenal que percorra esse array e faça o seguinte:

Filtro de Estado: Crie dois novos arrays: prontasParaUso e manutencao.

Lógica de Separação: * Se o estado for "novo", dê um .push() do nome da arma para o array prontasParaUso.

Se o estado for "quebrado", dê um .push() do nome da arma para o array manutencao.

Cálculo de Poder: Crie uma variável poderTotal que some o power de todas as armas do arsenal (independente do estado).

Relatório Final (Saída): Fora do loop, dê um console.log mostrando:

As armas prontas.

As armas que precisam de conserto.

O poder de fogo total do clan. */

// const tabela = () => {
//     const arsenal = [
//     { id: 1, nome: "AK-47", estado: "novo", power: 90 },
//     { id: 2, nome: "M4A1", estado: "quebrado", power: 85 },
//     { id: 3, nome: "AWP", estado: "novo", power: 100 },
//     { id: 4, nome: "Glock", estado: "quebrado", power: 20 },
//     { id: 5, nome: "Desert Eagle", estado: "novo", power: 75 }
// ];
// let prontasParaUso = [];
// let manutencao = [];
// let poderTotal = 0;
// let podeatual = 0;

// for(let i = 0; i < arsenal.length; i++){

    

//     if(arsenal[i].estado === "novo"){
//         //console.log(`Arma pronta para uso: ${arsenal[i].nome}`)
//         prontasParaUso.push(arsenal[i].nome);
//     }
//     else { 
//         //console.log(`Arma precisa de manutenção: ${arsenal[i].nome}`)
//         manutencao.push(arsenal[i].nome);
//     }

// poderTotal =  poderTotal + arsenal[i].power;

// poderatual = poderTotal - manutencao.length * arsenal[i].power; 

// }
// console.log(`Poder total acumulado: ${poderTotal}`);
// console.log(`Armas prontas para uso: ${prontasParaUso}`);
// console.log(`Armas que precisam de manutenção: ${manutencao}`)
// console.log(`Poder atual do clan: ${poderatual}`)
// }
// tabela();


/* Sua Missão:
{ id: 1, usuario: "Jackson", valor: 100, tipo: "VIP" },
        { id: 2, usuario: "Larissa", valor: 50, tipo: "comum" },
        { id: 3, usuario: "Tainara", valor: 200, tipo: "VIP" },
        { id: 4, usuario: "Budié", valor: 80, tipo: "comum" },
        { id: 5, usuario: "Faith", valor: 150, tipo: "VIP" }

Crie uma função chamada processarPagamentos que percorra o array compras e faça o seguinte:

Filtro de Categoria: Crie dois novos arrays: clientesVIP e clientesComuns.

Lógica de Desconto: * Se o tipo for "VIP", o cliente ganha 20% de desconto no valor da compra.

Se o tipo for "comum", o cliente paga o valor cheio.

Acumuladores:

faturamentoTotal: Soma de todos os valores após os descontos aplicados.

totalDescontos: Soma de quanto dinheiro o sistema "perdeu" dando descontos aos VIPs.

Relatório Final: Exiba o faturamento real, o total de descontos e quem são os VIPs. */


const processarpagamentos = () => {
const compras = [ { id: 1, usuario: "Jackson", valor: 100, tipo: "VIP" },
        { id: 2, usuario: "Larissa", valor: 50, tipo: "comum" },
        { id: 3, usuario: "Tainara", valor: 200, tipo: "VIP" },
        { id: 4, usuario: "Budié", valor: 80, tipo: "comum" },
        { id: 5, usuario: "Faith", valor: 150, tipo: "VIP" }
];
   
   

let clientesVIP = [];
let clientescomuns = [];
let faturamento = 0;
let totaldesconto = 0;


for(let i = 0; i < compras.length; i++){

     //const desconto = 0;

    if(compras[i].valor >= 100 ){
        clientesVIP.push(compras[i].usuario);
        
         compras[i].desconto  = compras[i].valor * 0.2 ;
        totaldesconto = totaldesconto + compras[i].desconto;
        faturamento = faturamento + compras[i].valor - compras[i].desconto;
         console.log(`O desconto para ${compras[i].usuario} pagou ${compras[i].valor} e recebeu ${compras[i].desconto} de desconto`);
    }
    else  {
        clientescomuns.push(compras[i].usuario);    
        faturamento = faturamento + compras[i].valor;
        console.log(`O desconto para compra de ${compras[i].usuario} , nas compra de valor ${compras[i].valor} não foi possivel, só acima de 100! `);


        
    }
 
   
}


// for(let i = 0; i < compras.length; i++){
//  if(compras[i].valor >= 100 ){
//     console.log(`O desconto para ${compras[i].usuario} foi de ${compras[i].valor} para ${valorpago[i]}`);
//  }
// else {
//     console.log(`O desconto para compra de ${compras[i].usuario} , nas compra de valor ${compras[i].valor} não foi possivel, só acima de 100! `);
// }






  console.log(`Clientes Vips são: ${clientesVIP}`);    
 console.log(`O faturamento é  ${faturamento}`)
 console.log(`o total de desconto é  ${totaldesconto}`)
  //console.log(`O desconto para ${clientesVIP[i]} é ${descontos[i]}`);
}

processarpagamentos();  



