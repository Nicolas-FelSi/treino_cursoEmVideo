const anoNasc = document.getElementById("anoNasc");
const gender = document.getElementsByName("gender");
const check = document.getElementById("check");
const result = document.getElementById("result");
const img = document.createElement("img");
var genderCheck = "";

check.addEventListener("click", checkClick);

const date = new Date();
const dateNow = date.getFullYear();

function checkClick() {
  const age = dateNow - anoNasc.value;

  if (anoNasc.value == 0 || anoNasc.value > dateNow) {
    result.innerHTML = "<b>[ERRO] - Data inválida. Tente Novamente</b>";
    result.style.color = "red";
    result.style.backgroundColor = "#fc9999";
    result.style.padding = "20px";
  } else {
    if (gender[0].checked) {
      genderCheck += "Homem";
      if (age > 2 && age < 14) {
        img.setAttribute("src", "./images/menino.png");
      } else if (age > 13 && age < 30) {
        img.setAttribute("src", "./images/jovemM.png");
      } else if (age > 29 && age < 60) {
        img.setAttribute("src", "./images/homem.png");
      } else if (age > 59) {
        img.setAttribute("src", "./images/idoso.png");
      }
    } else if (gender[1].checked) {
      genderCheck += "Mulher";
      if (age > 2 && age < 14) {
        img.setAttribute("src", "./images/menina.png");
      } else if (age > 13 && age < 30) {
        img.setAttribute("src", "./images/jovemF.png");
      } else if (age > 29 && age < 60) {
        img.setAttribute("src", "./images/mulher.png");
      } else if (age > 59) {
        img.setAttribute("src", "./images/idosa.png");
      }
    }
    result.innerHTML = `Detectamos um(a) <b>${genderCheck}</b> com <b>${age}</b> anos de idade.`;
    result.appendChild(img)
  }
}
