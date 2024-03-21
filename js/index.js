var check = document.getElementById("click");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");

check.addEventListener("click", () => {
    if (check.checked) {
        header.style.backgroundColor = "#974C1C";
        logo.style.color = "#fff";
        menu.style.color = "#fff";

      } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#974C1C";
        menu.style.color = "#974C1C";

      }
} );


