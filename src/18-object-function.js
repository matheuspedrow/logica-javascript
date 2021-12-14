const person = {
  name: "Matheus",
  lastName: "Grolli"
}


// object.keys () cria um array com todas as chaves do object
// console.log (Object.keys(person))

//object.values () cria um array com os valores do objeto
// console.log (Object.values(person))


// object.entries () cria um array com um array dentro de objetos e valores
// console.log (Object.entries(person))

const livros = {
  'Livro A': 19.90,
  'Livro B': 27.50,
  'Licro C': 9.90
}

const values = Object.values(livros)
const sum = values.reduce ((val, acc) => val + acc, 0)
console.log (sum)