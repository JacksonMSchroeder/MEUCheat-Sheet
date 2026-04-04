

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

// let num1 = 13;
// let num2 = 234;

// const soma = num1 + num2;
// const diminuir = num1 - num2;
// const multiplicar = num1 * num2;
// const dividir = num1 / num2; 

// console.log(dividir);



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


// const processarpagamentos = () => {
// const compras = [ { id: 1, usuario: "Jackson", valor: 100, tipo: "VIP" },
//         { id: 2, usuario: "Larissa", valor: 50, tipo: "comum" },
//         { id: 3, usuario: "Tainara", valor: 200, tipo: "VIP" },
//         { id: 4, usuario: "Budié", valor: 80, tipo: "comum" },
//         { id: 5, usuario: "Faith", valor: 150, tipo: "VIP" }
// ];
   
   

// let clientesVIP = [];
// let clientescomuns = [];
// let faturamento = 0;
// let totaldesconto = 0;


// for(let i = 0; i < compras.length; i++){

//      //const desconto = 0;

//     if(compras[i].valor >= 100 ){
//         clientesVIP.push(compras[i].usuario);
        
//          compras[i].desconto  = compras[i].valor * 0.2 ;
//         totaldesconto = totaldesconto + compras[i].desconto;
//         faturamento = faturamento + compras[i].valor - compras[i].desconto;
//          console.log(`O desconto para ${compras[i].usuario} pagou ${compras[i].valor} e recebeu ${compras[i].desconto} de desconto`);
//     }
//     else  {
//         clientescomuns.push(compras[i].usuario);    
//         faturamento = faturamento + compras[i].valor;
//         console.log(`O desconto para compra de ${compras[i].usuario} , nas compra de valor ${compras[i].valor} não foi possivel, só acima de 100! `);


        
//     }
 
   
// }


// // for(let i = 0; i < compras.length; i++){
// //  if(compras[i].valor >= 100 ){
// //     console.log(`O desconto para ${compras[i].usuario} foi de ${compras[i].valor} para ${valorpago[i]}`);
// //  }
// // else {
// //     console.log(`O desconto para compra de ${compras[i].usuario} , nas compra de valor ${compras[i].valor} não foi possivel, só acima de 100! `);
// // }






//   console.log(`Clientes Vips são: ${clientesVIP}`);    
//  console.log(`O faturamento é  ${faturamento}`)
//  console.log(`o total de desconto é  ${totaldesconto}`)
//   //console.log(`O desconto para ${clientesVIP[i]} é ${descontos[i]}`);
// }

// processarpagamentos();  


/* Exercício 1: A Calculadora de Padaria
Objetivo: Praticar a criação de variáveis e a concatenação (juntar texto com número).

Crie uma variável chamada precoPao e atribua o valor 0.50.

Crie uma variável chamada quantidade e atribua o valor 10.

Crie uma variável chamada total que multiplique as duas anteriores.

Mostre na tela a frase: "O valor total da compra é: " seguido do valor da variável total. */

// const precopao = 0.50
// const quantidade = 1301
// const total = precopao * quantidade;  

// console.log(`O o valor da compra é ${total}`)

////////


/* Exercício 2: O Registro do Atleta
Objetivo: Praticar o uso de diferentes tipos de dados (Texto e Número).

Crie uma variável nomeAtleta com o valor "Jackson".

Crie uma variável kmPercorridos com o valor 5.5.

Crie uma variável tempoMinutos com o valor 30.

Mostre na tela uma frase única que diga: "O atleta [nome] correu 
[km] km em [tempo] minutos." (Substitua os colchetes pelas suas variáveis). */

// const nomeatleta = `jackson`;
// const kmFeitos = 5.5;
// const tempomin = 30.


// console.log(`O atleta ${nomeatleta} correu ${kmFeitos} km em ${tempomin} minutos`);





// Objetivo: Entender como o JavaScript mostra valores de "Verdadeiro ou Falso" (Porta Lógica).

// Crie uma variável idadeUsuario e coloque a sua idade.

// Crie uma variável chamada podeEntrar que receba o resultado da comparação: idadeUsuario >= 18.

