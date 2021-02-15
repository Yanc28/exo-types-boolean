// set up a programme to buy, sell or hodl BTC

let CurrentPrice = 47000
console.log("The current price of BTC is " + CurrentPrice)

if (CurrentPrice >= 60000) {
  console.log("if the price of BTC is " + CurrentPrice + " $ " + ", sell some part of your wallet ")

}
else if (CurrentPrice <= 35000) {
  console.log("if the price of BTC is " + CurrentPrice + " $ " + ", accumulate more ")
}
else {
  console.log("Hodl")
}