// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` 
// perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” 
// deve representar “não”. Crie também uma `let conta` para guardar o valor total.
let coxinhas = prompt("Você deseja comer mias coxinhas: \n S para sim \n N para não").toLocaleUpperCase()

let conta = 0

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total.
while(coxinhas === "S"){
    conta = conta + 2.50
    coxinhas = prompt("Você deseja comer mias coxinhas: \n S para sim \n N para não").toLocaleUpperCase()

    console.log(conta)
}

//  Quando a resposta não for **sim**, devemos imprimir o valor total da conta.