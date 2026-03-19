setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.querySelector(".clock").innerHTML = time;
});

// reveal everything =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    }, 1000);
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

// reveal card enter ================
const revealCard = document.querySelectorAll(".reveal-card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealCard.forEach((reveal) => {
  cardObserver.observe(reveal);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});

// theme dark mode =====================
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// color btns selection =======
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const dBlue = document.getElementById("d-blue");
const dRed = document.getElementById("d-red");
const dGreen = document.getElementById("d-green");

function updateThemeIcon() {
  const icon = toggleBtn.querySelector("i");
  if (root.hasAttribute("data-theme")) {
    icon.className = "fa-regular fa-moon";
  } else {
    icon.className = "fa-regular fa-sun";
  }
}

function updateActiveThemeBtn(themeName) {
  [blue, red, green, dBlue, dRed, dGreen].forEach((btn) => {
    if (btn) btn.classList.remove("active-theme");
  });
  if (themeName && themeName !== "white" && themeName !== "") {
    const activeBtn = document.getElementById(themeName);
    if (activeBtn) activeBtn.classList.add("active-theme");
  }
}

toggleBtn.addEventListener("click", () => {
  if (root.hasAttribute("data-theme")) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "");
    updateActiveThemeBtn("");
  } else {
    root.setAttribute("data-theme", "white");
    localStorage.setItem("theme", "white");
    updateActiveThemeBtn("white");
  }
  updateThemeIcon();
});

function setTheme(themeName) {
  root.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
  updateThemeIcon();
  updateActiveThemeBtn(themeName);
}

blue.addEventListener("click", () => setTheme("blue"));
red.addEventListener("click", () => setTheme("red"));
green.addEventListener("click", () => setTheme("green"));

dBlue.addEventListener("click", () => setTheme("d-blue"));
dRed.addEventListener("click", () => setTheme("d-red"));
dGreen.addEventListener("click", () => setTheme("d-green"));

// Initialize theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme !== null) {
  if (savedTheme === "") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", savedTheme);
  }
}
updateThemeIcon();
updateActiveThemeBtn(
  savedTheme !== null ? savedTheme : root.getAttribute("data-theme") || "",
);

const theme = document.getElementById("theme");
const showColor = document.querySelector(".show-color");

theme.addEventListener("click", () => {
  showColor.classList.toggle("active");
  theme.classList.toggle("active");
});

// hide or show navbar ========
const toggleMenuBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

toggleMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleMenuBtn.classList.toggle("active");

  const expanded = toggleMenuBtn.getAttribute("aria-expanded") === "true";
  toggleMenuBtn.setAttribute("aria-expanded", !expanded);
});

// ========contact form ======
const form = document.getElementById("contact-form");

if (form && typeof emailjs !== "undefined") {
  emailjs.init("f1WRXs-x2lNCht7v8"); // yaha apna Public Key daalo

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
}

// == ENHANCEMENTS: Glow Effect, Magnetic Buttons, 3D Tilt ==

// Magnetic Buttons
// Selecting all clickable elements
const magneticElements = Array.from(
  document.querySelectorAll(
    ".social-links a, .color button, .card a, .go-to-t, form button",
  ),
);

magneticElements.forEach((el) => {
  el.classList.add("magnetic-element");

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth magnetic pull
    const pullX = x * 0.5;
    const pullY = y * 0.5;

    el.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.05)`;
  });

  el.addEventListener("mouseleave", () => {
    // Smooth reset
    el.style.transform = "translate(0px, 0px) scale(1)";
  });
});