// Mostre no console o valor da variável podeEntrar.

// Dica: O resultado na tela deve ser apenas true ou false.


// const idadeuser = 12;
// const podeentrar = idadeuser >= 18;

// console.log(podeentrar);






// Objetivo: Criar uma função simples que recebe um parâmetro e exibe uma mensagem.

// Crie uma função chamada exibirBoasVindas.

// Ela deve receber um parâmetro chamado nomeUsuario.

// Dentro dela, use o console.log para mostrar: "Olá [nomeUsuario], bem-vindo ao servidor!".

// Para testar: Chame a função passando o seu nome: exibirBoasVindas("Jackson");.


// const exibirBoasVindas = (username) => {

//     console.log(`Olá ${username}, bem-vindo ao servidor!`);
// }
// exibirBoasVindas("Jackson");


// Objetivo: Praticar o uso do return (quando a função "devolve" um valor para ser usado depois).

// Crie uma função chamada calcularXP.

// Ela deve receber dois parâmetros: missoesConcluidas e dificuldade (um número).

// A função deve retornar o valor de: missoesConcluidas * dificuldade * 100.

// Para testar:

// Crie uma variável fora da função chamada meuXP.

// Atribua a ela o resultado da função: let meuXP = calcularXP(5, 2);.

// Mostre no console: "Meu XP total é: [meuXP]".

// const calcularXP = (missoesConcluidas, dificuldade)  => { //missoesConcluidas, dificuldade pode ser string, valor, true/false etc 
   
//     return  missoesConcluidas * dificuldade * 100;

// };
// let meuxp = calcularXP(5,2);
// console.log(`meu xp = ${meuxp}`)






// 3. Nível: Difícil (O Analista de Build)
// Objetivo: Misturar função, lógica condicional (if/else) e retorno de strings.

// Crie uma função chamada analisarStatus.

// Ela recebe um parâmetro chamado pontosPoder.

// Lógica:

// Se pontosPoder for menor que 50, retorne a frase: "Build Fraca".

// Se for entre 50 e 80, retorne: "Build Equilibrada".

// Se for maior que 80, retorne: "Build OP (Overpowered)".

// Para testar:

// Dê um console.log(analisarStatus(90)); e veja se ele imprime a mensagem correta.

// const analisarStatus = (pontosPoder) => {


//     if(pontosPoder >= 50 && pontosPoder <= 80 ){
//         return ("Build Equilibrada")
//      }   
//     if(pontosPoder > 80){
//         return ("Build OP")
//     }
  
//         return ("Fraquin")
    
// }
// console.log(analisarStatus(40));




// Crie uma função chamada podeSubirDeRank. Ela deve receber dois parâmetros: xpAtual e temPasseVip (que será um valor true ou false).

// Lógica:

// Se o xpAtual for maior ou igual a 1000 OU (||) o temPasseVip for verdadeiro (true):

// Retorne: "Upgrade Liberado!"

// Caso contrário:

// Retorne: "XP Insuficiente."

// const podeSubirDeRank = (xpAtual, temPasseVip ) => {

//     if(xpAtual >= 100 ||temPasseVip === true ){
//         return "Upgrade Liberado"
// }
//     return "xp insuficiente";

// }
// console.log(podeSubirDeRank(98, false));  
// console.log(podeSubirDeRank(50, true));  





// Objetivo: Criar uma função chamada calcularDano que decide se o
//  personagem deu um acerto crítico, um dano normal ou se o inimigo bloqueou tudo.

// Parâmetros da função:

// valorAtaque (um número de 1 a 100).

// defesaInimigo (um número de 1 a 100).

// Regras da Lógica:

// Bloqueio Total: Se o valorAtaque for menor ou igual à defesaInimigo, retorne a frase: 
// "O inimigo bloqueou o golpe!".

// Acerto Crítico: Se o valorAtaque for maior que 90 (independente da defesa, a menos que seja um bloqueio), retorne: 
// "DANO CRÍTICO! Golpe fatal!".

// Dano Normal: Se o ataque for maior que a defesa, mas não for crítico, retorne: 
// "Dano causado: [valor do ataque]!" (aqui você deve usar template strings para mostrar o número). 

