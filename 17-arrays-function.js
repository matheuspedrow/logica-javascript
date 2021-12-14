const array = [1,2,3,4,5,10,20,30,40,50]

array.forEach ((elemento, posicao) => {
  // console.log (`${elemento} - posicao ${posicao}`)
})

// retorna valor do elemento
const valor = array.find ((elemento) =>{
  if (elemento === 10 ) return true

  return false
})
// console.log (valor)

// retorna posição do elemento
const index = array.findIndex ((elemento) =>{
  if (elemento === 10 ) return true

  return false
})
// console.log (index)

// retorna true se pelo menos um número satisfazer a condição
const some = array.some((elemento) =>{
if (elemento >= 100) return true
})

// console.log (some)

// retorna true se todos os números respeitarem a condição
const every = array.every((elemento) =>{
  if (elemento >= 1) return true
  })
  //console.log (every)
  
  // corta o array, o primeir o parametro é o inicio e o segundo é a quantidade
  const newArray = [1, 2, 3, 4, 5]
  //console.log (newArray.slice (1, 4 ))

  // map: modifica todas as casas dentro do array, alterar os valores, seguindo uma regra

  /*console.log (newArray.map ((elemento) => {
    return elemento * 2
  }))*/

  //filter vai filtrar elementos dentro do array
  /*console.log (newArray.filter((elemento) => {
    return elemento % 2 === 0
  }))*/

  // reduce reduz o array pra algum outro elemento
  console.log (newArray.reduce ((acumulado, elemento) => {
    return acumulado + elemento
  }, 0))