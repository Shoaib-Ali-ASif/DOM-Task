const lightBulb = document.getElementById("lighbulb");
const button = document.getElementById("btn-1");

button.addEventListener("click", () => {
  if (lightBulb.src.endsWith("bulboff.gif")) {
    lightBulb.src = "./pic_bulbon.gif";
    button.textContent = "TURN OFF";
  } else {
    lightBulb.src = "./pic_bulboff.gif";
    button.textContent = "TURN ON";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const btnElement = document.getElementById("btn");
  btnElement.addEventListener("click", function () {
    const divElement = document.getElementById("div");
    divElement.innerHTML += "<div>Hello BRO</div>";
  });
});
