let tbody = document.querySelector(`.tbody`)
let modal = document.querySelector(`.modal`)
let modalContent = document.querySelector(`.modalContent`)

let add = document.querySelector(`.add`)
let send = document.querySelector(`#send`)
let nom = document.querySelector(`#modalName`)
let age = document.querySelector(`#modalAge`)
let job = document.querySelector(`#modalJob`)
let phone = document.querySelector(`#modalPhone`)

///modal2
let modal2 = document.querySelector(`.modal2`)
let modalContent2 = document.querySelector(`.modalContent2`)
let send2 = document.querySelector(`.send2`)
let nom2 = document.querySelector(`#modalName2`)
let age2 = document.querySelector(`#modalAge2`)
let job2 = document.querySelector(`#modalJob2`)
let phone2 = document.querySelector(`#modalPhone2`)
/////////////////////////
let cnt = 0
//// events
add.onclick = () => {
    modal.style.display = `block`
    nom.value = ``
    age.value = ``
    job.value = ``
    phone.value = ``
}

window.onclick = (event) => {
    if (event.target == modal || event.target == modalContent) {
        modal.style.display = `none`
    }
}
send.onclick = () => {
    let line = document.createElement(`tr`)
    line.classList.add(`line`)
    let id = document.createElement(`td`)
    id.classList.add(`id`)
    id.innerHTML = ++cnt
    let tdName = document.createElement(`td`)
    let tdAge = document.createElement(`td`)
    let tdJob = document.createElement(`td`)
    let tdPhone = document.createElement(`td`)
    let edit = document.createElement(`button`)
    let delet = document.createElement(`button`)
    edit.innerHTML = `Edit`
    delet.innerHTML = `Delete`
    edit.classList.add(`edit`)
    delet.classList.add(`delet`)
    let tdEdit = document.createElement(`td`)
    let tdDelet = document.createElement(`td`)
    tdEdit.appendChild(edit)
    tdDelet.appendChild(delet)

    tdName.innerHTML = nom.value
    tdAge.innerHTML = age.value
    tdJob.innerHTML = job.value
    tdPhone.innerHTML = phone.value

    delet.onclick = () => {
        tbody.removeChild(line)
    }
    edit.onclick = () => {
        modal2.style.display = `block`
        nom2.value = tdName.innerHTML
        age2.value = tdAge.innerHTML
        job2.value = tdJob.innerHTML
        phone2.value = tdPhone.innerHTML
        send2.onclick = () => {
            tdName.innerHTML = nom2.value
            tdAge.innerHTML = age2.value
            tdJob.innerHTML = job2.value
            tdPhone.innerHTML = phone2.value
            modal2.style.display = `none`

        }
    }
    //// push
    line.appendChild(id)
    line.appendChild(tdName)
    line.appendChild(tdAge)
    line.appendChild(tdJob)
    line.appendChild(tdPhone)
    line.appendChild(tdDelet)
    line.appendChild(tdEdit)
    tbody.appendChild(line)
    modal.style.display = `none`


}