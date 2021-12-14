const limite = 50 // Limite de KG definido
const valorDaMulta = 4 // Valor da multa em R$
const pesoPeixes = 60 // quantidade de peixes em KG

let excesso = pesoPeixes > limite ? pesoPeixes - limite : 0
let multa = excesso * valorDaMulta


console.log ("Excesso: ", excesso)
console.log ("Multa: R$", multa)