/* eslint-disable no-undef */
/* eslint-disable camelcase */
const my_name = 'Namefieldempty'
const middle = 'gabbar'
const last = 'singh'

console.log(my_name)
console.log(middle)
console.log(last)

const sentence1 = 'she\'s so "cool"'
console.log(sentence1)
const sentence2 = "she's so cool"
console.log(sentence2)
const sentence3 = 'she\'s so cool\''
console.log(sentence3)
const sentence4 = "she's so \"cool\""
console.log(sentence4)

const song1 = '  I Like ARR songs addAniruth songs'
console.log(song1)

const hello3 = 'hello my name is' + my_name + '. Nice to meet you'
console.log(hello3)

const hello4 = `hello my name is ${my_name}. Nice to meet you. I am ${1 + 100} years old`

console.log(hello4)

const html = `<div>
<h2>${my_name}</h2>
<p>${hello3}</p>
</div>`
console.log(html)
// document.body.innerHTML = html
