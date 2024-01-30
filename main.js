const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", scrollHeader);
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_zhfjd7u",
      "template_j8ke7gf",
      "#contact-form",
      "7edEe94Jen3D4SDKv"
    )
    .then(() => {
      contactMessage.textContent = "Message Sent Successfully ✅";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    });
};
contactForm.addEventListener("submit", sendEmail);
window.sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 40,
  reset: true,
});

sr.reveal(`.home__title`, { origin: "top" });
sr.reveal(`.home__desc`, { origin: "right" });
sr.reveal(`.service__card`, { origin: "bottom" });
sr.reveal(`.service__title`, { origin: "top" });
sr.reveal(`.home__btn`, { origin: "bottom" });
sr.reveal(`.about__img`, { origin: "left" });
sr.reveal(`.about__img`, { origin: "left" });
sr.reveal(`.about__desc`, { origin: "right" });
sr.reveal(`.about__title`, { origin: "top" });
sr.reveal(`.service__subtitle`, { origin: "top" });
sr.reveal(`.service__subtitle`, { origin: "top" });
sr.reveal(`.service__desc`, { origin: "bottom" });
sr.reveal(`.contact__wrapper`, { origin: "bottom" });
sr.reveal(`.contact__title`, { origin: "left", delay: 200 });
sr.reveal(`.contact__desc`, { origin: "right", delay: 300 });
sr.reveal(`.contact__phone`, { origin: "bottom", delay: 400 });
sr.reveal(`.contact__submit`, { origin: "bottom", delay: 1000 });
