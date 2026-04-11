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



const acumulador = (nome , plano) => {
const alunos = [
    { nome: "Larissa", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 5, statusPagamento: true },
    { nome: "Budié", plano: "Anual", mensalidade: 150.00, treinosNoMes: 12, statusPagamento: false }, // Bloqueado
    { nome: "Jackson", plano: "Anual", mensalidade: 150.00, treinosNoMes: 22, statusPagamento: true },
    
    //{ nome: "Budié", plano: "Anual", mensalidade: 150.00, treinosNoMes: 12, statusPagamento: false }, // Bloqueado
    { nome: "Tainara", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 25, statusPagamento: true }, // Ganha bônus
    { nome: "Faith", plano: "Anual", mensalidade: 150.00, treinosNoMes: 20, statusPagamento: true }, // No limite do bônus
    { nome: "Claudio", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 8, statusPagamento: false }, // Bloqueado
    { nome: "Marcos", plano: "Anual", mensalidade: 150.00, treinosNoMes: 30, statusPagamento: true }, // Ultra focado
    { nome: "Jessica", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 15, statusPagamento: true },
    { nome: "Enzo", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 2, statusPagamento: true },
    { nome: "Valentina", plano: "Anual", mensalidade: 150.00, treinosNoMes: 21, statusPagamento: true }
];
   
    let faturamentobruto = 0;
    let desconto = 0;
    let rendaliquida = 0;
    let valoranual = 0;
    

    for(let i = 0; i < alunos.length; i++){
        
        let valoraluno = alunos[i].mensalidade;
        faturamentobruto += valoraluno;
      
        
        
        if(alunos[i].statusPagamento === false ){
          valoraluno = 0; 

        }

        if(alunos[i].treinosNoMes >= 20){
            valoraluno = valoraluno * 0.95
           

        }
        if(alunos[i].plano === "Anual" ){
            valoraluno = valoraluno * 0.90
             //valoranual = valoraluno * 12 se n for acumulador nem coloca ela 
            
          
        
        }

       
        
        rendaliquida += valoraluno;

    }
    
        totaldesconto = faturamentobruto - rendaliquida;
    

    return `Caixa sem desconto ${faturamentobruto}  renda liquida ${rendaliquida}   quanto a academia perde dando desconto ${totaldesconto}`

}
console.log(acumulador());