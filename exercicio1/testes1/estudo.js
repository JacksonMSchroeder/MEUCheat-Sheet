

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


//          //const listaalfabeto = alfabeto [numerodigitado - 1]; //para fazer sem o for direto, mas sem lista tbm
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

// const alfabetoinverso = (letra) => {
//     const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     const indice = alfabeto.indexOf(letra.toUpperCase()); //.toUpperCase para n fazer diferença se é maiuscula ou minuscula 

//         if(indice === -1){ //primeiro checa se o usuario digita qlqr coisa além de letra
//             return "Não é letra"  //usar o -1 é padrão universal, pq é numero impossivel dentro de arrays q começam do 0
//         }

//         return indice + 1  // retorna o indice +1 pq array começa do 0 então vai ficar sempre 1 atrás se eu n colocar..

// }
// console.log(alfabetoinverso("a"));

// O veredito para  estudo:
// No dia a dia de um desenvolvedor moderno:

// Para saber se existe: usa-se .includes().

// Para achar o valor de um objeto: usa-se .find().

// Para achar a posição de um objeto: usa-se .findIndex().

// Para achar a posição de algo simples (tipo o seu alfabeto): usa-se o indexOf.



////////////////

// // Exercício Médio: O Localizador de Itens (Logística)
// // Imagine que você está trabalhando no armazém e tem uma lista de produtos em uma prateleira específica.

// // A Lista: const produtos = ["Monitor", "Teclado", "Mouse", "Headset", "Cadeira"];

// // O Objetivo: Crie uma função que receba o nome do produto.

// // Se o produto estiver na lista, retorne: "Produto encontrado na posição X" (lembrando que para o humano o Monitor é 1).

// // Se não estiver, retorne: "Produto inexistente".

// // Desafio: Tente fazer uma versão usando for e outra usando indexOf.


// // const contadorprodutos = (produto) => {
// //     const produtos = ["Monitor", "Teclado", "Mouse", "Headset", "Cadeira"];

// //      // const indice = nomedaarray.indexOf(nomedoparametro);

// //     const padraodigitar = produtos.map(produtos => produtos.toUpperCase()); //para fazer aceitar todas as letras
// //     const busca = produto.toUpperCase();

// //     const indice =  padraodigitar.indexOf(busca);

// //     if(indice === -1){ //descarta a falsa
// //         return "Produto não existe"        
// //     }
// //         return indice;
// // }
// // console.log(contadorprodutos("tecLado"));


// ///

// // const contadorprodutos = (produto) => {
// //     const produtos = ["Monitor", "Teclado", "Mouse", "Headset", "Cadeira"];


// //     const padraodigitar = produtos.map(produtos => produtos.toUpperCase()); //se transfomra na lista
// //     const busca = produto.trim().toUpperCase(); // se transforma no parametro
// //                     //trim() para limpar espaços !!

// //     for(let i = 0; i < padraodigitar.length; i++){

// //         if(busca === padraodigitar[i]){
// //             return busca

// //         }



// // }
// //     return "Produto não encontrado"
// // }
// // console.log(contadorprodutos("mouse                   "));

// // O Ritual da Comparação de Strings
// // Para o seu if (parametro === array[i]) ser infalível, você geralmente faz isso:

// // 1. A "Limpeza" (Normalização)
// // Antes do if, você garante que os dois lados falem a mesma língua.

// // Case: toUpperCase() ou toLowerCase().

// // Espaços: .trim() (remove espaços invisíveis no início ou fim).

// // 2. O "Duelo" (A Comparação)
// // Aqui é onde o seu if entra em ação dentro do for.

// // Dica: O === (estritamente igual) é o seu melhor amigo. Ele garante que "Mouse" seja "Mouse" e não o número 0, por exemplo.

// // 3. O "Plano B" (O Retorno Negativo)
// // Como você fez no seu código, o return "Não encontrado" fica fora do loop. É o aviso de que o "duelo" aconteceu com todo mundo da lista e ninguém venceu.


// // A Lista: const banidos = ["steam_123", "steam_456", "steam_789"];

// // O Objetivo: Crie uma função chamada verificarJogador que receba um ID.

// // Se o ID estiver na lista de banidos, retorne true.

// // Se não estiver, retorne false.

// // Dica de ADS: Pense em como o -1 do indexOf pode te ajudar a retornar esse true ou false de um jeito bem curto.

// // const verificarJogador = (ban) => {
// //     const banidos = ["steam_123", "steam_456", "steam_789"];

// //     const banidosinput = banidos.map(b => b.toUpperCase());
// //     const baninput = ban.trim().toUpperCase();


// //     return  banidosinput.indexOf(baninput) !== -1;

// // // -1 é sempre para indexof

// // // === -1 é pq ta fora da array

// // // !== -1 está dentro da array


// // }
// // console.log(verificarJogador("   sTeaM_123 "));
// // console.log(verificarJogador("steam_832"));






// //só para fazer ignorando a logica do true e false para treino 
// // const verificarJogador = (ban) => {
// //     const banidos = ["steam_123", "steam_456", "steam_789"];

// //     const banidosinput = banidos.map(ban => ban.toUpperCase());
// //     const userbusca = ban.trim().toUpperCase();

// //     for(let i = 0; i < banidosinput.length; i++){

// //         if(userbusca === banidosinput[i]){
// //             return `${userbusca} é banido`
// //         }

// //     }
// //     return "user limpo"




// // }
// // console.log(verificarJogador("steam_123"));



// // 3. Exercício DIFÍCIL: O Contador de Ocorrências
// // Este aqui vai exigir que você use o for de um jeito mais avançado, porque o indexOf sozinho não resolve.

// // A Lista: const historicoGols = ["Vasco", "Flamengo", "Vasco", "Vasco", "Palmeiras", "Fluminense"];

// // O Objetivo: Crie uma função que receba o nome de um time e conte quantas vezes esse time aparece na lista.

// // Exemplo: Se eu digitar "Vasco", a função deve retornar 3. Se digitar "Grêmio", retorna 0.

// // Por que é difícil? Porque você vai precisar de uma variável "contadora" (ex: let total = 0;) dentro da função que aumenta cada vez que o for encontrar o nome do time.

// const contarTimes = (times) => {
//     const equipes = ["Vasco", "Flamengo", "Vasco", "Vasco", "Palmeiras", "Fluminense"];
//     let total = 0;
//     let encontrados = [];
//     //let lista = []; depois tentar com for para mostra eles ne pratica 

//     const inputequipes = equipes.map(e => e.toUpperCase());
//     const timesinput = times.trim().toUpperCase();

//    for(let i = 0; i < inputequipes.length; i++){

//     if(timesinput === inputequipes[i]){
//        console.log(times); 
//         total ++ //soma quando encontra o time
//         encontrados.push(inputequipes[i]);
//     }
//     //total++ === total = total + 1
//     // poderia ser em outros casos total +=, ai seria total = total +



//    }
//    return `Os time foi encontrado ${total}`

// }
// console.log(contarTimes("Vasco"));
// console.log(contarTimes("Flamengo"));
// console.log(contarTimes("Gremio"));



// //acumulador
// // const carrinho = [
// //     { produto: "Mouse", preco: 50 },
// //     { produto: "Teclado", preco: 150 },
// //     { produto: "Monitor", preco: 800 }
// // ];

// // let totalConta = 0;

// // for (let i = 0; i < carrinho.length; i++) {
// //     totalConta += carrinho[i].preco; // Pega o 0 e soma 50, depois + 150, depois + 800
// // }
// // // Resultado: 1000


// Contexto:
// Você está desenvolvendo o módulo de fechamento de caixa de um sistema de vendas. O sistema recebe um Array de Objetos contendo os dados dos clientes e uma String com o nome do cliente que está no balcão agora.

// Sua Missão (Os Requisitos):

// A Busca Infalível (Busca Linear):

// Crie uma função que percorra o array clientes.

// A busca deve ser insensível a maiúsculas/minúsculas e ignorar espaços extras (use .trim() e .toUpperCase()).

// Se o cliente não existir na lista, a função deve retornar: "Erro: Cliente não localizado no banco de dados."

// O Motor de Descontos (Regras de Negócio):

// Regra A (Boas-Vindas): Se for a primeira compra do cliente (primeiraCompra: true), ele ganha 15% de desconto sobre o valor da última compra.

// Regra B (Fidelidade): Se o cliente tiver 10 ou mais compras no histórico (historicoCompras >= 10), ele ganha 10% de desconto fixo.

// Importante: Os descontos são cumulativos. Se ele for novo E tiver histórico (o que é raro, mas o sistema deve prever), aplique um e depois o outro.

// O Relatório de Saída (Saída de Dados):

// A função deve retornar uma String formatada (usando Template Strings `) contendo:

// O nome do cliente encontrado.

// O valor bruto (sem desconto).

// O valor total de descontos aplicados (em Reais).

// O valor final líquido a pagar.

// Extra (O Analista):

// Use .toFixed(2) para que os valores de dinheiro fiquem sempre com duas casas decimais (ex: R$ 150.00).






// const buscarcliente = (nomeDoCliente) => {
//         const clientes = [
//     { nome: "Jackson", tipo: "Premium", historicoCompras: 10, valorUltimaCompra: 250.00, primeiraCompra: false },
//     { nome: "Larissa", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 150.00, primeiraCompra: true },        //lista
//     { nome: "Budié", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 100.00, primeiraCompra: true },
//     { nome: "Tainara", tipo: "Premium", historicoCompras: 20, valorUltimaCompra: 300.00, primeiraCompra: false },
//     { nome: "Faith", tipo: "Standard", historicoCompras: 5, valorUltimaCompra: 80.00, primeiraCompra: false },
//     { nome: "Cláudio", tipo: "Premium", historicoCompras: 30, valorUltimaCompra: 450.00, primeiraCompra: false },
//     { nome: "Marcos", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 200.00, primeiraCompra: true },
//     { nome: "Jéssica", tipo: "Premium", historicoCompras: 9, valorUltimaCompra: 120.00, primeiraCompra: false },
//     { nome: "Enzo", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 90.00, primeiraCompra: true },
//     { nome: "Valentina", tipo: "Premium", historicoCompras: 40, valorUltimaCompra: 500.00, primeiraCompra: false },
//     { nome: "Rodrigo", tipo: "Standard", historicoCompras: 15, valorUltimaCompra: 180.00, primeiraCompra: false },
//     { nome: "Aline", tipo: "Premium", historicoCompras: 10, valorUltimaCompra: 210.00, primeiraCompra: false },
//     { nome: "Fabio", tipo: "Standard", historicoCompras: 3, valorUltimaCompra: 130.00, primeiraCompra: false },
//     { nome: "Gisele", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 350.00, primeiraCompra: true },
//     { nome: "Bruno", tipo: "Standard", historicoCompras: 50, valorUltimaCompra: 400.00, primeiraCompra: false },
//     { nome: "Carla", tipo: "Premium", historicoCompras: 7, valorUltimaCompra: 160.00, primeiraCompra: false },
//     { nome: "Douglas", tipo: "Standard", historicoCompras: 10, valorUltimaCompra: 110.00, primeiraCompra: false },
//     { nome: "Elena", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 280.00, primeiraCompra: true },
//     { nome: "Felipe", tipo: "Standard", historicoCompras: 100, valorUltimaCompra: 600.00, primeiraCompra: false },
//     { nome: "Glória", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 150.00, primeiraCompra: true }
// ];
//     const inputnomeDoCliente = nomeDoCliente.trim().toUpperCase();

