

// Crie um programa que peça um input de número para o usuário. Com este número, 
// o código deve imprimir a **tabuada** do número, de 1 a 10

let tabuada = Number(prompt("DIGITE UM NÚMERO PARA SABER A TÁBUADA:"))

for(let final = 1; final < 11 ; final++){
console.log(`${tabuada} x ${final} = ${tabuada * final}`)
}
