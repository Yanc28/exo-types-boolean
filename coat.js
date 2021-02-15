// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse

let isRainy = true
let isWindy = false
let temperature = 10

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
}
else if (temperature < 10) {
  console.log('Couvrez-vous')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}