//     for (let i = 0; i < clientes.length; i++) {
//         if (clientes[i].nome.toUpperCase() === inputnomeDoCliente) {
//             let valor = clientes[i].valorUltimaCompra;
//             let clientestatus = clientes[i].tipo;
//             let primeiraCompra = clientes[i].primeiraCompra;

//             if(clientes[i].primeiraCompra === true){
//                 valor = valor * 0.85;
//             }
//             if(clientes[i].historicoCompras >= 10){ //!==0 para o cliente novo n começar acumulando desconto de dezena
//                 valor = valor * 0.9;
//             }
//             let desconto = clientes[i].valorUltimaCompra - valor;
//             return `Cliente ${inputnomeDoCliente} / gastou ${valor} / O desconto: ${desconto} / é cliente vip? ${clientestatus} / é a priemira compra? ${primeiraCompra}`       
//         }
//     }
// }

// console.log(buscarcliente("JAcksOn"));
// console.log("--- TESTANDO CLIENTES COM 10 OU MAIS COMPRAS (DESCONTO 10%) ---");
// console.log(processarPagamento("Jackson"));   // 10 compras
// console.log(processarPagamento("Tainara"));   // 20 compras
// console.log(processarPagamento("Douglas"));   // 10 compras
// console.log(processarPagamento("Felipe"));    // 100 compras (Múltiplo de 10)

// console.log("\n--- TESTANDO PRIMEIRA COMPRA (DESCONTO 15%) ---");
// console.log(processarPagamento("Larissa"));   // Primeira: true
// console.log(processarPagamento("Budié"));     // Primeira: true
// console.log(processarPagamento("Enzo"));      // Primeira: true
// console.log(processarPagamento("GlóRia"));    // Primeira: true

// console.log("\n--- TESTANDO QUEM NÃO TEM DESCONTO ---");
// console.log(processarPagamento("Faith"));     // 5 compras, Primeira: false
// console.log(processarPagamento("Fabio"));     // 3 compras, Primeira: false
// console.log(processarPagamento("Carla"));     // 7 compras, Primeira: false

// console.log("\n--- TESTANDO CASO ESPECIAL (SÓ NOVO, SEM 10 COMPRAS) ---");
// console.log(processarPagamento("Gisele"));    // Primeira: true, mas 0 compras (Não deve ganhar o de 10)

// console.log("\n--- TESTANDO ERRO DE BUSCA ---");
// console.log(processarPagamento("Neymar"));    // Não está na lista

// console.log("\n--- ============///======== ---");

// console.log(totalCaixaBruto);
// console.log(totalCaixaComDesconto.toFixed(2));


//     let totalCaixaBruto = 0;       
//     let totalCaixaComDesconto = 0; 


// const valorestotais = () => {
//     const clientes = [
//     { nome: "Jackson", tipo: "Premium", historicoCompras: 10, valorUltimaCompra: 250.00, primeiraCompra: false },
//     { nome: "Larissa", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 150.00, primeiraCompra: true },        //lista
//     { nome: "Budié", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 100.00, primeiraCompra: true },
//     { nome: "Tainara", tipo: "Premium", historicoCompras: 20, valorUltimaCompra: 300.00, primeiraCompra: false },
//     { nome: "Faith", tipo: "Standard", historicoCompras: 5, valorUltimaCompra: 80.00, primeiraCompra: false },
//     { nome: "Cláudio", tipo: "Premium", historicoCompras: 30, valorUltimaCompra: 450.00, primeiraCompra: false },
//     { nome: "Marcos", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 200.00, primeiraCompra: true },
//     { nome: "Jéssica", tipo: "Premium", historicoCompras: 9, valorUltimaCompra: 120.00, primeiraCompra: false },
//     { nome: "Enzo", tipo: "Standard", historicoCompras: 1, valorUltimaCompra: 90.00, primeiraCompra: true },
//     { nome: "Valentina", tipo: "Premium", historicoCompras: 40, valorUltimaCompra: 500.00, primeiraCompra: false },
//     { nome: "Rodrigo", tipo: "Standard", historicoCompras: 15, valorUltimaCompra: 180.00, primeiraCompra: false },
//     { nome: "Aline", tipo: "Premium", historicoCompras: 10, valorUltimaCompra: 210.00, primeiraCompra: false },
//     { nome: "Fabio", tipo: "Standard", historicoCompras: 3, valorUltimaCompra: 130.00, primeiraCompra: false },
//     { nome: "Gisele", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 350.00, primeiraCompra: true },
//     { nome: "Bruno", tipo: "Standard", historicoCompras: 50, valorUltimaCompra: 400.00, primeiraCompra: false },
//     { nome: "Carla", tipo: "Premium", historicoCompras: 7, valorUltimaCompra: 160.00, primeiraCompra: false },
//     { nome: "Douglas", tipo: "Standard", historicoCompras: 10, valorUltimaCompra: 110.00, primeiraCompra: false },
//     { nome: "Elena", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 280.00, primeiraCompra: true },
//     { nome: "Felipe", tipo: "Standard", historicoCompras: 100, valorUltimaCompra: 600.00, primeiraCompra: false },
//     { nome: "Glória", tipo: "Premium", historicoCompras: 1, valorUltimaCompra: 150.00, primeiraCompra: true }
// ];


//     for(let i = 0; i < clientes.length; i++){

//         let valor = clientes[i].valorUltimaCompra;
//         totalCaixaBruto += valor; //aq para caixa sem desconto
//         if(clientes[i].primeiraCompra === true){
//                 valor = valor * 0.85;
//             }
//             if(clientes[i].historicoCompras >= 10){ //!==0 para o cliente novo n começar acumulando desconto de dezena
//                 valor = valor * 0.9;
//             }

//         totalCaixaComDesconto += valor; // depois das condições de desconto fazer o += valor com os descontos do if 

//           //return `cxbruto ${totalCaixaBruto} CXcomDesconto ${totalCaixaComDesconto}` tem q ser fora do loop !
//     }
//     return `cxbruto ${totalCaixaBruto} CXcomDesconto ${totalCaixaComDesconto}`

// }   
// console.log(valorestotais());


//lembrar sempre de separar as funcionalidade, não colocar função de busca e acumuladora junto !! ou duas função q faz coisas difentes
// não ficar fazendo gambiarra para blocar duas funcionalidades em um só cod, um só loop, se atentar bastante para separar bem o cod!!
//TIPOS de funcionalidades que vi para ter um norte para conseguir as separar: 
//Entidades: Definem apenas a estrutura e o formato dos dados (os moldes do seu sistema).
// Serviços: Onde fica a lógica e as regras de negócio (o "cérebro" que decide o que pode ou não acontecer).
// Repositórios: Responsáveis pela comunicação externa, como salvar no Supabase ou buscar na API da Steam.
// Controladores: Funcionam como a porta de entrada, recebendo pedidos do usuário e apenas repassando para quem sabe resolver.




// A Entidade (O Molde):

// Um objeto Aluno com: nome, plano (Mensal/Anual), mensalidade, treinosNoMes e statusPagamento (boolean).

// O Repositório (A Busca):

// Crie uma função que busque o aluno pelo nome no array (use .trim() e .toUpperCase()).

// O Serviço (A Lógica de Negócio):

// Regra de Acesso: Se statusPagamento for false, retorna: "Acesso Negado: Mensalidade Pendente".

// Regra de Bônus: Se o aluno treinou mais de 20 vezes no mês, ele ganha 5% de desconto na mensalidade do mês que vem.

// Regra de Plano: Se o plano for "Anual", ele já tem um desconto fixo de 10% sobre o valor base.

// O Acumulador (O Sistema):

// Crie uma variável global ou externa para acumular o Total de Mensalidades a Receber de todos os alunos da academia (já aplicando os descontos de quem tem direito).

// 🛠️ Sua Estrutura de Arquivos (Como você deve organizar):
// Para não virar espaguete, tente separar assim:

// funcaoCalculo.js (Serviço): Uma função que recebe apenas os dados técnicos (plano, mensalidade, treinos) e retorna o valor final com desconto. 
// Ela não sabe nada de arrays ou nomes.

// funcaoBusca.js (Repositório/Controlador): Uma função que recebe o nome, percorre o array, chama a função de cálculo e retorna a string formatada de sucesso ou erro.

// funcaoRelatorio.js (Acumuladora): Uma função que percorre a lista inteira e diz: "O faturamento bruto da academia é X, e com os descontos aplicados será Y".


///////////////==////////////////



// 🛒 O Desafio: Carrinho de Compras Tech
// Você tem um array de produtos. Cada produto tem: nome, categoria, preco e qtd.

// As Regras de Negócio:

// Imposto (Obrigatório): Todo produto tem 10% de imposto sobre o preço base.

// Desconto Cupom: Se a categoria for "Hardware", o cliente ganha 15% de desconto no valor do produto (antes do imposto).

// Frete Grátis: Se o valor total do item (preço * qtd) passar de R$ 500, o frete é 0. Se não, o frete custa R$ 20 por item.

// O que o seu Acumulador deve entregar no final:

// Total Bruto: (Soma de preco * qtd de tudo).

// Total de Impostos: (Quanto o governo levou no total).

// Total de Descontos: (Quanto o cliente economizou no total).

// Valor Final: (O que o cliente realmente vai pagar no cartão).

// const checkout = () => {
//     const produtos = [
//         { nome: "Teclado Mecânico", categoria: "Periférico", preco: 200, qtd: 2 },
//         { nome: "Placa de Vídeo", categoria: "Hardware", preco: 1500, qtd: 1 },
//         { nome: "Mousepad", categoria: "Periférico", preco: 50, qtd: 1 },
//         { nome: "Memória RAM", categoria: "Hardware", preco: 300, qtd: 2 }
//     ];

//     let totalBruto = 0;
//     let imposto = 0;
//     let totalDescontos = 0;
//     let valorFinal = 0;
//     let frete = 0;
//     //let frete  =  20;

//     for (let i = 0; i < produtos.length; i++) {
//         let valorcliente = produtos[i].preco
//         totalBruto += produtos[i].preco * produtos[i].qtd;
//         imposto += (produtos[i].preco * produtos[i].qtd) * 0.10

//         let descontocliente = 0;
//         if(produtos[i].categoria === "Hardware" ){
//             descontocliente = valorcliente * 0.15

