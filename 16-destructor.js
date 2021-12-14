const pessoa = {
  nome: "João",
  sobrenome: "Pedro",
  idade: 27,
  senha: 123
}
/*
const {nome, idade} = pessoa
/*
console.log (nome)
console.log (idade)
/*
const pessoaAtualizada = {
  ...pessoa,
  idade :30,
  senha: 102030
}
console.log (pessoaAtualizada)

*/

const array = [1, 2, 3, 4,]
const [a, b] = array

const newArray = [0,...array, 5]
console.log (newArray)

