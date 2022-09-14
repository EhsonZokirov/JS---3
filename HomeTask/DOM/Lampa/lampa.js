let off = document.getElementById(`off`)
let on = document.getElementById(`on`)
let btn = document.getElementById(`btn`)
on.style.display = 'none'
btn.style.background = 'yellow'

btn.onclick = () => {
    if (btn.innerHTML == 'ON') {
        btn.innerHTML = 'OFF'
        btn.style.backgroundColor = 'silver'
        on.innerHTML = on.style.display = 'inline-block'
        off.innerHTML = off.style.display = "none"
        
    }
    btn.innerHTML = 'ON'
    btn.style.backgroundColor = 'yellow'
    on.innerHTML = on.style.display = "none"
    off.innerHTML = off.style.display = 'inline-block'
}