// const calcularDano = (valorAtaque, defesaInimigo ) => {
//     // let ataque =  valorAtaque >= 1 && valorAtaque <= 100;       
//     // let defesa =  defesaInimigo >= 1 && defesaInimigo <= 100; não precisava... logica falhou ao perceber q os 
//         //parametros do if else poderia atender ja ao requisito 1 a 100, n preciso declarar isso antes.. 

//         //const valorvalido = valorAtaque >= 1 && valorAtaque <= 100 && defesaInimigo >= 1 && defesaInimigo <= 100;
//             // <input type="number" id="ataque" min="1" max="100">
//             // para travar do usuario usar outro numero além do do estipulado.. 

//                                 // ||     
            
//             // O valor nunca será menor que 1 nem maior que 100, 
//     // o JS "força" ele a entrar no limite.
//     //valorAtaque = Math.min(Math.max(valorAtaque, 1), 100);
//     //defesaInimigo = Math.min(Math.max(defesaInimigo, 1), 100);

//     //valorAtaque = Math.min(  Math.max(valorAtaque, 1)  ,  100  );
//                     //↑         └──────────┬──────────┘      ↑
//                 //Reduz p/ 100       Calcula o Piso        Teto



//     if(valorAtaque < 1 || valorAtaque > 100 || defesaInimigo < 1 || defesaInimigo > 100 ) {
//       return `Error um ataque ou defesa não pode ultrapssar 100 pontos ou ser negativo`
//       //manter a logica do sistema que recebe passivamente os dados, mas esta na linha 1140 
//         //para fazer o jeito que trava a condição sem precisar colocar condições if/else 
//     }

//     if(defesaInimigo >= valorAtaque) { // VALORES IGUAIS SÓ COM O > TAVA DANDO UNDEFIENED, ATENÇÃO COM A LOGICA
//         return `"O inimigo bloqueou o golpe!"`
//     }
//     if(valorAtaque > 90 && valorAtaque <= 100 ) {
//         return `DANO CRÍTICO! Golpe fatal!`
//     }   
//     if(valorAtaque > defesaInimigo){
//         return `Dano causado: ${valorAtaque}!`
//     }
     
//         return;
         
// }
         
     

    


// calcularDano();
// console.log(calcularDano(95, 50)); // Deve retornar: "DANO CRÍTICO! Golpe fatal!"
// console.log(calcularDano(30, 80)); // Deve retornar: "O inimigo bloqueou o golpe!"
// console.log(calcularDano(70, 40)); // Deve retornar: "Dano causado: 70!"
// console.log(calcularDano(40, 101)); // error


///


// Exercício: O Coletor de XP (Experiência)
// Cenário: Seu herói começa uma jornada. Ele tem uma quantidade inicial de XP e, 
// conforme derrota monstros, ele ganha mais pontos. Se ele atingir um certo limite, ele sobe de nível.

// Objetivo:

// Crie uma variável chamada xpAtual começando em 0.

// Crie uma função chamada ganharExp que recebe um parâmetro pontos.

// Dentro da função:

// Some os pontos ao xpAtual (use a estrutura variavel = variavel + x).

// Se o xpAtual passar de 100, exiba: "LEVEL UP!" e resete o xpAtual para 0.

// Senão, exiba apenas: "XP atual: [valor]".



// const ganharExp = (pontos) => { //criar pontos que pode ser o numero, ou seja, ele vai sempre receber oq eu quiser
// let xpAtual = 0;
// xpAtual +=  pontos;
// xpAtual = Math.min(Math.max(xpAtual, 1), 100);

//     return `Xp atual: ${xpAtual}`
// }
// ganharExp();
// console.log(ganharExp(102)); // XP vira 10
// console.log(ganharExp(25)); // XP vira 35 (10 + 25)
// console.log(ganharExp(5));  // XP vira 40 (35 + 5)) 


/////////


// 1. Nível: Tranquilo (Manipulando a Mochila)
// Objetivo: Criar, adicionar e acessar posições específicas.

// Crie um array chamado inventario com: "Espada", "Escudo", "Poção".

