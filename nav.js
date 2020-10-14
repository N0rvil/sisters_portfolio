const btn = document.getElementById("hamburger");
const list = document.getElementById("nav-list");
const nav = document.getElementById("nav");
let isNavActive = false;
    btn.onclick = () => {
        isNavActive = !isNavActive
    if (isNavActive) {
        list.style.display = "inline";
        nav.style.height = "15rem";
    } else {
        list.style.display = "none";
        nav.style.height = "5rem";
    }
}




