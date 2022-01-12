const btns = document.querySelectorAll(".open-btn"),
    modalOverlay = document.querySelector(".modal-overlay "),
    modals = document.querySelectorAll(".modal"),
    signIn = document.querySelector("#signIn"),
    signUp = document.querySelector("#signUp"),
    modalOne = document.querySelector(".modal-1"),
    modalTwo = document.querySelector(".modal-2");

btns.forEach((e => {
    e.addEventListener("click", (e => {
        let a = e.currentTarget.getAttribute("data-path"); 
        modals.forEach((e => {
            e.classList.remove("modal--visible")
            document.querySelector(`[data-target="modal"]`).classList.add("modal--visible"), modalOverlay.classList.add("modal-overlay--visible")
        }))
    }))
})) 

modalOverlay.addEventListener("click", (e => {
    (e.target), e.target == modalOverlay && (modalOverlay.classList.remove("modal-overlay--visible"), modals.forEach((e => {
        e.classList.remove("modal--visible")
    })))
}))
