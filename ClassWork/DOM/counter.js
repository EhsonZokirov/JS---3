let plus = document.querySelector(`.plus`)
let reset = document.querySelector(`.reset`)
let minus = document.querySelector(`.minus`)
let res = document.querySelector(`.result`)
function color() {
    if (res.innerHTML > 0) {
        res.style.color = `green`
    }
    else if (res.innerHTML < 0) {
        res.style.color = `red`
    }
    else res.style.color = `black`
}

plus.onclick = () => {
    res.innerHTML++
    color()
}
reset.onclick = () => {
    res.innerHTML = 0
    color()
}
minus.onclick = () => {
    res.innerHTML--
    color()
}