// Adicione o item "Adaga" ao final da lista usando o .push().

// Mude o primeiro item (índice 0) de "Espada" para "Espada de Ferro".

// Dê um console.log no terceiro item da lista.


// const inventario = ["Espada", "Escudo", "Poção" ];

// inventario.push(`Adaga`);
// inventario[0] = `Espada de Ferro`;
// console.log(inventario[3]);


////////////

// 2. Nível: Médio (Varrendo a Lista)
// Objetivo: Usar o loop for para ler a lista inteira automaticamente.

// Crie um array chamado precos com os valores: 10.50, 20.00, 5.00, 15.00.

// Crie um for que comece no 0 e vá até o final da lista (precos.length).

// Dentro do for, mostre no console: "O item custa: R$ [valor]".

// const precos = () => {
//     const valores = [10.50, 20.00, 5.00, 15.00];

//     const terceirovalor = valores [2];    //se eu sei que os valores e eu quero pegar especificamente algo dentro da lista 
//     console.log(`o terceiro valor é ${terceirovalor}`);

//     for(let i = 0; i < valores.length; i++){   //percorrer a lista

//         console.log(`O itens custam respectivamente : ${valores[i]}`);
    
//     }


// }
// precos();

// const compras = [ 
//     { id: 1, usuario: "Jackson", valor: 100, tipo: "VIP" },
//     { id: 2, usuario: "Larissa", valor: 50, tipo: "comum" },  
//     { id: 3, usuario: "Tainara", valor: 200, tipo: "VIP" },
//     { id: 4, usuario: "Budié", valor: 80, tipo: "comum" }, // <-- Esse é o índice 3
//     { id: 5, usuario: "Faith", valor: 150, tipo: "VIP" }
// ];


// const cliente4tipo = compras[3].tipo;    PARA buscar um item especifico numa lista com objetos aRRAYname[i].caractristica 

// console.log(cliente4tipo); // Saída: "comum"

///////

// 3. Nível: Responsa (O Localizador)
// Objetivo: Usar lógica dentro do array para encontrar um valor específico.

// Crie um array chamado jogadores com: "Jackson", "Marcos", "Larissa", "Budié".

// Crie um for para percorrer a lista.

// Lógica: Se o nome do jogador for igual a "Budié", mostre: "Parceiro encontrado!".

// Se não for, mostre: "Procurando...".

// const Localizador = () => {
//     const jogadores = ["Jackson", "Marcos", "Larissa", "Budié"];

//     for(let i = 0; i < jogadores.length; i++){

//         if(jogadores[i] === "Budié"){ 
            
//             //console.log(`Parceiro encontrado! ${i}`);
//             return `Parceiro Budié encontrado!  `
//         }
       
//             console.log( `Procurando... ${jogadores[i]} não é sua busca`); console.log //da eco no terminal se usado no loop, vai aparecer para 
//                                         //   tudo por causa do [i]

//              //return "Procurando..." 

//             // return "Procurando..." usar assim ele vai parar o loop na primeira volta "Jackson"
        
           
            
//     }
//       return "Procurando..." 
// }
// Localizador();
// console.log(Localizador());

//////////

// Crie const notas = [10, 20, 30];.

// Crie let total = 0; antes do loop.

// No for, faça: total = total + notas[i];.

// Dê o return total; fora das chaves do for.



// const note = () => {
// const notas = [10, 20, 30];
// let total = 0;

// for(let i = 0; i < notas.length; i++){

//     total = total + notas[i];                           //ACUMULADOR !! variavel += array[i]


// }
// return total;
// }
// note();
// console.log(note());

//////

// Crie um array const vendas = [50, 150, 200, 30];.

// Crie uma variável let totalVendasGrandes = 0;.

// No for, use um if para verificar: Se a venda atual (vendas[i]) for maior que 100:

// Acumule no total usando o +=.

// Fora do loop, dê o return no total.     //primeiro desafio 



// ++ há um imposto de 10% no valortotal //pensando em algo que dificulte

