const cards = document.querySelectorAll(".point");
let current = 0;

function updateCards() {
  cards.forEach((card) => {
    card.classList.remove("active", "left", "right");
  });

  const total = cards.length;

  const activeIndex = current;
  const leftIndex = (current - 1 + total) % total;
  const rightIndex = (current + 1) % total;

  cards[activeIndex].classList.add("active");
  cards[leftIndex].classList.add("left");
  cards[rightIndex].classList.add("right");

  current = (current + 1) % total;
}

updateCards(); // initial state
setInterval(updateCards, 2000);

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".fade-left, .fade-right")
    .forEach((el) => el.classList.add("animate"));
});

document.querySelectorAll(".glassy-hover").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

// Intersection Observer for active nav link
const observerOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const sectionIds = ["home", "skill", "about-me", "project", "contact-me"];
const navLinks = document.querySelectorAll(".nav-btn-links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(
        `.nav-btn-links a[href="#${id}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    observer.observe(section);
  }
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    if (item.dataset.section === currentSection) {
      item.classList.add("active");
    }
  });
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

// proj-images related

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
  thumb.addEventListener("mouseenter", () => {
    mainImage.src = thumb.src;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Alert for go-live-btn clicks
const goLiveBtns = document.querySelectorAll(".go-live-btn");
goLiveBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Live demo link coming soon!");
  });
});

// form relatred

const form = document.getElementById("contactForm");
const successMsg = document.querySelector(".success-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // reset form
  form.reset();

  // show success message
  successMsg.classList.add("show");

  // auto hide after 3 sec
  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
});
