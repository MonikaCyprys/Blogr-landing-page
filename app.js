(function () {
  const nameSection = document.querySelectorAll(".name-list-nav");
  const submenu = document.querySelectorAll(".submenu");
  const submenuLi = document.querySelectorAll(".submenu li");
  const menuBtn = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavOpen = document.querySelector(".menu-close");
  const mobileNavClose = document.querySelector(".menu-line ");

  function showMenu() {
    const iconHamburger =
      menuBtn.style.backgroundImage === "url(../images/icon-hamburger.svg)";
    if (!mobileNav.classList.contains("slide-in") && !iconHamburger) {
      menuBtn.style.backgroundImage = "url(images/icon-close.svg)";
      mobileNav.classList.add("slide-in");
    } else {
      menuBtn.style.backgroundImage = "url(images/icon-hamburger.svg)";
      mobileNav.classList.remove("slide-in");
    }
  }
  function showSubmenu(e) {
    let element = e.target;
    if (element.classList.contains("name-list-nav")) {
      submenu.forEach((sub) => sub.classList.remove("active"));
      submenuLi.forEach((li) =>
        li.addEventListener("click", function () {
          submenu.forEach((subm) => subm.classList.remove("active"));
        })
      );
      if (!element.children[1].classList.contains("active")) {
        element.children[1].classList.add("active");
      } else {
        element.children[1].classList.remove("active");
      }
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

  window.addEventListener("resize", checkScreenSize);
  window.addEventListener("load", checkScreenSize);

  function checkScreenSize() {
    screenWidth = window.innerWidth;
    if (screenWidth >= 970) {
      imgs.forEach((img) => {
        img.src = `images/illustration-${img.dataset.desktop}.svg`;
      });
    } else if (screenWidth < 970) {
      imgs.forEach((img) => {
        img.src = `images/illustration-${img.dataset.mobile}.svg`;
      });
    }
  }
})();
