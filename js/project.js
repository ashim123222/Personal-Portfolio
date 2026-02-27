const allBtn = document.getElementById("all-btn")
const comBtn = document.getElementById("com-btn")
const progBtn = document.getElementById("prog-btn")
const miniBtn = document.getElementById("mini-btn")

const buttons = document.querySelectorAll(".proj-btns button ")

const container =  document.querySelectorAll(".container")

allBtn.addEventListener("click", () => {
    container.forEach((cont) => {
        cont.classList.add("show")
    })
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
    allBtn.classList.add("active")
})

comBtn.addEventListener("click", () => {
    container.forEach((cont) => {
        cont.classList.remove("show")
        cont.classList.add("hide")
    })
    document.getElementById("com-cont").classList.add("show")
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
    comBtn.classList.add("active")
})
progBtn.addEventListener("click", () => {
    container.forEach((cont) => {
        cont.classList.remove("show")
        cont.classList.add("hide")
    })
    document.getElementById("prog-cont").classList.add("show")
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
    progBtn.classList.add("active")
})
miniBtn.addEventListener("click", () => {
    container.forEach((cont) => {
        cont.classList.remove("show")
        cont.classList.add("hide")
    })
    document.getElementById("mini-cont").classList.add("show")
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
    miniBtn.classList.add("active")
})