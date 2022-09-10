let persons =
    [
        { name: 'Romiz', price: 1000, valyute: 'TJS', },
        { name: 'Toshmat', price: 150, valyute: 'TJS', },
        { name: 'Izzat', price: 230, valyute: 'TJS', },
        { name: 'Jony', price: 1234, valyute: 'USD', },
        { name: 'Max', price: 333, valyute: 'USD', },
        { name: 'John', price: 780, valyute: 'USD', },
        { name: 'Nsrat', price: 280, valyute: 'TJS', },
    ]
function USD(persons) {
    let arr1 = []
    let res = 0
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].valyute == 'USD') {
            arr1.push(persons[i])
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        res += (Math.ceil(arr1[i].price * 10.20)) // [ 12587, 3397, 7956 ] = 23940
    }
    return `sum of USA = ${res} TJS`
    
}
function TJS(persons) {
    let res = []
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].price > 500) {
            if (persons[i].valyute == 'USD') {
                continue
            }
            res.push(persons[i].price)
        }
    }
    return `sum of TJK = ${res} TJS`
}

console.log(USD(persons)); // sum = 23 940 somoni
console.log(TJS(persons)); // sum = 1000 somoni
