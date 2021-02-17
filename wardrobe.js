let isSnowy = true
let isRainy = false
let temperature = 4
let clothes = ''

if (isSnowy) {
  clothes += 'boots, gloves, '
}
if (isRainy) {
  clothes += 'umbrella,' // concatenation de string
}

if (temperature < 5) {
  clothes += 'winter jacket, bonnet'
} else if (temperature >= 15 && temperature <= 20)
  clothes += 'spring jacket'
else
  clothes += 't-shirt, short'

console.log(`According to the weather please wear ${clothes}`)






