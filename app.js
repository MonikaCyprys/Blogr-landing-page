(function () {
  const nameSection = document.querySelectorAll(".name-list-nav");
  const submenu = document.querySelectorAll(".submenu");
  const menuBtn = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavOpen = document.querySelector(".menu-close");
  const mobileNavClose = document.querySelector(".menu-line ");

  function showMenu() {
    if (!mobileNav.classList.contains("slide-in")) {
      mobileNavOpen.style.display = "block";
      mobileNavClose.style.display = "none";
      mobileNav.classList.add("slide-in");
    } else {
      mobileNavClose.style.display = "block";
      mobileNavOpen.style.display = "none";
      mobileNav.classList.remove("slide-in");
    }
  }
  function showSubmenu(e) {
    let element = e.target;
    if (element.classList.contains("name-list-nav")) {
      if (!element.children[1].classList.contains("active")) {
        element.children[1].classList.add("active");
      } else element.children[1].classList.remove("active");
    }
  }
  nameSection.forEach((section) => {
    section.addEventListener("click", showSubmenu);
  }, false);

  menuBtn.addEventListener("click", showMenu);
})();

(function () {
  const imgs = document.querySelectorAll(".image-section");
  let screenWidth = window.innerWidth;
  if (screenWidth >= 950) {
    imgs.forEach((img) => {
      img.src = `/images/illustration-${img.dataset.desktop}.svg`;
    });
  } else if (screenWidth < 950) {
    imgs.forEach((img) => {
      img.src = `/images/illustration-${img.dataset.mobile}.svg`;
    });
  }
})();
