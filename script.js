document.querySelector(".changeThemeButton").addEventListener("click", () => {
  if (
    (document.body.className == "" ||
      document.body.className === "yellowish") &&
    window.innerWidth > 1200
  ) {
    document.body.classList.toggle("sumireBackground");
  } else if (document.body.className === "sumireBackground") {
    document.body.classList.remove("sumireBackground");
    document.body.classList.toggle("nazunaBackground");
  } else if (document.body.className === "nazunaBackground") {
    document.body.classList.remove("nazunaBackground");
  } else if (window.innerWidth < 1200) {
    document.body.classList.toggle("yellowish");
  }
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// if(getComputedStyle(document.body).flexDirection = "column"){

// }