//         }
//         if((produtos[i].preco * produtos[i].qtd) < 500){ 
//          frete += 20 * produtos[i].qtd;

//         }

//         //totalImpostos += imposto;
//         totalDescontos += descontocliente;

//     }

//     valorFinal = (totalBruto + imposto + frete)  - totalDescontos;


//     return `Bruto: ${totalBruto} | Impostos: ${imposto} | Descontos: ${totalDescontos} | TOTAL: ${valorFinal}`;
// }
// console.log(checkout());


// Exercício 1: O Contador de Pontos (Soma Simples)
// Imagine que você tem um array com as pontuações de várias partidas. Você precisa calcular o total de pontos.

// O Array:
// const pontuacoes = [10, 15, 8, 20, 30];

// Com for: Crie uma variável let total = 0 e use um loop para somar cada item.

// Com reduce: Use o método para chegar ao mesmo resultado em uma única linha.

//        let total = 0;
// const contador = () => {
//     const numeros = [10, 15, 8, 20, 30];


//     for(let i = 0; i < numeros.length; i++){
//         total += numeros[i];
//         //somatotal += total;

//     }                            
//     return ` o total é ${total}`;
// }
// console.log(contador(total));


// //


// const numeros = [10, 15, 8, 20, 30];

// const total = numeros.reduce((acumulador, atual) => {
//     0
//     return acumulador + atual;
// }, 0);

// console.log(total);


// const numeros = [10, 15, 8, 20, 30];

// const lerolero = numeros.map(numero => numero * 10 );

// console.log(lerolero);


// const numeros = [10, 15, 8, 20, 30];

// const lerolero = numeros.map((numero , index, arraycompleto ) => {
// //console.log(numero); 
// //console.log(index); 
// //console.log(arraycompleto);
// return numero * 10;
// }
//   );
// console.log(lerolero);



//reduce
// const numeros = [10, 15, 8, 20, 30];

// const soma = numeros.reduce((acumulador, valoratual) => {

//     const total = acumulador + valoratual ;

//     return total;
// }, 0) ; //, 20 ) // com virgula e o numero eu posso manipular o numero que começar o array, boa pratica sempre deixar 0 ou qlqr nº
// console.log(soma);

//filter 

// const numeros = [10, 15, 8, 20, 30, 31 ,23, 11];

// const returnopar = numeros.filter( num => {
//     return num % 2 === 0;

// })
//  console.log(returnopar);

// 🛒 O Desafio: Carrinho de Compras Tech
// Você tem um array de produtos. Cada produto tem: nome, categoria, preco e qtd.

// As Regras de Negócio:

// Imposto (Obrigatório): Todo produto tem 10% de imposto sobre o preço base.

// Desconto Cupom: Se a categoria for "Hardware", o cliente ganha 15% de desconto no valor do produto (antes do imposto).

// Frete Grátis: Se o valor total do item (preço * qtd) passar de R$ 500, o frete é 0. Se não, o frete custa R$ 20 por item.

// O que o seu Acumulador deve entregar no final:

// Total Bruto: (Soma de preco * qtd de tudo).

// Total de Impostos: (Quanto o governo levou no total).

// Total de Descontos: (Quanto o cliente economizou no total).

// Valor Final: (O que o cliente realmente vai pagar no cartão).


//     const produtos = [
//         { nome: "Teclado Mecânico", categoria: "Periférico", preco: 200, qtd: 2 },
//         { nome: "Placa de Vídeo", categoria: "Hardware", preco: 1500, qtd: 1 },
//         { nome: "Mousepad", categoria: "Periférico", preco: 50, qtd: 1 },
//         { nome: "Memória RAM", categoria: "Hardware", preco: 300, qtd: 2 }
//     ];

//      const formatador = new Intl.NumberFormat('pt-BR', { //tranformar em BRL
//     style: 'currency',
//     currency: 'BRL'
// });



// //map
// const checkout = produtos.map( produtos => {

//     const total = produtos.preco * produtos.qtd;
//     const promohardware = produtos.categoria === "Hardware" ? total * 0.15 : 0   //pensar em fluxo, primeiro vou ter o valor total e ir aplicando as regras de negocio !!
//     const preco = total - promohardware;                        // toto >> descontos(if) >> imposto em cima do valor >> "frete" ou preço final
//     const imposto = preco * 1.10
//     const frete = total > 500 ? imposto : imposto + 20






// // return {
// //     nome: produtos.nome,
// //     valorOriginal: total.toFixed(2),            // O bruto (preco * qtd)
// //     descontoAplicado: promohardware.toFixed(2), // O quanto ele economizou por ser Hardware        //to fixed n chama o formatador em brl, só pula casa 
// //     valorTaxado: preco.toFixed(2),              // O valor base que o governo olhou
// //     impostoTotal: imposto.toFixed(2),           // O preço já com os 10%
// //     fretePago: total > 500 ? "De graça" : 20 , // Se teve que pagar frete ou não
// //     valorFinal: frete.toFixed(2),     // O "boleto" final  
// // };
// return {
//     nome: produtos.nome,
//     valorOriginal: formatador.format(total), 
//     descontoAplicado: formatador.format(promohardware),
//     valorTaxado: formatador.format(preco),
//     impostoTotal: formatador.format(imposto),
//     fretePago: total > 500 ? "De graça" : formatador.format(20), 
//     valorFinal: formatador.format(frete) 
// };


// // eu poderia colocar um const imposto = 1.10 ai usar imposto em todo o cod

// // const totalbrutoperiferico = filtroperiferico.reduce((acumulador, produtos)=>  {  //reduce
// //        return acumulador + (produtos.preco * produtos.qtd * imposto);

// // ai se o imposto mudar basta eu mudar um numero dai, fica mais limpo o profissional 


// //reduce
// });
// const filtrofretegratis = produtos.filter( produtos => produtos.preco * produtos.qtd * 1.10 > 500 ); //não precisa que no map ja resolvi com a logica
// //porem faz sentido para chamar ele para um filtro de site por exemplo.. ai jogar ele no fronte ja tenho a variavel certa para isso 

// const filtroperiferico = produtos.filter( produtos => produtos.categoria !== "Hardware" );  //filtro
// const filtrohardware = produtos.filter( produtos => produtos.categoria === "Hardware" ); // colocar o ! seria o inverso, ai procuraria tudo q n é hardware

// const totalbrutoperiferico = filtroperiferico.reduce((acumulador, produtos)=>  {  //reduce
//        return acumulador + (produtos.preco * produtos.qtd * 1.10);


// }, 0);

// const totalbrutohardware = filtrohardware.reduce((acumulador, produtos)=>  {  //reduce
//        return acumulador + (produtos.preco * produtos.qtd * 1.10);


// }, 0);

// const totalgeral = produtos.reduce((acumulador, produtos) => {          //reduce
//         return acumulador + (produtos.preco * produtos.qtd * 1.10);
// }, 0 );

// const totalgeralsemimposto = produtos.reduce((acumulador, produtos) => {          //reduce
//         return acumulador + produtos.preco * produtos.qtd ;
// }, 0 );


// const totalExibicaoper = formatador.format(totalbrutoperiferico);
// const totalExibicaoHard = formatador.format(totalbrutohardware);
// const totalgeralexibicao = formatador.format(totalgeral);
// const totalsemimpostoexib = formatador.format(totalgeralsemimposto);



// // const projecaovendas = produtos.map( produtos => {
// //     return {...produtos, quantidade: produtos.qtd + 10}
// // }).reduce((acumulador, produtos) => {
// //     return  acumulador + produtos.preco * produtos.quantidade ;   //overcoding com o map ali, ja tenho o dado só chamar!!

// // }, 0)


// //refatorando.. nota importante, como vou lidar com "sites vivos" em geral eu não vou ter q me preocupar em adicionar quantidades num map
// //as quantidades de produtos e preços vão ser dinamicos 
// //"o codigo não deve tentar curar uma doença que esta nos dados".
// const projecaovendas = produtos.reduce ((acumulador, produtos)=> {
//     const novaquantidade = produtos.qtd + 10;
//     return acumulador + produtos.preco * novaquantidade;


// }, 0)

// const projecaovendascomimposto = produtos.reduce ((acumulador, produtos)=> {
//     const novaquantidade = produtos.qtd + 10;
//     return acumulador + (produtos.preco * novaquantidade * 1.10);


// }, 0)




// const exibirprojecao = formatador.format(projecaovendas);
// const exibirprojecaocomimposto = formatador.format(projecaovendascomimposto);

//total
// const totalbruto = produtos.reduce((acumulador, produtos)=>  {
//        return acumulador + total;
// }, 0);


//filter antes do total bruto, antes do reduce para considerar ela na conta final, mas pode ser antes do map para eu definir no que quero trabalhar especificamente !!!


//ai o fluxo q fiz e posso ter na cabeça , primeiro o array ou a chamada para o acesso dos dados, ai a manipulção, se for dinheiro ja lança um formatador 
//de dinheiro embaixo do array, tipo transformar tudo em brl, ai tu vai lançando os formato em cada "return" NomeVariavelFormatadora.format() durante  cod
// ai tu lança o map, e vai colocando as regras do negocio, ai vem os impostos, os descontos e tudo mais 
//ai depois lança o filtro, ai se consegue adequar o passa ou não por ele, por caracteristicas, ou preço, só manipular
//ai depois o reduce, que vai somar tudo considerando as regras ou não do filtro, ai vc vai fazer ele como acumulador.. 

// o filtro pode vir antes ou depois do map, depende do objetivo, se for muito grande o site, ou se quero manipular só uma parte dos dados..

// console.log(checkout);
// console.log(`total periferico:  ${totalExibicaoper}`);
// console.log(`total hardware:  ${totalExibicaoHard}`);
// console.log(`total geral:  ${totalgeralexibicao}`);
// console.log(`Receita Bruta de venda sem imposto ${totalsemimpostoexib}`)
// //console.log(filtrofretegratis);
// console.log(`A venda de 10 quantidade de todos os produtos : ${exibirprojecao}`);
// console.log(` venda de 10 quantidade de todos os produtos considerando o imposto : ${exibirprojecaocomimposto}`);





///////////////////////////////====////////////////////////////








// const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// const retornoalfabeto = 21 ; //aq a qauntidade do input

// // if (retornoalfabeto < 1 || retornoalfabeto > 26) {
// //     console.log("Número inválido!");
// //     return; 
// // }

//  const  resultado = (retornoalfabeto < 1 ||  retornoalfabeto > 26) ?  //assim eu crio ums variavel só ternaria com filtro para suplir a necessidade
//  "retorno invalido !" : alfabeto.filter( (letra, index) => { return index < retornoalfabeto;  // letra(conteudo) = conteudo da posição, index(endereço) = qual posição 

// });

// console.log(resultado);

// const qualletra = alfabeto[retornoalfabeto];
// const letra = qualletra + (retornoalfabeto + 1 );

