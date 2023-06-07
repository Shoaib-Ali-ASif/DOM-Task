const lightBulb = document.getElementById("lighbulb");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (lightBulb.src.endsWith("bulboff.gif")) {
    lightBulb.src = "./pic_bulbon.gif";
    button.textContent = "TURN OFF";
  } else {
    lightBulb.src = "./pic_bulboff.gif";
    button.textContent = "TURN ON";
  }
});
