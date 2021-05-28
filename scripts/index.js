"use strict"
const calculate = () => {
  let data = prompt("Введите выражение, которое хотите посщитать");
  if (data === null) {
    alert("Ввод отменен!");
  } else {
    data = data.replace(/,/g, ".");
    try {
      let result = eval(data);

      if (data === "") {
        alert("Вы ничего не ввели!")
      } else if (result === Infinity || result === -Infinity) {
        alert("На нуль делить нельзя!");
      } else if (isNaN(result)) {
        alert("Введите корректное выражение!");
      } else {
        alert(result);
      }
    } catch {
      alert("Введите корректное выражение!")
    }
  }
}

const calculator = document.getElementById("calculator");

// calculator.onclick = ()=> alert('hello');

calculator.addEventListener("click", calculate)


// menu

const menuAdaptive = document.getElementById("menu-adaptive");
const menu = document.getElementById("menu");

function toggleClass(elem, className){
  elem.classList.toggle(className);
}

menuAdaptive.addEventListener("click", () => toggleClass(menu, "menu-none"));


const modal = document.getElementById("modal-form");
const started = document.getElementById("started");
const closeForm = document.getElementById("close-form");

started.addEventListener("click", () => toggleClass(modal, "d-none"));
closeForm.addEventListener("click", () => toggleClass(modal, "d-none"));
