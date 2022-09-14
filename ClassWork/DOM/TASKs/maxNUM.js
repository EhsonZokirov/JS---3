let a = document.querySelector(`#num1`)
let b = document.querySelector(`#num2`)
let btn = document.querySelector(`#btn`)
let res = document.querySelector(`#result`)

btn.onclick = () => {
    if (a.value > b.value) {
        return res.innerHTML = `The big number is ${a.value}`
    }
    else if (a.value < b.value) {
        return res.innerHTML = `The big number is ${b.value}`
    }
    else return res.innerHTML = `barobar`
}