let btn = document.getElementById("modal");
let header = document.getElementsByTagName("header")[0];
let nav = document.getElementById("nav");
const toggleNav = (e) => {
    console.count();
    nav.classList.toggle('navigation')
    nav.style.display = "flex";
}
btn.addEventListener("click", toggleNav)

