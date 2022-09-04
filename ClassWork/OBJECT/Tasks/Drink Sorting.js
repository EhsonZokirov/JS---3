//// Sort drinks by price

let drinks =
    [
        { name: "RC Cola", price: 13 },
        { name: "lemonade", price: 9 },
        { name: "Gorilla", price: 10 },
        { name: "Coca Cola", price: 11 },
        { name: "Pepsi Cola", price: 12 },
    ]
function Drinks(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
}
console.log(Drinks(drinks));
