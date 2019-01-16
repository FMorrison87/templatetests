const navbar = document.querySelector(".navbar");

function darkenNav() {
  if (window.scrollY == 0) {
    navbar.classList.remove("bg-dark");
  } else {
    navbar.classList.add("bg-dark");
  }
}

document.addEventListener("scroll", darkenNav);
