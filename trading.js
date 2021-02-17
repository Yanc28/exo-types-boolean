// set up a programme to buy, sell or hodl BTC

let CurrentPrice = 47000
console.log("The current price of BTC is " + "$" + CurrentPrice)

if (CurrentPrice >= 60000) {
  console.log("if the price of BTC is " + "$" + CurrentPrice + ", sell some part of your wallet ")

}
else if (CurrentPrice <= 35000) {
  console.log("if the price of BTC is " + "$" + CurrentPrice + ", accumulate more ")
}
else {
  console.log("Hodl")
}



// correction

let BTCprice = 50000 // price of BTC in US dollars
let sellingprice = 60000
let buyingprice = 45000

if (BTCprice > sellingprice) {
  (console.log('sell BTC'))
} else if (BTCprice < buyingprice) {
  console.log('buy BTC')
} else {
  console.log('HODL')
}

