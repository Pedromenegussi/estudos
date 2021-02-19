let num1 = 2
let num2 = Number('2.0')

console.log(typeof num1)
console.log(typeof Number)
console.log(Number.isInteger(num1))
console.log(Number.isInteger(num2))

const avaliacao1 = 9.876
const avaliacao2 = 6.654

const total = avaliacao1 * num1 + avaliacao2 * num2
const media = total / (num1 + num2)

console.log(total.toString(2)) // transforma em binário
console.log(typeof media.toFixed(2))