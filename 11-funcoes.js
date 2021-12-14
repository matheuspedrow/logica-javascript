function soma (A, B) {
return A + B
}

function subtracao(A, B) {
  return A - B
}

function calculadora (tipo){
  const A = 1
  const B = 2
  const R = soma (A, B)
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
}

function par (num){
  return num % 2 === 0
}


for (let i = 0; i <= 100; i++) {
  if (par(i)) console.log (i)
}