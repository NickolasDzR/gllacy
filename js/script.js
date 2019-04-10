


var popup = document.querySelector(".popup");
var popup_on = document.querySelector(".popup-button");
var popup_off = document.querySelector(".close-button-form");
var overlay = document.querySelector(".overlay");


popup_on.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("display-block");
  popup.classList.remove("display-none");
  console.log("включаем popup и overlay");
  overlay.classList.add("display-block");
  overlay.classList.remove("display-none");
});
popup_off.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("display-none");
  popup.classList.remove("display-block");
  console.log("включаем popup");
  overlay.classList.add("display-none");
  overlay.classList.remove("display-block");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("display-block")) {
      evt.preventDefault();
      popup.classList.remove("display-block");
      popup.classList.add("display-none");
      console.log("нажимаем esc и выключаем карту");
    }
  }
});