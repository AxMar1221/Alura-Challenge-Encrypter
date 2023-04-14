//Mensaje en consola de carga de la pagina
window.addEventListener("load", () => {
  console.log("Encryptor loaded");
});

// Efecto en botones
const button = document.querySelectorAll(".ripple");

button.forEach((button) => {
  button.addEventListener("click", function (eve) {
    const x = eve.pageX;
    const y = eve.pageY;

    const buttonTop = eve.target.offsetTop;
    const buttonLeft = eve.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

//Texto-original
function showText() {
  const textarea = document.getElementById("text-original");
  textarea.addEventListener("input", () => {
    console.log(textarea.value);
  });
}
showText();

//footer
// Obtener el año actual
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
