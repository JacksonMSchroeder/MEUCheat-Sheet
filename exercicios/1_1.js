/*
1.1 Guardando informações de um usuário

Dificuldade: ⭐
Conceitos: let, const, tipos string, number, boolean.
Explicação:

    let cria uma variável que pode ser alterada depois.

    const cria uma variável que não pode ser alterada (constante).

    string é texto, number é número (inteiro ou decimal), boolean é verdadeiro ou falso.

Tarefa:
Crie um cadastro temporário usando variáveis:

    nomeCompleto (string) com seu nome.

    idade (number) com sua idade.

    estaAtivo (boolean) com o valor true.

    dataNascimento (const) com sua data no formato "dd/mm/aaaa".

Exiba no console cada variável e seu tipo usando typeof. Exemplo:
"nomeCompleto: João Silva (string)"
*/

const nomeCompleto = `Luis Manfroni`;
const idade = 32;
const ativo = false;
const datanasc = new Date("02/12/1982")



console.log("nomeCompleto: ",nomeCompleto, typeof nomeCompleto );
console.log("idade: ",idade, typeof idade );
console.log("ativo: ",ativo, typeof ativo );
console.log("datanasc: ",datanasc, typeof datanasc );