// const vendas = () => {
//     const vendas = [50, 150, 200, 30];
//     //let totalVendasGrandes = 0;
//     let totalvendas = 0;
//     let imposto = 0;

//     for(let i = 0; i < vendas.length; i++){

       
    
//         if(vendas[i] >= 0 && vendas[i] > vendas.length){ 
//         //totalVendasGrandes += vendas[i]; //primeiro desafio
//                         //+= acumulador 
//         totalvendas += vendas[i];
         

//         }
        
        
//         imposto = totalvendas  * 0.1;

    
        
//     }
//     //return `Suas vendas deram: ${totalvendas}, isso gerou um imposto de(10%): ${imposto} Seu faturamento foi: ${totalvendas - imposto}`;
//     //return totalvendas - imposto; //retornar com imposto 
//     //return totalvendas * 0.1; // retornar com imposto, sabendo a porcentagem do desconto n precisa colocar ele no cod

    
      
    

     

// }
// console.log(vendas());




// Aqui, o desafio é lidar com Objetos dentro da lista e usar um Filtro (o if) para somar apenas o que interessa.

// 🛡️ Desafio: O Relatório de Serviços
// Cenário: Você recebeu uma lista de movimentações do dia. Algumas são vendas de produtos
//  (pomada, shampoo) e outras são serviços (corte, barba). O dono quer saber o faturamento bruto apenas dos serviços, 
// para calcular a comissão dos barbeiros.

// Sua Missão:
// Crie a lista de objetos:

// JavaScript
// const movimentacoes = [
//     { tipo: "serviço", valor: 50 },  // Corte
//     { tipo: "produto", valor: 30 },  // Pomada
//     { tipo: "serviço", valor: 70 },  // Barba
//     { tipo: "produto", valor: 100 }  // Kit Presente
// ];
// Crie uma variável let totalServicos = 0;.

// Use o for para percorrer a lista.

// Dentro do loop, use um if para verificar:

// SE o tipo daquela linha for igual a "serviço".

// ENTÃO acumule o valor no totalServicos.

// Fora do loop, calcule um imposto de 10% sobre esse total de serviços.

// Retorne um Objeto contendo: { bruto, imposto, liquido }.


// se tiver só 1 serviço, e o valor for exatamente 50, de 5% de desconto / primeira compra = disconto

// const desconto = 0.05
// const movement = () => {
//     const movimentacoes = [
//         { tipo: "serviço", valor: 50 },  // Corte
//         { tipo: "produto", valor: 30 },  // Pomada
//         //{ tipo: "serviço", valor: 70 },  // Barba
//         { tipo: "produto", valor: 100 }  // Kit Presente
//     ];

//     let quantidadeservico = 0;
//     let servico = 0;
//     let imposto = 0;


//     for(let i = 0; i < movimentacoes.length; i++ ){
//         if(movimentacoes[i].tipo === "serviço"){
//             servico += movimentacoes[i].valor;
//             quantidadeservico += 1;
//         } 
        
//         //imposto = servico * 0.1; // precisa estar fora do loop se não ele roda junto ai vai somando conforme as vzs q roda o loop
//         //return `seu total de ganho com os serviços foi de ${servico} e o imposto foi ${imposto} e o liquido foi ${servico - imposto}`  
//     }
//     console.log("antes desconto", servico);
//     if (quantidadeservico === 1 && servico === 50) {
//         servico = servico * (1 - desconto);
//     }
//     console.log("depois desconto", servico);
//     imposto = servico * 0.1;
   
//     //return `seu total de ganho com os serviços foi de ${servico} e o imposto foi ${imposto} e o liquido foi ${servico - imposto}`
//     return servico - quantidadeservico;
// }   
// console.log(movement()); 





// O Desafio: Sistema de Checkout "Fidelidade 10"
// Imagine que você está desenvolvendo o sistema para uma barbearia ou uma cafeteria. As regras de negócio são:

// Primeira Compra: Sempre tem 15% de desconto (Boas-vindas).

// Compras Comuns: Valor integral.

// Décima Compra: O cliente atinge o marco de 10 serviços e ganha 30% de desconto naquela compra específica.


