const lightBulb = document.getElementById("lighbulb");
const buttonElement = document.getElementById("btn-1");

buttonElement.addEventListener("click", () => {
  if (lightBulb.src.endsWith("bulboff.gif")) {
    lightBulb.src = "./pic_bulbon.gif";
    buttonElement.textContent = "TURN OFF";
  } else {
    lightBulb.src = "./pic_bulboff.gif";
    buttonElement.textContent = "TURN ON";
  }
});

const divElement = document.getElementById("name");
const btnElement = document.getElementById("btn-2");
divElement.innerText = "Shoaib";
btnElement.addEventListener("click" , () =>{
  divElement.classList.toggle("hidden");

});




const div2Element = document.getElementById("div-1");
const btn3Element = document.getElementById("btn-3");
btn3Element.addEventListener("click", function () {
  div2Element.innerHTML += "<div>Task Complete</div>";
});
