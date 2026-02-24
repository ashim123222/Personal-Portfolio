const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});

const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function updateThemeIcon() {
  const icon = toggleBtn.querySelector("i");
  if (root.hasAttribute("data-theme")) {
    icon.className = "fa-regular fa-moon";
  } else {
    icon.className = "fa-regular fa-sun";
  }
}

// Set initial icon based on current theme
updateThemeIcon();

toggleBtn.addEventListener("click", () => {
  if (root.hasAttribute("data-theme")) {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", "dark");
  }
  updateThemeIcon();
});

const toggleMenuBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

toggleMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleMenuBtn.classList.toggle("active");

  const expanded = toggleMenuBtn.getAttribute("aria-expanded") === "true";
  toggleMenuBtn.setAttribute("aria-expanded", !expanded);
});

// ========contact form ======

(function () {
  emailjs.init("f1WRXs-x2lNCht7v8"); // yaha apna Public Key daalo
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_tt1raoj", // yaha Service ID
      "template_w8owpjo", // yaha Template ID
      this,
    )
    .then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message.");
        console.log(error);
      },
    );
});
