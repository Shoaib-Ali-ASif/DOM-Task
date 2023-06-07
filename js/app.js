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


const divElement = document.getElementById("div");
const btnElement = document.getElementById("btn-3");
btnElement.addEventListener("click", function () {
  divElement.innerHTML += "<div>Task Complete</div>";
});
