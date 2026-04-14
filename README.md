Bom, vou lançar um README despretensioso aqui... e algumas notas que julgo muito importantes sobre meus estudos.

Primeiro, quero desabafar sobre incertezas e medos. Sabe, a realidade atual do mercado me assusta. Estou me formando talvez na pior época para ser um desenvolvedor!? A galera do "vibecoding" vem forte, e empresas acredito que não ligam tanto sobre conhecimento, tendo um site funcional; não importa se a pessoa fez num copy-paste de IA ou se fez entendendo pelo menos essa copy-paste kk

Apesar de que, quanto mais estudo, mais percebo que a IA é uma ótima operária, mas uma péssima arquiteta. Ela é extremamente ruim em SRP (Single Responsibility Principle). A IA olha para a função, não para o sistema... faz muito espaguete.. 

Mas enfim, tenho dois amigos me ajudando nos estudos, que entendem extremamente bem por serem sêniores há anos. Um deles não arruma emprego há cerca de um ano, mesmo entendendo bastante, o que me coloca em conflito ao pensar: "imagina eu...".

Bom, minha área atual(profissão) é Logística, e talvez eu continue nela, mas fui estudar sobre desenvolvimento e acabei realmente curtindo muito. Estudei até um pouco de circuitos eletrônicos para entender o funcionamento físico, kk.

Mas esses pensamentos de estar me esforçando para aprender no pior momento possível não me abandonavam. Até que esses pensamentos surgiram enquanto eu escutava música, e a música específica era Sultans of Swing...

Então, para esquecer toda a angústia de pensar que pode ser inútil estar estudando sistemas a fundo agora, eu foquei na letra. Ela me condicionou, me tocou profundamente. Eu já tinha ouvido e entendido antes, mas, ao parar para escutá-la nesse momento, o significado dela se tornou a resposta para meus sentimentos... Uma banda sem público, sem holofotes. A música descreve personagens dedicados (como "Guitar George" e "Harry") que tocam jazz dixieland e swing, mesmo que o público jovem da época preferisse rock e os ignorasse. Eles estavam ali por amar fazer aquilo, não por dinheiro ou reconhecimento...

Ou seja: estou estudando só para ganhar dinheiro e ter carreira, ou porque eu realmente é algo que quero entender? 
Olha, só quero ser um cara que entende muito bem de códigos e, a longo prazo, ter muitos projetos, entender partes físicas e afins. Porque achei algo que vai muito além de ser apenas a minha profissão...


[Importante], entender a necessidade do cliente é tão importante quanto a parte tecnica, tem que enteder o problema, ter uma visão macro do negocio
ter um planejamento eficiente, tanto de controle de prazos de entrega quanto financeiros, padronização de etapas e modelos, e papel ativo e reativo 
a tudo, saber trabalhar em equipe e definir bem o escopo de cada um para o projeto, e ter muita comunicação para alinhar e não cometer erros que comprometam
entragas, prazos, ou até mesmo a manutenibilidade do projeto.. NEM TODA EMPRESA VAI TER PADRÃO DE PROCEDIMENTOS OU DE "X ACONTECE, FAÇA Y", NA FACULDADE SEMPRE
FALAM DA IMPORTANCIA DISSO, MAS NA PRATICA ISSO NEM SEMPRE VAI OCORRER, POR ISSO TER COMUNICAÇÃO, TANTO COM CLIENTE OU A PONTE COM O CLIENTE DENTRO DA ORG, OU SE 
COMUNICAR COM OS COLEGAS SE TORNA VITAL, PARA DEIXAR TUDO ALINHADO PARA SEGUIR TODOS PARA UM OBEJTIVO EM COMUM
>>>>REFINAR ESTUDOS DE UML 



ARRAY É SEMPRE MAP(), FILTER() E REDUCE() !!

Entram 10 itens -> Saem 10 itens (mexidos): Use .map().

Entram 10 itens -> Saem 5 itens (iguais): Use .filter().

Entram 10 itens -> Sai 1 valor (total): Use .reduce().


O if / else (O Arquiteto)
Você usa quando a decisão gera uma ação ou bloqueio.

Ação: Salvar no banco de dados, enviar um e-mail, parar a execução.

Clareza: Se você tem 3 ou mais caminhos, o if/else if/else é obrigatório para o código não virar uma "sopa de letras".

Dica de Ouro: Use o if para as "Cláusulas de Guarda" (os erros que matam o código no começo).



 O Ternário (O Estilista) FUNCIONAL
Você usa quando a decisão gera um valor.

Atribuição: Dar nome a uma variável, definir uma cor de um botão, mudar um texto.

Curto: Se a pergunta e as duas respostas cabem em uma linha, o ternário é o rei.

Use a "trindade"(FUNCIONAL) por padrão para manter o código limpo e moderno. 

Migre para o for apenas quando precisar de performance extrema, interrupção antecipada ou controle fino de índices. 









SRP NA PRATICA    !!!!!IMPORTANTE

![Busca Linear](assets/cod1.jpeg)
 
 Esse é para busca linear (clientes[i].nome.toUpperCase() === inputnomeDoCliente)


![Acumulador](assets/cod2.jpeg)

essa é para acumulador 


///////////////=/////////////


![ESPAGUETE !! NÃO FAZER](assets/espaguete.jpeg)

esse aqui eu fiz acumulador e busca linear em um só, fica horrivel para manutenção
eu fiz o exercicio e depois pensei "e se eu quiser fazer acumular" ai fiz uma gambiarra para acumular dentro da busca
mas isso foi péssimo, seperar o cod  POR FUNCIONALIDADES UNICAS sempre é melhor e lei, 




Responsabilidade,Função
Busca (Filtro),find/filter,Percorre a lista e entrega o objeto (O Garçom).
Regra (Cérebro),calcDiscount,"Recebe valores, aplica a lógica e retorna (O Lógico)."
Acúmulo (Caixa),reduce/sum,Soma valores brutos e líquidos do array todo (O Contador).
Format (Saída),formatReport,Transforma dados em Strings/R$ para o usuário (A Maquiagem).




