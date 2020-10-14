const albumBox = document.getElementById("album__box");
let photoNum = 1;

for (i = 0; i < 19; i++) { 
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.src = "img/third_album/" + photoNum + ".jpg"; 
    img.alt = "photo";
    a.href = "img/third_album/" + photoNum + ".jpg";
    img.classList.add("album__photo");
    albumBox.appendChild(a); 
    a.appendChild(img);
    photoNum++;
  }