// console.log(qualletra);
//});


// Sempre que o código dentro deles for de apenas uma linha, você pode remover o return e as chaves {} para o código ficar bem "síntese", assim:

// const dobro = nums.map(n => n * 2);

// const maiores = nums.filter(n => n > 10);


// Nível 1: O Map (Transformador)
// Cenário: Você tem uma lista de preços em números inteiros, mas precisa exibir para o usuário com o símbolo de "R$".

// Dado: const precos = [10, 25, 50, 100];

// Tarefa: Crie um novo array onde cada número se transforme em uma string formatada (ex: "R$ 10").

// Dica: O map sempre devolve um array do mesmo tamanho do original, mas com os valores transformados.

// const precos = [10, 25, 50, 100];

// const formatador = new Intl.NumberFormat('pt-BR', { //tranformar em BRL                     IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     style: 'currency',
//     currency: 'BRL'
// });

// const novonumero = precos.map((item , index) => {
//     return formatador.format(item); //usar "item" primeiro parametro vai pegar conteudo de cada objeto
//                                     //usar o index vai pegar só o endereço, ah vai estar o 3 que é a quarta posição,
//                                     //geralmente é raro usar o index num map, se quer algo especifico usa o filter
//                                     // mas pode ser algo do tipo return index % 2 === 0 ? par : impar 



// })
// //const exibidor = formatador.format(novonumero); como o map vai indice por indice tem q usar no escopo dele


// console.log(novonumero);


// Filter + Map: Você joga gente fora e transforma o que sobrou. (O array diminui).

// Map com Ternário: Você mantém todo mundo, mas "etiqueta" ou transforma de forma condicional. (O array mantém o tamanho).     !!!IMPORTANTE logica para usar o map 
//      concatenado com o filter ou nao


// Exercício 2: O Filter (O Segurança)
// Cenário: Você tem uma lista de notas de alunos e quer criar um novo array apenas com quem foi aprovado (nota maior ou igual a 7).

// Dado: const notas = [4.5, 8.0, 5.5, 10, 7.0, 6.5];

// Tarefa: Crie o array aprovados.

// O que observar: O filter não muda o valor (não usa o Intl aqui), ele só decide se o número entra ou não no novo array baseado em um teste de true ou false.


// const notas = [4.5, 8.0, 5.5, 10, 7.0, 6.5]; 

// const aprovados = notas.filter((item, index) => {
//     return item >= 7; 
// });
// console.log(aprovados);
//bem facil, um "if gourmet", se atentar a condição do return sempre ao lidar com filter!


// Desafio 3: O Reduce (O Acumulador)
// Agora o bicho pega um pouco mais, mas você já pegou a lógica de parâmetros, então vai ser tranquilo. O reduce não quer transformar, nem filtrar; ele quer condensar tudo em uma coisa só (tipo somar o total de uma nota fiscal).

// Dado: const itensCarrinho = [15, 30, 45, 10];

// Tarefa: Somar tudo para ter o valor total.

// const itensCarrinho = [15, 30, 45, 10];

// const total = itensCarrinho.reduce((acumulador , num) => { //reduce pode ter 3 parametros, primeiro sempre vai ser o acumulador acc
//     return acumulador + num;                               //segundo vai ser o conteudo do endereço, o que esta dentro da posição
//                                                            //terceiro o endereço.       >>é um map e filter com um parametro acumulador na frente 
// }, 0)
// console.log(total);

// Nível 4: A Esteira de Produção (Filter + Map)
// Cenário: Você recebeu uma lista de peças do estoque. Algumas estão com o valor zerado (erro de sistema)
//  e você precisa ignorar essas. Das que sobraram, você precisa aplicar um imposto de 10% e formatar como moeda.

// Dado: const pecas = [0, 150, 300, 0, 500];

// Sua Missão: 1. Filtre apenas as peças que têm valor maior que 0.
// 2. Transforme as que sobraram somando 10% ao valor.
// 3. Formate o resultado final usando o seu formatador.format.

// const pecas = [0, 150, 300, 0, 500];

// const formatador = new Intl.NumberFormat('pt-BR', { //tranformar em BRL                     IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     style: 'currency',
//     currency: 'BRL'
// });

// const estoqueinteiro = pecas.reduce((acc, valor) => {return acc + valor  }, 0); //SEMPRE LEMBRA DO 0 NO REDUCE, TINHA ESQUECIDO

// const estoquecomimposto = pecas.reduce((acc , valor) => {return acc + valor * 1.10}, 0);

// //tive que fazer esse para ter um estoque inteiro já que eu estava tentando fazer o "estoque" com o filtro ali na conta final de impostos...
// //nesse exercicio acabou funcionando ja q estava desprezando só o 0, mas se o filter fosse qualquer outro valor além de 0 os dados estariam comprometidos
// //o que entra na conversa que tive com meu amigo, sobre se ater ao o que exercicio pede, porque você monta a estrutura pensando no requisito do exercicio
// //se ficar pensando depois em adicionar coisas, extressando a logica, vai ter que mudar bastante o cod.. afinal sua logica era para condições x sem pensar na y
// //  mas é uma excelente forma de treino, as empresas não mantém codigos estaticos, novos requisitos de clientes, de mercado e varios fatores torna o codigo muito dinamico
// //colocar novas funcionalidades, e transformar o cod de uma coisa para outra é excessivamente o trabalho de um desenvolvedor,
// //por isso vou fazer os exercicio e manter essa postura de extressar a logica com novos requisitos que eu mesmo me submeto... 

// const exibirinteiro = formatador.format(estoqueinteiro);
// const exibirimposto = formatador.format(estoquecomimposto);





// const estoque = pecas
// .filter((valor, index) => { return valor > 0 } )
// .reduce((acc, valor) => { return acc + valor * 1.10   },0);

// //  subtraiu 10% do valor (deixou ele com 90% do original).

// // O que o desafio pediu: Somar 10% de imposto (ou seja, valor * 1.10).  ATENÇÃO, MAIS 10% EM CIMA DO VALOR TU USA O 100 + A QUANTIDADE, 10%? 1.10 

// //SE POR ALGUM MOTIVO EU TER QUE DOBRAR O VALOR SERÁ * 2.0, OU SEI LA, DOBRAR + METADE 2.5, TRIPLICAR 3.0 ....

// //enquanto pensar em desconto é o caminho oposto do 100, 0.90 é 10% desconto, 0.40 é 60, e assim vai indo..


// const exibirestoquecomimposto = formatador.format(estoque);

// //const imposto = pecas.reduce((acc , valor) => {    110 * 0.90 = 99  ou seja, 0.90 está errado para logica
// //  return  acc + valor * 0.90;                 // o certo é criar reduce de deposito cheio + com imposto
// //}, 0); 

//     const valorimposto = estoquecomimposto - estoqueinteiro; // detalhe, colocar o estoque com imposto na frente já que ele é o maior valor, 
//     //já que o imposto é uma "adição de valor" ele vai ser o numero a ser subtraido do estoque sem imposto..

//    //antes eu tinha feito [[ > valorimposto = estoque - semimposto; < ]] o que veio a calhar já que eu estava retirando o 0
//    //mas a logica estava comprometida já que puxei uma numero para calculo de acumulador com uma condição.. não posso fazer isso
//    // ou seja, nesse exemplo eu poderia usar o "estoque" e o novo criado "estoquecomimposto", mas para a logica ficar certa é melhor criar um reduce para o imposto
//    //eu tbm tentei dar o imposto subtraindo 0.90 dele, mas da erro, pq 0.90 de determinados valores vai dar diferença de 1.10, n estou "tirando 10" fazendo 0.90
//    //o valor do imposto é sobre a base original dele, 0.90 to me baseando no resultado final q vai ser maior que o preço cheio.....


// //extra 
// const exibirimpostototal = formatador.format(valorimposto);

// console.log(exibirinteiro );
// console.log(exibirestoquecomimposto);
// console.log(exibirimposto);
// console.log(exibirimpostototal);



// Nível 5: O Relatório de Elite (Filter + Reduce + Média)
// Cenário: No dashboard do CS2, precisamos analisar apenas os jogadores de alto desempenho.

// Dados: const scores = [80, 120, 50, 200, 90, 150];

// Seus Requisitos:

// Filtrar: Apenas jogadores com score maior que 100.

// Soma: Calcular o XP total apenas desse grupo de elite.

// Média: Calcular a média de XP desse grupo (Total / Quantidade de jogadores elite).

// Pit Stop: Você deve salvar o resultado do filtro em uma variável chamada jogadoresElite para não ter que filtrar a lista duas vezes.


// const scores = [80, 120, 50, 200, 90, 150];

// const elite = scores.filter((valor, index) => {return valor > 100 }); // primeiro criei a variavel elite, estipulando uma condição


// const soma = elite.reduce((acc, valor) => {return acc + valor}, 0 ); //usei essa elite para acumulador
// const media = soma / elite.length; // aqui uma coisa !!!!IMPORTANTE  PARA CALCULA A MEDIA BASTA PEGAR A LISTA /(DIVIDIR) POR ELA .LENGTH
// const jogadoresElite = elite; // PARA DECLARAR A LISTA

// console.log(jogadoresElite)
// console.log(media.toFixed(0));
// console.log(soma);

//O critério para decidir se encadeia ou não se resume a uma pergunta simples:
//"Eu vou precisar dos dados desse meio do caminho para outra coisa?"


// const pecasLoja = [
//   { nome: "Processador", preco: 1200, emEstoque: true },
//   { nome: "Memória RAM", preco: 300, emEstoque: false },
//   { nome: "Placa Mãe", preco: 800, emEstoque: true },
//   { nome: "Fonte", preco: 0, emEstoque: true } // Erro de sistema
// ];
// Seus Requisitos:

// Limpeza: Ignore peças que não estão em estoque (emEstoque: false) OU que o preço seja 0.

// Imposto: Aplique os 10% de imposto em cada peça válida.

// Total: Calcule o valor total de compra dessas peças com imposto.

// Extra: O valor do imposto deve ser calculado comparando o Total com Imposto vs o Total sem Imposto (usando a base filtrada).


// const pecasLoja = [
//   { nome: "Processador", preco: 1200, emEstoque: true },
//   { nome: "Memória RAM", preco: 300, emEstoque: false },
//   { nome: "Placa Mãe", preco: 800, emEstoque: true },
//   { nome: "Fonte", preco: 0, emEstoque: true } // Erro de sistema
// ];
// const impostoAplicado = 1.10


// const arr = [1,2,3];
// arr.map(e => e * 2)
//             arr   (e => e * 2)

// //CONST XD = ARRAY.MAP (
// //    (VALORENDERECO , ENDERECO) => {} 
// //)
// const map = (arr, cb) => {
//     const newArr = [];
//     for(let i = 0; i < arr.lenght; i++) {
//         let e = arr[i];
//         newArr.push(
//             cb(e, i)
//         );
//     }
//     return newArr;
// }
// //estoqueoff.reduce((acc, valor) => acc + valor.preco * impostoAplicado, 0)
// // estoqueoff -> arr
// // (acc, valor) => acc + valor.preco * impostoAplicado -> cb
// // initial -> 0

