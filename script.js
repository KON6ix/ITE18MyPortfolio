// Elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
} else {
  // Default: light mode
  body.classList.add("light");
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// Editable About Section
const editBtn = document.getElementById("edit-btn");
const aboutText = document.getElementById("about-text");

editBtn.addEventListener("click", () => {
  const isEditing = aboutText.getAttribute("contenteditable") === "true";
  
  if (isEditing) {
    aboutText.setAttribute("contenteditable", "false");
    aboutText.classList.remove("editing");
    editBtn.textContent = "✏️ Edit";
  } else {
    aboutText.setAttribute("contenteditable", "true");
    aboutText.classList.add("editing");
    aboutText.focus();
    editBtn.textContent = "💾 Save";
  }
});
