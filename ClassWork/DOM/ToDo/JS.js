//// 
let text = document.querySelector(`#text`)
let btn = document.querySelector(`.btn`)
let wrapper = document.querySelector(`.wrapper`)
let all = document.querySelector(`.all`)
let modal = document.querySelector(`.modal`)
let textmodal = document.querySelector(`#textModal`)
let btnModal = document.querySelector(`#btn-modal`)
//creating
let toDo = document.createElement(`div`)
//push
toDo.appendChild(text)
toDo.appendChild(btn)
wrapper.appendChild(toDo)
all.appendChild(wrapper)
//logic
let cnt = 0
btn.onclick = () => {
    if (text.value == '') {
        alert(`ЭэЭ бача друни inputa ягончи бнавис`)
    }
    else {
        let result = document.createElement(`div`)
        let del = document.createElement(`button`)
        let edit = document.createElement(`button`)
        let knops = document.createElement(`div`)
        let p = document.createElement(`p`)
        del.innerHTML = `Del`
        edit.innerHTML = `Edit`
        del.classList.add(`del`)
        edit.classList.add(`edit`)
        knops.classList.add(`knops`)
        result.classList.add(`res`)
        p.innerHTML = text.value
        ///////////////////////////////
        result.style.fontSize = `20px`
        ////////////////////////////
        let id = document.createElement(`p`)

        cnt++
        id.innerHTML = cnt
        //push
        result.appendChild(id)
        result.appendChild(p)
        knops.appendChild(edit)
        knops.appendChild(del)
        result.appendChild(knops)
        all.appendChild(result)
        del.onclick = () => {
            all.removeChild(result)
        }
        edit.onclick = () => {
            modal.style.display = `block`
            textmodal.value = p.innerHTML

            btnModal.onclick = () => {
                p.innerHTML = textmodal.value
                modal.style.display = `none`
            }
        }
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = `none`
            }
        }
    }
    text.value = ''
}