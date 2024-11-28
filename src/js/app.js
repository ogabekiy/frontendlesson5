const darkModeToggle = document.querySelector("#dark-mode")
const body = document.body

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark:bg-slate-600")
    body.classList.toggle("dark:text-white")

})