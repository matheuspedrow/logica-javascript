let array = [true, false, 0, 1, 2, "string aqui", "sejadev"]

array.pop () // remove elementos do array
array.push (1000, "string aqui") // adiciona elementos no array

let newArray = [10, 20, 30]
//console.log (newArray.length)
let i = 0
while (i < newArray.length) {
  //console.log (i)
  //console.log (newArray[i])
  i++
}

for (let pos = 0; pos < newArray.length; pos++) {
  // console.log (newArray[pos])
}

//for...in
for (let pos in newArray) {
  //console.log (pos)
  //console.log (newArray[pos])
}

//for...off
for (let arr of newArray) {
  //console.log (arr)
}


const numbers = [10, 20, 30, 40, 50]
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length
console.log (media)