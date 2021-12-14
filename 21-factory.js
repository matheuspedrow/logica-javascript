function Pessoa (nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa ('Matheus', 'Grolli')
const pessoaB = Pessoa ('José', 'Teste')

console.log (pessoaA, pessoaB)
console.log ("NOME COMPLETO PESSOA A", pessoaA.nomeCompleto)