// const cafeteria = () => {
//     const compra = [{ "compra": 1, "original": 50, "final": 42.5, "tipo": "Boas-vindas" },
//   { "compra": 2, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 3, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 4, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 5, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 6, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 7, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 8, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 9, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 10, "original": 50, "final": 35, "tipo": "Fidelidade 10" }, // 30% OFF
//   { "compra": 11, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 12, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 13, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 14, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 15, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 16, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 17, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 18, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 19, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 20, "original": 50, "final": 35, "tipo": "Fidelidade 20" }, // 30% OFF
//   { "compra": 21, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 22, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 23, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 24, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 25, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 26, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 27, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 28, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 29, "original": 50, "final": 50, "tipo": "Normal" },
//   { "compra": 30, "original": 50, "final": 35, "tipo": "Fidelidade 30" }  // 30% OFF
// ];

// let numerodecompra = 0;
// let valornormal = 0;
// let primeiracompra = 0;
// //let desconto10 = 0;
// let desconto10 = []; // para n somar no loop cada desconto acumulativo, declara array, .push

// for(let i = 0; i < compra.length; i++){  

//     numerodecompra =  compra[i].compra;
//     valornormal = compra[i].original;
    

//     if(numerodecompra === 1){
//         primeiracompra = compra[0].original * 0.85  
//     }
//     if(numerodecompra % 10 === 0 ){
//         //desconto10 = compra[i].original * 0.70
//         desconto10.push(compra[i].original * 0.70);
        

//     }

// }


// return `Primeira compra ${primeiracompra} /  se for a décima compra ${desconto10} / se for sem promo ${valornormal}` 

// }   
// console.log(cafeteria());   






// Alerta de Estoque Baixo: Se a quantidade for menor que 5, adicione uma propriedade status: "REABASTECER".

// Desconto de Lote (Atacado): Se o cliente comprar mais de 10 unidades de uma vez, o precoUnitario recebe 20% de desconto.

// Valor de Patrimônio: Crie uma propriedade totalEmEstoque que é precoUnitario * quantidade.

// Tente completar esse código:
// JavaScript
// const oficina = () => {
//     const estoque = [
//         { nome: "Furadeira Makita", precoUnitario: 500, quantidade: 3 },
//         { nome: "Jogo de Brocas Vonder", precoUnitario: 80, quantidade: 15 },
//         { nome: "Disco de Corte", precoUnitario: 25, quantidade: 60 },
//         { nome: "Esmerilhadeira", precoUnitario: 350, quantidade: 4 },
//         { nome: "Parafusadeira", precoUnitario: 420, quantidade: 12 }
//     ];
    
// Diferentes Tipos de Dados: Você está lidando com strings, números inteiros e decimais.

// Múltiplas Condições: O sistema precisa checar se falta produto E se o preço muda pelo volume.

// Transformação de Objeto: Você está pegando um objeto simples e gerando um "Resumo" mais complexo.



// const oficina = () => {
//     const estoque = [
//         { nome: "Furadeira Makita", precoUnitario: 500, quantidade: 3 },
//         { nome: "Jogo de Brocas Vonder", precoUnitario: 80, quantidade: 15 },
//         { nome: "Disco de Corte", precoUnitario: 25, quantidade: 60 },
//         { nome: "Esmerilhadeira", precoUnitario: 350, quantidade: 4 },
//         { nome: "Parafusadeira", precoUnitario: 420, quantidade: 12 }
//     ]; 

//     let quantidade = 0;
//     let precoUnitario = 0;
//     let totalEmEstoque = 0;
//     //let nomeproduto = String; assim ela vira um string construtura, para dar variavel de testo basta ""
//     let nomeproduto = "";

//     for(let i = 0; i < estoque.length; i++){

//         //eu coloco acumuladores depois do for para n comprometer o loop, mas n tem problemas eu usar atribuição antes

//         nomeproduto = estoque[i].nome;
//         quantidade = estoque[i].quantidade;
//         precoUnitario = estoque[i].precoUnitario;

