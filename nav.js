const btn = document.getElementById("hamburger");
const list = document.getElementById("nav-list");
const nav = document.getElementById("nav");
const value = 900;
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

const resizing = () => { 
    if (window.innerWidth > value) {
        list.style.display = "grid";
        nav.style.height = "5rem";
    } else {
        list.style.display = "none";
    }
    
}

window.addEventListener("resize", resizing);






