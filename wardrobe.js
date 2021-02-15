let isSnowy = true
let isRainy = false
let temperature = 5
let clothes = ''

if (isSnowy) {
  clothes += 'Boots and gloves ' // concatenation de string
}

if (temperature < 5) {
  clothes += ' Winter Jacket and bonnet,'
} else if (isRainy) {
  clothes += 'Rain Jacket and bonnet,'
} else if (!temperature >= 15 && temperature <= 20)
  clothes += 'spring jacket,'
else

  console.log(`According to the weather, please wear ${clothes}`)