//         if(estoque[i].quantidade <= 5){
//             estoque[i].status = "Reabastecer" //.status = nova "gaveta" para o array
//              console.log(`o item ${nomeproduto} precisa ser reabastecido` );
//         }
//          //totalEmEstoque += precoUnitario * quantidade; para calcular sem os descontos, antes das regras do desconto
//         if(estoque[i].quantidade >= 10){
//             precoUnitario = estoque[i].precoUnitario * 0.8; //no geral para dar desconto eu sempre uso o valor que falta do 100%, se quer 60% de desconto eu coloco * 0.4
            
//             console.log(`Promoção ativa, comprou mais de 10 produtos.` );
//         }

//          totalEmEstoque += precoUnitario * quantidade; // para calcular com os descontos, depois da regra 
//         //eu coloco acumuladores depois do for para n comprometer o loop, mas n tem problemas eu usar atribuição antes

           
//         //totalEmEstoque += estoque[i].precoUnitario * estoque[i].quantidade; n precisa dos [i] pq eu declarei lá em cima do que se trata 
//         // tinha esqueci de fazer ele acumulador ja quer era uma logica de somar todas as quantidades +=
        
//             console.log(estoque[i].quantidade ,  "o tipo quantidade", typeof quantidade);
//             console.log(estoque[i].precoUnitario ,  "o tipo precoUnitario", typeof precoUnitario);
//             console.log(estoque[i].nome , "o tipo nomeproduto", typeof nomeproduto);
//     }


//         console.log(`Patrimônio de R$ ${totalEmEstoque}`)
//         console.log(`==============//===============`)
//         console.log(totalEmEstoque , "o tipo totalEmEstoque", typeof totalEmEstoque);
//         console.log(`==============//===============`)
//     return `produto ${nomeproduto , typeof nomeproduto} quantidade de preço do estoque ${totalEmEstoque, typeof totalEmEstoque}
//      a quantidade comprada${quantidade }`
    
// }  
// oficina(); 



    // console.log(`Produto Atual: ${nomeproduto[i]}`);
    // console.log(`Valor calculado nesta volta: R$ ${totalEmEstoque}`);
    // console.log(`-----------------------------`);






    //desafio pessoal, criar um sistema que digito um numero de 1 a 26 e ele retorna a quantidade de letras correspondente do alfabeto

   // plus, só retornar 1 a que foi digitada 

    // const contagemalfabeto = (numerodigitado) => { //preciso estudar quando coloco no parametro ou declaro depois... 
    //     const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //      let listaalfabeto = [];
    //     //let numerodigitado = 0; aq ou no parametro? entender as diferenças !!!!!!!!!!!!!IMPORTANTE

    //     //Para um sistema de input (onde o usuário escolhe), use sempre o Parâmetro. usar let numerodigitado = 0; é usar valor fixo num harcoding
    //     //imaginar o hardcoding nesse sentido como um numeru estacionario no cod, n faz sentido pq preciso do input para devolver algo ! 
    //     // ou seja, um valor estacionario(let numerodigitado = 0;) ele n vai ditar o retorno do input, o input n vai manipular ele dentro do cod assim !! 

    //      if(numerodigitado < 1 || numerodigitado > 26){
    //         //regra para delimitar as "regras do jogo", por isso vou usar o numerodigitado no let do for...
    //             return "Ops, só pode digitar numeros entre 1 a 26!"
    //         }
    //         //listaalfabeto += alfabeto; viajei, vou conconcatenar o texto fazendo isso, vai um loop de a, ab, abc, abcd, ou seja, não!!
    //       for(let i = 0; i < numerodigitado; i++){ //no começo usei .length, isso só vale quando quero puxar toda a lista da array !!!!! 
    //        //tbm usei o alfabeto invez do numerodigitado no let =, isso foi ruim uma vez q vou manipular o numero entre 1 a 26 digito.. 

    //         //i < alfabeto.length: O loop percorreria as 26 letras sempre, ignorando o que o usuário pediu.
    //         //i < numerodigitado: O loop para exatamente onde o usuário mandou. Se ele digitou 3, o i vai ser 0, 1, 2 e para.


    //         listaalfabeto.push(alfabeto[i]); //retorna a lista de todas as letras correspondentes ao numero 
    //         //listaalfabeto = alfabeto[i]; // para retornar só 1 valor !!!! 
           

    //          //const listaalfabeto = alfabeto [numerodigitado - 1]; //para fazer sem o for direto
    //          //return listaalfabeto ; 
    //     }
    //      return listaalfabeto ;
    // }
        
        
    
    // contagemalfabeto();
    // console.log(contagemalfabeto(21));
    

    //FAZER A LOGICA DO ALFABETO MAS INVERSO, DOS NUMEROS PUXAR A LETRA