// inicial
// [1,((((2)),3]
// current = 1
// 2
// (anterior, agora) => 
// const reduce = (arr, cb, initial) => {
//     let current = arr[0];   
//     let indexComeco = 1;   
//     const temInicial = initial !== undefined;
//     if (temInicial) {
//         indexComeco = 0;
//         current = initial;
//     }
//     for(let i = indexComeco; i < arr.lenght; i++) {
//         let e = arr[i];
//         current = cb(current, e, i);
//     }
//     return current;
// }
// reduce([1,2,3], (a, b) => a + b, 0);

// fn(arr, e => e * 2);




// arr.reduce(e => e * 2);



//             valor     posição
// const filter = (arr, cb) => {
//     const newArr = [];
//     for(let i = 0; i < arr.lenght; i++) {
//          if(cb(arr[i], i, arr)) {
//              newArr.push(arr[i]);
//          }
//     }
//     return newArr;
// }


// const calc = (acc , valor) => {
//     console.log("weereqwe")
//     return ({
//         valorsemimposto: acc.valorsemimposto + valor.preco,
//         valorimposto: acc.valorimposto + valor.preco * impostoAplicado,
//         imposto: valor.preco * (impostoAplicado - 1)
//     })
// }

// function calcularValores(acumulador, valorAtual) {
//     return ({
//         valorSemImposto: acumulador.valorSemImposto + valorAtual.preco,
//         valorComImposto: acumulador.valorComImposto + valorAtual.preco * impostoAplicado
//     });
// }

// if (true) console.log("lero")
// else console.log("aaaa");

// const add = (a, b) => 91283123 + 283423 + 23949234;


// const estoqueoff = pecasLoja
//     .filter(estoque => estoque.emEstoque === true && estoque.preco !== 0)
// const valorsemimposto = estoqueoff.reduce((acc, valor) => acc + valor.preco, 0); 
// //const imposto = pecasLoja.preco * impostoaplicado;
// const valorimposto = estoqueoff.reduce((acc, valor) => acc + valor.preco * impostoAplicado, 0)

// //EU FIZ TBM O pecasLoja.reduce, ou seja, não usaria o filter que eu fiz, por isso arrumei para o cod funcionar conforme

// const totalcomimposto = valorimposto - valorsemimposto;

// //MANIPULANDO O OBJETO DA ARRAY DENTRO DA FUNCIONAL NÃO CHAMA A ARRAY, COLOCAR ELA NO PARAMETRO CRIADO, PARAMETROCRIADO.TIPO

// console.log(valorsemimposto);
// console.log(valorimposto);
// //console.log(imposto);
// console.log(totalcomimposto);


// //ENCADEIAR QUANDO? QUANDO PRECISO RETORNAR SÓ UM VALOR ESPECIFICO DENTRO DAS CONDIÇÕES ESTABELECIDAS NO ENCADEAMENTO, 
// //PRECISO RETORNAR MAIS COISAS OU LIDAR COM UMA TRATIVA DE DADO FILTRADO QUE ESTA NO MEIO DO ENCADEAMENTE?? AI ESQUECE, SEPARA 





// // // COM OBJETO
// // const pecasLoja = [
// //   { nome: "Processador", preco: 1200, emEstoque: true },
// //   { nome: "Memória RAM", preco: 300, emEstoque: false },
// //   { nome: "Placa Mãe", preco: 800, emEstoque: true },
// //   { nome: "Fonte", preco: 0, emEstoque: true } // Erro de sistema
// // ];
// // const impostoaplicado = 1.10


// const estoqueoff = pecasLoja
//     .filter(estoque => estoque.emEstoque === true && estoque.preco !== 0)
//     .reduce((acc , valor) => ({
//         valorsemimposto: acc.valorsemimposto + valor.preco,
//         valorimposto: acc.valorimposto + valor.preco * impostoAplicado
//     }), {
//         valorimposto: 0,
//         valorsemimposto: 0
//     }
// )


// console.log(estoqueoff);


// // Filtrar: Selecione apenas os produtos da categoria "Eletrônicos".
// // Mapear: Converta os itens filtrados para o valor total de cada linha (Preço $\times$ Quantidade).
// // Reduzir: Some todos esses valores para obter o faturamento final dessa categoria.

// const vendas = [
//   { produto: "Teclado Mecânico", categoria: "Eletrônicos", preco: 250, qtd: 2 },
//   { produto: "Monitor 24'", categoria: "Eletrônicos", preco: 900, qtd: 1 },
//   { produto: "Cadeira Gamer", categoria: "Móveis", preco: 1200, qtd: 1 },
//   { produto: "Mouse Pad XL", categoria: "Acessórios", preco: 80, qtd: 3 },
//   { produto: "Headset USB", categoria: "Eletrônicos", preco: 350, qtd: 2 },
//   { produto: "Mesa de Escritório", categoria: "Móveis", preco: 500, qtd: 1 }
// ];

// const eletronico = vendas
// .filter((valor,index) =>  valor.categoria === "Eletrônicos" )
// .map((valor,index) =>  valor.preco * valor.qtd )
// .reduce((acc,valor) =>  acc + valor  , 0);

// console.log(eletronico);


// O Desafio: Gestão de Clube de Assinatura
// Imagine que você está processando uma lista de usuários de um serviço de streaming. 
// Você precisa calcular o faturamento líquido (o que sobra para a empresa) após aplicar descontos e taxas.

// Filtrar: Pegue apenas as contas ativas.

// Mapear: Transforme cada usuário no valor da sua mensalidade, mas com as seguintes regras (aqui entra a complexidade):

// Plano Premium: Valor base de R$ 50. Se o usuário tiver mais de 10 meses de casa, ele tem um desconto de fidelidade de 10% no valor.

// Plano Standard: Valor base de R$ 30.

// Plano Básico: Valor base de R$ 20.

// Reduzir: Some todos os valores, mas ao final, subtraia uma taxa de manutenção fixa de R$ 5 por cada conta ativa que entrou na soma.

// const usuarios = [
//   { nome: "Ana", plano: "Premium", ativa: true, meses: 12 },
//   { nome: "Bruno", plano: "Básico", ativa: false, meses: 2 },
//   { nome: "Carla", plano: "Premium", ativa: true, meses: 5 },
//   { nome: "Diego", plano: "Standard", ativa: true, meses: 8 },
//   { nome: "Elena", plano: "Premium", ativa: true, meses: 24 },
//   { nome: "Fabio", plano: "Standard", ativa: false, meses: 1 }
// ];

// const premium = usuarios
// .filter((valor,index) => valor.plano === "Premium" && valor.ativa )
// .map((valor,index) => {

//     if(valor.meses >= 10) {
//        return 50 * 0.90
//     }
//     else{
//         return 50
//     }
// })
// .reduce((acc,valor) => acc + valor -5, 0);

// const standard = usuarios
// .filter((valor,index) => valor.plano === "Standard" && valor.ativa )
// .map(valor => 30)
// .reduce ((acc, valor) => acc + valor -5, 0);

// const basico = usuarios
// .filter((valor,index) => valor.plano === "Básico" && valor.ativa )
// .map(valor => 20)
// .reduce ((acc, valor) => acc + valor -5, 0);

// console.log(premium);
// console.log(standard);
// console.log(basico);


// const faturamentoLiquido = usuarios
//   .filter(u => u.ativa) 
//   .map(u => {           
//     if (u.plano === "Premium") {
//       return u.meses > 10 ? 50 * 0.9 : 50;
//     }
//     if (u.plano === "Standard") return 30;
//     if (u.plano === "Básico") return 20;
//     return 0;
//   })
//   .reduce((acc, valor) => { 
//     // 3. Soma o valor e já desconta a taxa de R$ 5 por conta
//     return acc + (valor - 5);
//   }, 0);

// console.log(`Faturamento Líquido Total: R$ ${faturamentoLiquido}`);

// Você tem um carrinho de compras com vários itens. Alguns são peças pesadas (que têm frete extra), outros são acessórios leves. Você precisa calcular o valor final do carrinho.

// As Regras:

// Filtrar: Remova qualquer item que esteja com estoque zerado (qtdEstoque: 0).

// Mapear (O Zeus da Lógica): Transforme cada item no seu valor final considerando:

// Desconto: Se o item for da categoria "Eletrônico", ele tem 15% de desconto.

// Frete: Se o peso for maior que 5kg, adiciona uma taxa de R$ 40,00 de frete. Se for menor ou igual, o frete é R$ 10,00.

// Dica: O valor final de cada item deve ser (precoComDesconto + frete).

// Reduzir: Some tudo para obter o valor total que o cliente vai pagar.

// const carrinho = [
//     { nome: "Bateria 60Ah", categoria: "Eletrônico", preco: 450, peso: 17.5, qtdEstoque: 5 },
//     { nome: "Lâmpada Farol H4", categoria: "Eletrônico", preco: 30, peso: 0.2, qtdEstoque: 0 }, // Sem estoque!
//     { nome: "Kit Amortecedor", categoria: "Mecânico", preco: 800, peso: 12.0, qtdEstoque: 2 },
//     { nome: "Filtro de Óleo", categoria: "Mecânico", preco: 40, peso: 0.5, qtdEstoque: 10 },
//     { nome: "Central Multimídia", categoria: "Eletrônico", preco: 1200, peso: 1.2, qtdEstoque: 3 }
// ];


// const total = carrinho
//     .filter((valor, index) => valor.qtdEstoque !== 0)
//     .map((valor, index) => {

//         const frete = valor.peso > 5 ?  40 : 10
//         let desconto = 1


//         if (valor.categoria === "Eletrônico") {
//             desconto = desconto * 0.85 
//         }
//         return (valor.preco * desconto) + frete  ;

//         // if (valor.peso > 5) {
//         //     valorfinal = valorfinal + 40
//         // }
//         // if (valor.peso <= 5) {
//         //     valorfinal =  valorfinal + 10
//         // }
//         // return valorfinal;






//     })
//     .reduce((acc, valor) => acc + valor, 0)


// console.log(total);


// Filtrar: Remova quem não entregou o projeto (entregue: false).

// Mapear (O Zeus): Calcule o valor final de cada um:

// Preço Base: É o valorHora multiplicado pelas horasTrabalhadas.

// Bônus Sênior: Se o nivel for "Senior", ele ganha um bônus fixo de R$ 500,00.

// Imposto: Se o valor base (antes do bônus) for maior que R$ 2.000,00, ele tem um desconto de 10% (multiplicar por 0.90). Se for menor ou igual, não desconta nada.

// Taxa de urgência (Ternário): Se urgente for true, soma R$ 100,00, se não, soma R$ 0.

