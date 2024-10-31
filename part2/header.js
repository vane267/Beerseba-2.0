let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

function toggle() {
  classList.toggle("active");
}

// Listen for a click anywhere on the page to close the dropdown
window.addEventListener("click", ocultar);

function ocultar(event) {
  // If the click was outside the button, close the dropdown
  if (!btn.contains(event.target)) {
    classList.remove("active");
  }
}
