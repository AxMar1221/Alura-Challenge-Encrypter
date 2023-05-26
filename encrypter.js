//Mensaje en consola de carga de la pagina
window.addEventListener("load", () => {
  console.log("Encryptor loaded");
});

//Efecto en botones
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

//crear variables para obtener los elementos HTML necesarios para la función del programa
let textOriginal = document.getElementById("text-original");
let textEncrypt = document.getElementById("text-encrypt");
let showEncrypt = document.querySelector(".show-encrypt");

//validar texto
function verifyText() {
  let verifyText = document.getElementById("text-original").value;
  if(/[A-ZÁÉÍÓÚáéíóú]/.test(verifyText)) {
    Swal.fire({
      title: 'El texto contiene mayúsculas y/o acentos',
      icon: 'error',
      showConfirmButton: true,
      confirmButtonColor: "#0a3871",
      timer: 4000,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
      return false; // interrumpe la ejecución de la función
  }
}

//creamos la función para encriptara el texto con el botón Encriptar
function encryptText() {
  hideContent();

  let verify = verifyText();
  if( verify == false){
      return;
  }

  let encryptedText = textOriginal.value.toLowerCase();
  let textResult = encryptedText.replace(/[aeiou]/g, function (letter) {
    switch (letter) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        break;
    }
  });
  showEncrypt.innerHTML = textResult;
  console.log(textResult);
}

//creamos la función para desencriptar el texto con el botón Desencriptar
function decryptText() {
  hideContent();

  let verify = verifyText();
  if( verify == false){
      return;
  }

  let encryptedText = textOriginal.value.toLowerCase();
  let textResult = encryptedText.replace(
    /(ai|enter|imes|ober|ufat)/g,
    function (letter) {
      switch (letter) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
        default:
          break;
      }
    }
  );
  showEncrypt.innerHTML = textResult;
  console.log(textResult);
}

//función que oculta el contenido del <aside> y muestra el texto encriptado
function hideContent() {
  const hideMuneco = document.querySelectorAll(".muneco");
  hideMuneco.forEach((ele) => {
    ele.style.display = "none";
  });
  const hideContent = document.querySelectorAll(".hide");
  hideContent.forEach((ele) => {
    ele.style.display = "none";
  });
  const showContent = document.querySelectorAll(".show");
  showContent.forEach((ele) => {
    ele.style.display = "block";
  });
}

//reset al área de encriptado para mostrar nuevamente el contenido original de la section
setInterval(() => {
  const hideMuneco = document.querySelectorAll(".muneco");
  hideMuneco.forEach((ele) => {
    ele.style.display = "block";
  });
  const hideContent = document.querySelectorAll(".hide");
  hideContent.forEach((ele) => {
    ele.style.display = "block";
  });
  const showContent = document.querySelectorAll(".show");
  showContent.forEach((ele) => {
    ele.style.display = "none";
  });
  console.log("page reload");
}, 60000);

//copiar texto encriptado/desencriptado en portapapeles
function copyText() {
  // Seleccionar el elemento que contiene el texto a copiar
  let element = document.getElementById("texto-a-copiar");
  // Crear un área de texto oculta
  let textArea = document.createElement("textarea");
  // Asignar el valor del texto a copiar al área de texto
  textArea.value = element.textContent;
  // Añadir el área de texto al documento
  document.body.appendChild(textArea);
  // Seleccionar el texto dentro del área de texto
  textArea.select();
  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");
  // Eliminar el área de texto del documento
  document.body.removeChild(textArea);
  // alert("Texto copiado a portapapeles");
  Swal.fire({
    title: 'Texto copiado a portapapeles',
    icon: 'success',
    showConfirmButton: true,
    confirmButtonColor: "#0a3871",
    timer: 4000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  //poner el cursor en el espacio para encriptar un texto nuevo
  let focusEncrypt = document.querySelector(".text-original");
  focusEncrypt.value = "";
  focusEncrypt.focus();
}

//Obtener el año actual para elemento del footer
let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
