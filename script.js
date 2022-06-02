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