// Reduzir: Some o valor líquido de todos os que sobraram.

// const freelas = [
//   { nome: "Jackson", nivel: "Junior", valorHora: 50, horasTrabalhadas: 40, entregue: true, urgente: false },
//   { nome: "Luis", nivel: "Senior", valorHora: 100, horasTrabalhadas: 25, entregue: true, urgente: true },
//   { nome: "Ana", nivel: "Pleno", valorHora: 80, horasTrabalhadas: 30, entregue: false, urgente: false }, // Não entregou!
//   { nome: "Maria", nivel: "Senior", valorHora: 100, horasTrabalhadas: 15, entregue: true, urgente: false }
// ];

// const entregas = freelas 
// .filter((valor, index) => valor.entregue === true )
// .map((valor,index) => {
//     const valorbase = valor.valorHora * valor.horasTrabalhadas 
//     const imposto = valorbase > 2000 ? valorbase * 0.9 : valorbase
//     const valorsenior = valor.nivel === "Senior" ? 500 : 0

//     const urgente = valor.urgente === true ? 100 : 0 

//     return imposto + valorsenior + urgente ;
// })
// .reduce((acc,valor) => acc + valor , 0); 

// console.log(entregas);




// Filtrar: Remova pedidos que foram cancelados (status: "cancelado").

// Mapear (Transformação):

// Preço Inicial: É o precoUnitario * quantidade.

// Desconto Cliente: Se o tipoCliente for "VIP", ele ganha 20% de desconto (* 0.8). Se for "Comum", não ganha nada.

// Frete por Peso: Se o pesoTotal for maior que 20kg, o frete é R$ 80,00. Se for menor ou igual, o frete é R$ 20,00.

// Regra Extra (O Pulo do Gato): Se o valor do produto já com o desconto do cliente for maior que R$ 1.000,00, o frete fica de graça (R$ 0), independente do peso.

// const pedidos = [
// { produto: "Furadeira", precoUnitario: 500, quantidade: 3, pesoTotal: 15, tipoCliente: "VIP", status: "pago" },
// { produto: "Parafusos", precoUnitario: 2, quantidade: 1000, pesoTotal: 25, tipoCliente: "Comum", status: "pago" },
// { produto: "Cimento", precoUnitario: 40, quantidade: 50, pesoTotal: 1000, tipoCliente: "Comum", status: "cancelado" },
// { produto: "Serra Circular", precoUnitario: 800, quantidade: 1, pesoTotal: 8, tipoCliente: "Comum", status: "pago" }
// ];

// const valorfinal = pedidos
// .filter((valor,index) => valor.status === "pago")
// .map((valor,index)=>{
//     const precoinicial = valor.precoUnitario * valor.quantidade
//     const clientvip = valor.tipoCliente === "VIP" ? precoinicial * 0.8 : precoinicial
//     const frete = valor.pesoTotal > 20 ? 80 : 20
//     const totalfinal = clientvip > 1000  ?  clientvip : clientvip + frete //tinha usado fretetotal, isso pode e vai ficar confuso para quem lê
//     return totalfinal;                                              //sempre colocar o nome da variavel seguindo a logica da tratativa do dado ! 
// })
// .reduce((acc,valor) => acc + valor, 0 )


// console.log(valorfinal);




//     Filtrar: Remova alunos com status: "trancado".

// Mapear (A cascata de lógica):

// Média Base: (n1 + n2) / 2.

// Bônus de Presença: Se a presenca for maior que 90, adicione 0.5 na média base. Senão, mantém a média base. (Crie uma constante mediaFinal para isso).

// Veredito: Se a mediaFinal for maior ou igual a 7, o resultado é 1 (Aprovado). Senão, é 0 (Reprovado).

// const alunos = [
//   { nome: "Jackson", n1: 8, n2: 9, presenca: 95, status: "ativo" },   // Passa (Média 8.5 + 0.5 = 9) -> 1
//   { nome: "Luis", n1: 5, n2: 6, presenca: 80, status: "ativo" },      // Reprova (Média 5.5) -> 0
//   { nome: "Leonardo", n1: 10, n2: 10, presenca: 100, status: "trancado" }, // Fora (Trancado)
//   { nome: "Maria", n1: 6, n2: 6.5, presenca: 92, status: "ativo" },   // Reprova (Média 6.25 + 0.5 = 6.75) -> 0
//   { nome: "Beatriz", n1: 7.5, n2: 8, presenca: 85, status: "ativo" }, // Passa (Média 7.75) -> 1
//   { nome: "André", n1: 6.5, n2: 7, presenca: 98, status: "ativo" },   // Passa no limite (Média 6.75 + 0.5 = 7.25) -> 1
//   { nome: "Carla", n1: 9, n2: 9, presenca: 100, status: "trancado" }, // Fora (Trancado)
//   { nome: "Tiago", n1: 4, n2: 5, presenca: 95, status: "ativo" },     // Reprova (Média 4.5 + 0.5 = 5.0) -> 0
//   { nome: "Renata", n1: 8, n2: 7, presenca: 88, status: "ativo" },    // Passa (Média 7.5) -> 1
//   { nome: "Felipe", n1: 10, n2: 9.5, presenca: 99, status: "ativo" }  // Passa (Média 9.75 + 0.5 = 10.25) -> 1
// ];

// const notas = alunos
// .filter((valor,index) => valor.status !== "trancado")
// .map((valor,index) => {
//     const media = (valor.n1 + valor.n2) / 2
//     const bonus = valor.presenca > 90 ?  media + 0.5 : media
//     const mediafinal = bonus >= 7 ? 1 : 0
//     return mediafinal
// })
// .reduce((acc, valor) => acc + valor , 0);
// console.log(notas);




// Filtro: O cliente desistiu dos produtos que estão com status: "cancelado".

// Mapa (Regra de Negócio): * Se o produto for da categoria "eletrônico", ele tem 10% de desconto.

// Se não for, o preço continua o mesmo.

// Reduce (Resultado Final): Somar o preço final de todos os produtos que sobraram.

// const carrinho = [
//   { nome: "Mouse Gamer", preco: 200, categoria: "eletrônico", status: "comprado" },
//   { nome: "Teclado Mecânico", preco: 500, categoria: "eletrônico", status: "comprado" },
//   { nome: "Monitor 144hz", preco: 1200, categoria: "eletrônico", status: "cancelado" },
//   { nome: "Livro de Clean Code", preco: 100, categoria: "livro", status: "comprado" },
//   { nome: "Fone Bluetooth", preco: 300, categoria: "eletrônico", status: "comprado" }
// ];

// const formatador = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL'
// });

// const compras = carrinho
// .filter((valor) => valor.status !== "cancelado")
// .map((valor)=> {
//     const preco = valor.preco
//     const desconto = valor.categoria === "eletrônico" ? preco * 0.90 : preco


//     return {
//         preço: formatador.format(preco),
//         precocomdesconto: formatador.format(desconto),
//         valordesconto: formatador.format(preco) - formatador.format(desconto)


//         }
// })
// //.reduce((acc,valor) => acc + valor.precocomdesconto, 0);


//     console.log(compras);
//    // console.log(formatador.format(compras)); com o reduce atiVO ! o format só aceita numero ! 


// Regra de Letalidade: Se o nível for acima de 7 E o estado for "gasoso", a letalidade é Crítica.

// Regra de Descarte: Substâncias com nível abaixo de 3 são consideradas "Descarte Comum".

// Regra de Alerta: Se o nível estiver entre 4 e 7, é "Monitoramento".

// O Desafio
// Queremos um relatório final que nos dê:

// O volume total de substâncias Críticas.

// A contagem de quantas substâncias são de cada categoria.

// Uma lista com os nomes das substâncias perigosas formatadas.


// const substancias = [
//   { nome: "Sarin", nivel: 10, estado: "gasoso", qtd: 50 },
//   { nome: "Cloro", nivel: 8, estado: "gasoso", qtd: 100 },
//   { nome: "Etanol", nivel: 2, estado: "líquido", qtd: 500 },
//   { nome: "VX Nerve Agent", nivel: 9, estado: "líquido", qtd: 30 },
//   { nome: "Mercúrio", nivel: 6, estado: "líquido", qtd: 200 },
//   { nome: "Sódio Puro", nivel: 5, estado: "sólido", qtd: 80 }
// ];

// const perigo = substancias
// .map((valor,index) => {
// const pericusidade = valor.nivel
// const substanciabaixonivel = pericusidade < 3 ? 1 : 0
// const monitoramento = pericusidade > 3 && pericusidade < 7 ? 1 : 0
// const critica = pericusidade > 7 && valor.estado === "gasoso" ? 1 : 0
// const nomenclatura = valor.nome
// const quantidade = valor.qtd
// return {

//     Nome: nomenclatura, quantidade: quantidade,   QuantasCriticas: critica,
//     quantasmonitoramento: monitoramento,
//     quantasbaixonivel: substanciabaixonivel 
// }

// })
// .reduce((acc,valor) => {
//     acc.QuantasCriticas += valor.QuantasCriticas
//     acc.quantasmonitoramento += valor.quantasmonitoramento
//     acc.quantasbaixonivel += valor.quantasbaixonivel
//     //acc.nomenclatura.push(valor.Nome)


//     let mensagem = "";

//     if (valor.QuantasCriticas === 1) {
//         mensagem = `💀 CRÍTICO: Isolar ${valor.Nome} imediatamente!`;
//     } else if (valor.quantasmonitoramento === 1) {
//         mensagem = `⚠️ MONITORAR: ${valor.Nome} requer atenção.`;
//     } else {
//         mensagem = `✅ SEGURO: ${valor.Nome} sob controle.`;
//     }

//     acc.nomenclatura.push(mensagem);
//     return acc;
// },  
//  {QuantasCriticas: 0 , 
//     quantasmonitoramento: 0, 
//     quantasbaixonivel: 0, 
//     nomenclatura: [] 
// });



// // const relatorioTexto = `
// // === RELATÓRIO DE SEGURANÇA ===
// // Críticas: ${perigo.QuantasCriticas} unidades
// // Monitoramento: ${perigo.quantasmonitoramento} unidades
// // Baixo Nível: ${perigo.quantasbaixonivel} unidades
// // ------------------------------
// // Substâncias Identificadas: ${perigo.nomenclatura.join(", ")}
// // ==============================  
// // `;


// // console.log("=== STATUS DAS SUBSTÂNCIAS ===");
// // perigo.nomenclatura.forEach(item => console.log(item));
// // console.log("------------------------------");
// // console.log(`Total de Críticas: ${perigo.QuantasCriticas}`);

// // console.log(relatorioTexto);


// console.log(perigo);










// Você tem um array de pedidos. Cada pedido tem: id, cliente, itens (array), valorTotal e status.

// As Regras de Negócio (O Motor):

// Filtro de Pendência: Só processamos pedidos com status "pago". O resto a gente ignora.