//     const alfabetoinverso = (letradigitada) => {
//         const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
//         let letraencontrada = "";

//             for(let i = 0; i < numeros.length; i++){

//                 if(numeros[i] === letradigitada){

//         switch (numeros[i]) {
//                 case 1: letraencontrada = "A"; break;  
//                 case 2: letraencontrada = "B"; break;
//                 case 3: letraencontrada = "C"; break;
//                 case 4: letraencontrada = "D"; break;
//                 case 5: letraencontrada = "E"; break;
//                 case 6: letraencontrada = "F"; break;
//                 case 7: letraencontrada = "G"; break;
//                 case 8: letraencontrada = "H"; break;
//                 case 9: letraencontrada = "I"; break;
//                 case 10: letraencontrada = "J"; break;
//                 case 11: letraencontrada = "K"; break;
//                 case 12: letraencontrada = "L"; break;
//                 case 13: letraencontrada = "M"; break;
//                 case 14: letraencontrada = "N"; break;
//                 case 15: letraencontrada = "O"; break;
//                 case 16: letraencontrada = "P"; break;
//                 case 17: letraencontrada = "Q"; break;
//                 case 18: letraencontrada = "R"; break;
//                 case 19: letraencontrada = "S"; break;
//                 case 20: letraencontrada = "T"; break;
//                 case 21: letraencontrada = "U"; break;
//                 case 22: letraencontrada = "V"; break;
//                 case 23: letraencontrada = "W"; break;
//                 case 24: letraencontrada = "X"; break;
//                 case 25: letraencontrada = "Y"; break;
//                 case 26: letraencontrada = "Z"; break;
//                 default: letraencontrada = "Inexistente"; break;
//         }
//         return letraencontrada;
        
//         }

                    
//                 }
//                  return "not found";
       
//             }
//             console.log((alfabetoinverso(C)));
// alfabetoinverso();

//vi um exemplo com switch e decidi usar para ver, mas é pessimo, foge muito do KISS, tive dificuldade tbm, escreve tudo na mão para descobrir q coloquei "" onde n devia e tive q reescrever
//era para ser um estudo de usar o switch, mas na real q foi uma pessima solução para um problema mais simples.... vou refazer a logica, e depois estudar sobre onde e como usar o switch de forma correta....

    
//O switch é usado quando você tem uma única variável que pode assumir vários valores constantes diferentes e você quer executar um bloco de código específico para cada um deles.
//Em ADS, a gente diz que o switch é uma alternativa mais limpa e organizada ao "ninho" de if...else if...else quando a comparação é sempre de igualdade.
// ou seja para um cod que por exeplo vai fazer promoções diferentes nos produtos acaba se usando o switch para o cod ficar sem mt if, mas tem q ser usado em casos especificos.. 









//O método indexOf() no JavaScript retorna o primeiro índice (posição) em que um elemento/string é encontrado, ou -1 se não existir.
//  Funciona tanto para strings quanto para arrays,
//  comparando valores com igualdade estrita (===) e diferencia maiúsculas de minúsculas.

const alfabetoinverso = (letra) => {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const indice = alfabeto.indexOf(letra.toUpperCase()); //.toUpperCase para n fazer diferença se é maiuscula ou minuscula 

        if(indice === -1){ //primeiro checa se o usuario digita qlqr coisa além de letra
            return "Não é letra"  //usar o -1 é padrão universal, pq é numero impossivel dentro de arrays q começam do 0
        }

        return indice + 1  // retorna o indice +1 pq array começa do 0 então vai ficar sempre 1 atrás se eu n colocar..
    
}
console.log(alfabetoinverso("a"));