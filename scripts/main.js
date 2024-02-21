let buttonElement = document.querySelector("button");
buttonElement.onclick = () =>{
    alert("Can you enter your name?");
    
}
let btn = "OK";
const myHeading = document.querySelector("h1");
function changeHeader(){
    let name = document.getElementById("name").value;
    myHeading.textContent = "Welecome"+" "+ name+"!";
}

const imgElement = document.querySelector("img");
const img1URL = "images/alatoo-logo.png";
const img2URL = "images/nature-photo.webp";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
imgElement.onclick = changePhoto;