// Regra de Frete (Letalidade do Bolso): * Se o valorTotal for acima de 500, o frete é Gratuito.

// Se for abaixo, o frete é R$ 50,00.

// Categoria de Volume:

// Pedidos com mais de 3 itens são "Volume Alto".

// 3 itens ou menos são "Volume Padrão".


// const pedidos = [
//   { id: 1, cliente: "Jackson", itens: ["Bateria Moura", "Cabo de Vela"], valorTotal: 450, status: "pago" },
//   { id: 2, cliente: "Luis", itens: ["Óleo Selenia", "Filtro", "Palheta", "Lâmpada"], valorTotal: 120, status: "pago" },
//   { id: 3, cliente: "Leonardo", itens: ["Pneu Pirelli"], valorTotal: 600, status: "pago" },
//   { id: 4, cliente: "Oficina Joinville", itens: ["Pastilha", "Disco", "Fluido", "Cilindro"], valorTotal: 800, status: "pendente" },
//   { id: 5, cliente: "Auto Peças Saguaçu", itens: ["Amortecedor", "Mola"], valorTotal: 1100, status: "pago" }
// ];

// const pagos = pedidos
// .filter(valor => valor.status !== "pendente")
// .map(valor => {
//      const TotalItens = valor.itens.length  //length para percorrer a lista de valor.itens e saber a quantidade [x,y,z](3)
//     const valoritem = valor.valorTotal
//     const frete = valoritem < 500 ? 50 : 0
//     const cliente = valor.cliente

//     const quantidade = TotalItens > 3 ?  valoritem : valoritem + frete //aqui para puxar o total de otens no objeto e calcula o frete se for +3
//    return {
//     TotalItens: TotalItens,
//     valoritem: valoritem,
//     frete: frete,
//     quantidade: quantidade,
//     cliente: cliente
//    };
// })

// .reduce((acc,valor) =>{
// acc.TotalItens += valor.TotalItens;
// acc.valoritemtotal += valor.valoritem;
// acc.quantidadetotal += valor.quantidade;

//     let mensagem = "";

//     if(valor.TotalItens > 3){
//         mensagem =  `${valor.cliente} Volume Alto, sem Frete, e vai custar ${valor.valoritem}`
//     }
//     else if( valor.TotalItens <= 3){
//        mensagem = `${valor.cliente} Volume Padrão, paga frete, e vai custar ${valor.valoritem}`
//     }
//     acc.relatorioenvio.push(mensagem);

// return acc;}, { 

//     TotalItens: 0, 
//     valoritemtotal: 0, 
//     quantidadetotal: 0,
//     relatorioenvio: [] 
//   });
// console.log(pagos);










// // Filtro: Só processar viagens "concluida".

// // Consumo (Km/L): Você precisa calcular quantos km o caminhão fez por litro.

// // Custo da Viagem: combustivelConsumido * valorDiesel.

// // Alerta de Manutenção: Se o consumo for menor que 3 km/L, o caminhão está gastando demais (Precisa de Manutenção).

// const viagens = [
//   { caminhao: "Volvo FH", kmRodado: 450, combustivelConsumido: 150, valorDiesel: 5.80, status: "concluida" },
//   { caminhao: "Scania R500", kmRodado: 600, combustivelConsumido: 120, valorDiesel: 5.90, status: "concluida" },
//   { caminhao: "Mercedes Axor", kmRodado: 300, combustivelConsumido: 110, valorDiesel: 5.85, status: "concluida" },
//   { caminhao: "Cargo 2428", kmRodado: 150, combustivelConsumido: 40, valorDiesel: 5.75, status: "cancelada" },
//   { caminhao: "Iveco Stralis", kmRodado: 800, combustivelConsumido: 320, valorDiesel: 6.00, status: "concluida" }
// ];

// const formatador = new Intl.NumberFormat('pt-BR', { //tranformar em BRL                  
//     style: 'currency',
//     currency: 'BRL'
// });    

// const relatorioFrota = viagens
//   .filter(v => v.status === "concluida")
//   .map(v => {
//     const consumoKmL = v.kmRodado / v.combustivelConsumido;
//     const marca = v.caminhao
//     const distancia = v.kmRodado
//     const GasosaGasta = v.combustivelConsumido
//     const GasosaCusto = v.valorDiesel
//     const custoTotal = GasosaGasta * GasosaCusto;


//     let mensagem = "";
//     if((distancia / GasosaGasta ) <3 ){
//         mensagem = `o caminhão ${marca} está gastando demais (Precisa de Manutenção).`
//     }
//     else { 
//          mensagem = `Caminhão ${marca} está em boas condições`
//     }


//     // --- COMPLETE O RETURN DO MAP ---
//     return {
//       consumoKmL: consumoKmL,
//       marca: marca,
//       distancia: distancia,
//       GasosaGasta: GasosaGasta,
//       GasosaCusto: GasosaCusto,
//       custoTotal: GasosaGasta * GasosaCusto,
//       mensagem: mensagem

//     };
//   });
//  console.log(relatorioFrota);

//   const acumuladores = viagens.reduce((acc, v) => {
//     acc.gasolinagasta += v.combustivelConsumido
//     acc.custoGeral += (v.valorDiesel * v.combustivelConsumido)
//     acc.kmTotal += v.kmRodado
//     //acc.statusManutencao.push(v.mensagem)


//     //acc.listaCaminhoes.push(v.marca); aq era para puxar os caminhões em array, mas, coloquei direto na msg para ficar melhor

//     return acc;
//   }, { 
//     // --- COMPLETE O OBJETO INICIAL (AS GAVETAS) ---
//     gasolinagasta: 0,
//     custoGeral: 0,
//      kmTotal: 0,
//     //listaCaminhoes: [],
//     //statusManutencao: []

//   });
// console.log(acumuladores);


// console.log("=== RELATÓRIO FINAL DA FROTA ===");
// console.log("Gasolina gasta de todos os caminhão:", relatorioFrota.gasolinagasta + "Ltrs");
// console.log("Custo Total Diesel:", formatador.format(relatorioFrota.custoGeral)); // Formata aqui!
// console.log("KM Total Rodado:", relatorioFrota.kmTotal + " km");
// console.log("Mensagens de Manutenção:", relatorioFrota.statusManutencao);
//console.log("Caminhões Disponiveis:", relatorioFrota.listaCaminhoes);









//////////////////////////=======///////////////////


// 📋 O Cenário: Sistema "Express Log"
// Você recebeu uma lista de objetos contendo: o valor da entrega, a distância, o combustível gasto, a data e o status.

// Sua missão:

// Filtrar: Apenas entregas com status "finalizada".

// Mapear (O Relatório Individual):

// Calcular o lucro líquido de cada entrega (Valor da Entrega - Custo do Combustível).

// Identificar o tipo de veículo: se a distância for < 5km é "Utilitário", se for >= 5km é "Caminhão Leve".

// Formatar a data para exibir apenas o nome do mês (ex: "Abril").

// Reduzir (O Pacote Completo):

// Acumular o lucro total.

// Contar quantas entregas foram feitas por "Utilitário" e quantas por "Caminhão Leve".

// O Desafio: Calcular a Média de Lucro por Mês. (Dica: no seu acumulador do reduce, você vai precisar de um objeto para contar os meses).


// const entregas = [
//     { id: 1, valor: 150, km: 3, litros: 2, data: "2026-04-10", status: "finalizada" },
//     { id: 2, valor: 450, km: 12, litros: 8, data: "2026-04-12", status: "finalizada" },
//     { id: 3, valor: 200, km: 4, litros: 3, data: "2026-05-05", status: "finalizada" },
//     { id: 4, valor: 600, km: 20, litros: 12, data: "2026-05-15", status: "finalizada" },
//     { id: 5, valor: 100, km: 2, litros: 1, data: "2026-04-20", status: "cancelada" }, // Não entra!
//     { id: 6, valor: 350, km: 8, litros: 5, data: "2026-06-02", status: "finalizada" }
// ];

// const PRECOCOMBUSTIVEL = 5.85; //valor em litro

// const formatadorUTC = new Intl.DateTimeFormat('pt-BR', {
//     month: 'long'
// });

// const formatadorG = new Intl.DateTimeFormat(undefined, {
//     month: 'long',
//     day: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: false // Formato 24h
// });

// const formatadorhora = new Intl.DateTimeFormat(undefined, {
//     hour: '2-digit',
//     minute: '2-digit'
// });

// const formatadorCash = new Intl.NumberFormat('pt-BR', { //tranformar em BRL                  
//     style: 'currency',
//     currency: 'BRL'
// });

// const arraymap = entregas
//     .filter((valor) => valor.status !== "cancelada")
//     .map((valor) => {
//         const custogasolina = valor.litros * PRECOCOMBUSTIVEL  //de novo usei o entregas.litros, tipo ele n vai olhar para o valor assim, ja q a array n devolve valor...
//         const custo = valor.valor - custogasolina               //o certo é usar v.tipo, que dai eu pego 
//         const utilitario = valor.km < 5 ? 1 : 0;
//         const datames = new Date(valor.data).getMonth();

//         return {
//             custogasreduce: custogasolina, //para usar, e ao mesmo tempo ter o resultado formatado(N da pra usar o formatado no reduce)
//             lucrototalreduce: custo,

//             // QuantosUtilitarios: utilitario, resolver no reduce
//             //QuantosCaminhõesLeves: leve, 
//             custoGAS: formatadorCash.format(custogasolina),
//             lucrototal: formatadorCash.format(custo),
//             utilitario: utilitario,
//             mesDATA: datames
//         }

//     });
// console.log(arraymap);

// const totais = arraymap
//     .reduce((acc, valor) => {
//         acc.custogasolina += valor.custogasreduce
//         acc.lucrototal += valor.lucrototalreduce
//         // acc.leve += valor.QuantosCaminhõesLeves
//         // acc.utilitario += valor.QuantosUtilitarios

//         if (valor.utilitario) {
//             acc.utilitario++
//         }
//         else {
//             acc.leve++
//         }

//         const mes = valor.mesDATA


//         if (!acc.mes[mes]) {
//             acc.mes[mes] = 0;  //para o mês, torna inteligente sem precisar declarar mes por mes...
//         }

//         acc.mes[mes] += valor.lucrototalreduce

//         return acc;
//     }, { custogasolina: 0, lucrototal: 0, leve: 0, utilitario: 0, mes: {} });
// console.log(totais);

// Object.entries(totais.mes).forEach(([mes, valor]) => {
    
//     console.log(`${formatadorUTC.format(new Date(0, mes))}: ${formatadorCash.format(valor)}`);  //jeito eleganta de formatar o retorno do objecto do Mês
// });
// console.log(`Total de caminhões leves: ${totais.leve}`)
// console.log(`Total de utilitarios: ${totais.utilitario}`)
// console.log(`Total Gasolina: ${formatadorCash.format(totais.custogasolina)}`);
// console.log(`Total Lucro: ${formatadorCash.format(totais.lucrototal)}`);


