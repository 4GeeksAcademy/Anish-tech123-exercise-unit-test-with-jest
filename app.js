// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
let fromDollarToYen = (dollar) => {
let dollarToEuro = dollar / oneEuroIs.USD
let euroToYen = dollarToEuro * oneEuroIs.JPY
return  euroToYen 
}
let fromYenToPound = (yen) => {
    let yenToEuro = yen / oneEuroIs.JPY
    let euroToPound = yenToEuro * oneEuroIs.GBP
    return  euroToPound
    }
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound };

// One euro is:
let oneEuroIs = {         
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}