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



document.getElementById("menu").addEventListener("click", () => {
  // Add [0] to target the first <nav> element found
  const menu = document.getElementsByTagName("nav")[0];
  
  // Now classList.toggle will work perfectly
  menu.classList.toggle("active"); 
});