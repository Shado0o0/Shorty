let originalTitle = document.title;

window.onblur = () => { document.title = " Reviens !"; };
window.onfocus = () => { document.title = "Raccourcis"; };

function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}

var button = domcument.getElementById("click-button");

var test = 0;

button.addEventListener("click", function() {
  test++;
  console.log("Button clicked ");
});