// index.html


// i18/en/strings.json
//     {
//         "title": "Jacason site",
//         "body-text": "body text lerolero"
//     }
// i18/pt/strings.json
//     {
//         "title": "Sitezinho do jacason",
//         "body-text": "texto corpo do site lerolero"
//     }

// const i18nObj = {
//     "en-US": {
//         "title": "Jackcon site",
//         "body-text": "body text lerolero"
//     },
//     "pt-BR": {
//         "title": "Sitezinho do Jackson",
//         "body-text": "texto corpo do site lerolero"
//     }
// }

// function i18n(key) {
//     const lang = navigator.language;
//     const keyLang = i18nObj[lang][key];
//     return keyLang;
// }

// console.log(i18n("title"));

// function comp() {
//     return `<h1>${i18n("body-text")}</h1>`;
// }

// console.log(comp());



/*
> console.log(comp());
<h1>body text lerolero</h1>
undefined

❯ node
Welcome to Node.js v25.9.0.
Type ".help" for more information.
> navigator
Navigator {}
> navigator.language
'en-US'
> const i18nObj = {
|     "en-US":{
|         "title": "Jacason site",
|         "body-text": "body text lerolero"
|     },
|     "pt-BR": {
|         "title": "Sitezinho do Jackson",
|         "body-text": "texto corpo do site lerolero"
|     }
| }
undefined
>
> function i18n(key) {
|     const lang = navigator.language;
|     const keyLang = i18nObj[lang][key];
|     return keyLang;
| }
undefined
>
> console.log(i18n("title"));
Jacason site
undefined
>
*/
// <h1>{i18n("title")}</h1>
// <p>{i18n("body-text")}</p>

// function montarComponente(hora) {
//     const formatador = Intl.DateTimeFormat();
//     const horaFormatada = formatador.format(hora);

//     return `<p>Hora: ${horaFormatada}</p>`;
// }



// function montarComponente(hora) {
//     const formatador = Intl.DateTimeFormat();
//     const horaFormatada = formatador.format(hora);

//     return `<p>Hora: ${horaFormatada}</p>`;
// }

// function montarComponente(hora) {
//     const formatador = Intl.DateTimeFormat();
//     const horaFormatada = formatador.format(hora);
//     return `<p>${horaFormatada} horas restantes.</p>`;
// }

// function montarComponente(hora) {
//     const formatador = Intl.DateTimeFormat();
//     const horainicial = formatador.format(hora);
//     const horalimite = formatador.format(hora);
//     return `<p>Faltam ${horainicial} para dar ${horalimite}</p>`;
// }


// h3> *Manifesto*  h3

// <div> pt-br 
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
// </div>


// <div> eng
//     Lore ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lore ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lore ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lore ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
//     Lore ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus consequatur optio, dolorum explicabo ex sapiente repudiandae aliquam accusantium esse odio quas error aspernatur ratione id nisi iusto deserunt dolorem.
// </div>





// Você recebeu um array de viagens. Seu objetivo é gerar um resumo que nos diga:

// Quanto cada motorista gerou de Lucro Líquido.

// Qual a Média de Consumo (KM/L) de cada um.

// Um Ranking (quem é "Top" e quem é "Alerta").

// const viagens = [
//   { motorista: "Jackson", km: 500, litros: 50, valorFrete: 2500 },
//   { motorista: "Geremias", km: 800, litros: 120, valorFrete: 3800 },
//   { motorista: "Leon", km: 300, litros: 35, valorFrete: 1500 },
//   { motorista: "Leonardo", km: 1000, litros: 180, valorFrete: 5000 },
//   { motorista: "Luis", km: 200, litros: 25, valorFrete: 1100 }
// ];

// const PRECO_DIESEL = 5.85;

// const mapArray = viagens
// .map((v) => {
//     const motorista = v.motorista
//     const distancia = v.km
//     const custogasosa = v.litros * PRECO_DIESEL
//     const lucro = v.valorFrete - custogasosa
//     const eficiencia = v.km / v.litros

//     return {
//         motorista: motorista,
//         custogasosa: custogasosa,
//         lucro: lucro,
//         eficiencia: eficiencia,
//         distancia: distancia
//     }
// });
// //console.log(mapArray);

// const rankinglucro = [...mapArray].sort((a,b) =>  b.lucro - a.lucro);
// //console.log(rankinglucro)


// const rankingEficiencia = [...mapArray].sort((a, b) => b.eficiencia - a.eficiencia);
// //console.log(rankingEficiencia);

// //[...maparray] percorrer o array da função criada inteira


// //.sort organizador de elementos do array, O segredo é que o .sort() não é apenas um loop simples como o .forEach().
// //  Ele usa um algoritmo chamado Timsort (ou Merge Sort em alguns navegadores).
// // a - b = Crescente (Do menor para o maior: 1, 2, 3...)

// // b - a = Decrescente (Do maior para o menor: 10, 9, 8...)



// const acumulador = mapArray
// .reduce((acc,v) =>{
//     acc.gasosa += v.custogasosa
//     acc.lucro += v.lucro
//     acc.distancia += v.distancia

//     if (!acc[v.motorista]) {
//         acc[v.motorista] = { lucro: 0, distancia: 0 }; //ver individualmente
//     }
//     acc[v.motorista].lucro += v.lucro;
//     acc[v.motorista].distancia += v.distancia;
    
    

//     return acc;
//   }, { gasosa: 0, lucro: 0, distancia: 0 });

// console.log(acumulador);

// const formatador = new Intl.NumberFormat('pt-BR', { //tranformar em BRL                  
//     style: 'currency',
//     currency: 'BRL'
// });         


// const relatorioFinal = {         //invez de voltar no console.log faz uma função de retornos
//                                 // claro que se quiser que volte indece por indece o map ainda é uma bela ferramenta 
// frota: "lero lero transporte",
//  dataRelatorio: new Date().toLocaleDateString('pt-BR'),
    
    
// financeiro: {
//     custoDieselTotal: formatador.format(acumulador.gasosa),
//     lucroTotal: formatador.format(acumulador.lucro),
//     distanciatotal: `${acumulador.distancia} Km`,  
//     mediaConsumoFrota: (acumulador.distancia / acumulador.gasosa).toFixed(2) + " Km/L"

// },

    
// rankingEconomiaGasosa: rankingEficiencia.map((v, index) => ({
//         posicao: `${index + 1}º`,
//         nome: v.motorista,
//         kmL: v.eficiencia.toFixed(2)
//     })),

//     rankingLucro: rankinglucro.map((v, index) => ({
//         posicao: `${index + 1}º`,
//         nome: v.motorista,
//         lucro: formatador.format(v.lucro)
//     })),

    
//     maioreconomia: rankingEficiencia[0].motorista,
//     pioresconomia: rankingEficiencia[rankingEficiencia.length -1].motorista,  //length -1 para pegar o ultimo sempre 

//     maiorlucro: rankinglucro[0].motorista,
//     menorlucro: rankinglucro[rankinglucro.length - 1].motorista
// };

// console.log(relatorioFinal);





// A transportadora decidiu dar um bônus para os motoristas, mas a regra não é simples.
//  Você precisa processar os dados e gerar um ranking final.

// Imposto: Toda viagem tem 10% de imposto retido na fonte.

// Bônus por Distância:

// Viagens acima de 600km ganham bônus de R$ 200,00.

// Viagens abaixo disso não ganham nada.

// Filtro de Segurança: Motoristas da Categoria C estão com a licença vencida. Eles não podem aparecer no relatório final (devem ser filtrados).

// Ranking: O relatório deve ser ordenado pelo Lucro Líquido (Valor - Imposto + Bônus) do maior para o menor.


const viagens = [
  { motorista: "Jackson", km: 500, valorFrete: 2500, categoria: "A" },
  { motorista: "Geremias", km: 800, valorFrete: 3800, categoria: "B" },
  { motorista: "Leon", km: 300, valorFrete: 1500, categoria: "A" },
  { motorista: "Leonardo", km: 1000, valorFrete: 5000, categoria: "C" },
  { motorista: "Luis", km: 200, valorFrete: 1100, categoria: "B" }
];

const impostoReTIDO = 0.90 //na fonte

const maparray = viagens
.filter((v) => v.categoria !== "C" )
.map((v) => {
    const motorista = v.motorista
    const valorfrete = v.valorFrete
    const KmRodado = v.km
    const bonus = KmRodado > 600 ? 200 : 0
    const LucroEmpresa = (valorfrete * impostoReTIDO) - bonus
    //const LucroMotorista = (valorfrete * impostoReTIDO) + bonus
    
    return  {
        motorista: motorista,
        valorfrete: valorfrete,
        KmRodado: KmRodado,
        bonus: bonus,
        LucroEmpresa: LucroEmpresa,
        //LucroMotorista: LucroMotorista
    }
});
//console.log(maparray);

const rakinglucro = [...maparray].sort((a,b) => b.LucroEmpresa - a.LucroEmpresa )  //quero descrecente o B na frente
//console.log(rakinglucro);



const reducetravel = maparray
.reduce((acc,v)=>{
    acc.valorfrete += v.valorfrete
    acc.lucro += v.LucroEmpresa

    return acc;
  },  {valorfrete: 0, lucro: 0 });
  //console.log(reducetravel);


const campoData = document.querySelector("#data-relatorio");
const listaRanking = document.querySelector("#lista-ranking");
const campoFaturamento = document.querySelector("#faturamento");
const campoLucroTotal = document.querySelector("#lucro-total");

const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

campoData.textContent = new Intl.DateTimeFormat('pt-BR').format(new Date());

listaRanking.innerHTML = ""; 
rakinglucro.forEach((v, i) => {
    listaRanking.innerHTML += `<li>${i + 1}º ${v.motorista} | Lucro: ${formatador.format(v.LucroEmpresa)}</li>`;
});

campoFaturamento.textContent = formatador.format(reducetravel.valorfrete);
campoLucroTotal.textContent = formatador.format(reducetravel.lucro);

campoLucroTotal.style.color = reducetravel.lucro >= 8000 ? "green" : "red";
//campoLucroTotal.style.color = reducetravel.lucro >= 7000 ? "green" : "red";



///NUM SISTEMA REAL EU TERIA QUE CRIAR UMA PASTA COM A LOGICA DO PAGAMENTO DE SALARIOS, DE DIVISÃO PARA MANUTENÇÃO, E DIVISÃO PARA MARKETING,
//ISSO INCLUE INCLUSIVE DESCISÃO DE SALARIOS, CLARO QUE TBM EXISTE UMA PRESSÃO DE FORA, UM PISO DE CATEGORIA QUE GANHAM MAIS OU MENOS, COMO CAMINHONEIROS 
//TUDO ISSO VAI ENTRANDO NO COD, AI SABER CODAR É SÓ 50% DO PROBLEMA 














//=================================================================================//=============================================================================

                                                                    //DOM

