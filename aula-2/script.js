/* IF E ELSE
  Estrtura condicional, caso uma condição seja verdadeira, ele irá executar o bloco de código.
*/

// let nome = "João"

// if (nome === "João") {
//   console.log("Meu nome é João!")
// }

/*
const nota1 = Number(prompt("Digite sua primeira nota: "))
const nota2 = Number(prompt("Digite sua segunda nota: "))
const media = (nota1 + nota2) / 2

if (media >= 6) {
  console.log("Você está aprovado!")
} else if (media < 6 && media >= 5) {
  console.log("Você irá fazer a prova final!")
} else {
  console.log("Você está reprovado!")
}
*/

/* SWITCH CASE
  Estrutura de condição, caso um elemento seja selecionado.
*/

// const opcao = prompt(
// "Digite seu jogo favorito: 1 - Terraria 2- GTA RP 3 - EA FC 24")

// switch(opcao){
//   case "1": 
//     console.log("Parabéns, você é o único que joga isso.")
//     break
//   case "2":
//     console.log("Paulinho Oloko!")
//     break
//   case "3":
//     console.log("Parabéns, você é um homem!")
//     break
//   default:
//     console.log("Não existe essa opção.")
// }

/* DOM - Document Object Model */
const botao = document.querySelector("button")
const div = document.querySelector("div")

botao.addEventListener("click", function() {
  // console.log("VOCÊ CLICOU NO BOTÃO HAHAHAHA!")
  // this.innerHTML = `
  //   <h1> Olá! </h1>
  // `
  div.innerHTML = `
    <h1>Bem vindo a turma de CY3!</h1>
  `
})
