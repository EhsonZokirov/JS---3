let off = document.getElementById(`off`)
let on = document.getElementById(`on`)
let btn = document.getElementById(`btn`)
on.style.display = 'none'
btn.style.background = 'yellow'

btn.onclick = () => {
    if (btn.innerHTML == 'on') {
        btn.innerHTML = 'off'
        btn.style.backgroundColor = 'silver'
        off.innerHTML = style.display = "none"
        on.innerHTML = on.style.display = 'block'
        return
    }
    btn.innerHTML = 'on'
    btn.style.backgroundColor = 'yellow'
    on.innerHTML = on.style.display = "none"
    off.innerHTML = off.style.display = 'block'
}