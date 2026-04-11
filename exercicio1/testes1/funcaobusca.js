const buscaraluno = (nome , plano) => {
const alunos = [
    { nome: "Jackson", plano: "Anual", mensalidade: 150.00, treinosNoMes: 22, statusPagamento: true },
    { nome: "Larissa", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 5, statusPagamento: true },
    { nome: "Budié", plano: "Anual", mensalidade: 150.00, treinosNoMes: 12, statusPagamento: false }, // Bloqueado
    { nome: "Tainara", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 25, statusPagamento: true }, // Ganha bônus
    { nome: "Faith", plano: "Anual", mensalidade: 150.00, treinosNoMes: 20, statusPagamento: true }, // No limite do bônus
    { nome: "Claudio", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 8, statusPagamento: false }, // Bloqueado
    { nome: "Marcos", plano: "Anual", mensalidade: 150.00, treinosNoMes: 30, statusPagamento: true }, // Ultra focado
    { nome: "Jessica", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 15, statusPagamento: true },
    { nome: "Enzo", plano: "Mensal", mensalidade: 180.00, treinosNoMes: 2, statusPagamento: true },
    { nome: "Valentina", plano: "Anual", mensalidade: 150.00, treinosNoMes: 21, statusPagamento: true }
];
    const nomeinput = nome.trim().toUpperCase()
    let anual = 0;
    let descontoanual = 0;
    let valor = 0;
    

    for (let i =  0;  i < alunos.length; i++){
       
        

        if(alunos[i].nome.toUpperCase() === nomeinput){
          valor = alunos[i].mensalidade  
        
        if(alunos[i].statusPagamento === false){
           return "Mensalidade Atrasada, não pode acessar a academia";

        
        }
         
        if(alunos[i].treinosNoMes >= 20){
            valor = valor * 0.95;

        }
        if(alunos[i].plano === "Anual"){
            anual = valor * 12; 
            descontoanual = anual * 0.90;

       
        }
         return   `nome: ${nomeinput}, o a mensalidade pago: ${valor},  valorAnual: ${descontoanual}` ;
        }

       
    }
   
    return "Erro: Aluno não encontrado no sistema.";
}

//buscaraluno();
console.log(buscaraluno("Jackson"));
console.log(buscaraluno("Larissa"));
console.log(buscaraluno("Budié"));
console.log(buscaraluno("Tainara"));
console.log(buscaraluno("Faith"));
console.log(buscaraluno("Claudio"));
console.log(buscaraluno("Marcos"));
console.log(buscaraluno("Jessica"));
console.log(buscaraluno("Enzo"));
console.log(buscaraluno("Valentina"));


//teste
console.log(buscaraluno("Testeinson"));