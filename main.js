import "./output.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

// Theme switching
const ELE = document.documentElement;
const savedTheme = localStorage.getItem("theme");

// Initialize theme
if (savedTheme) {
  ELE.classList.add(savedTheme);
} else {
  // Default to light theme if no saved preference
  localStorage.setItem("theme", "light");
}

// Theme switch listeners
document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    const isDark = ELE.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  })
);

// Mobile navigation
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-nav li");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

const options = [backDrop, menuBar, ...mobileNavItem];

options.forEach((item) =>
  item.addEventListener("click", () => {
    mobileNav.classList.toggle("h-0");
    mobileNav.classList.toggle("h-96");
    menuBarIcon.classList.toggle("fa-xmark");
    menuBarIcon.classList.toggle("fa-bars");
    backDrop.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  })
);

// Header scroll effect
const header = document.querySelector("header");

const toggleClasses = (element, classes, condition) => {
  classes.forEach((className) => {
    element.classList.toggle(className, condition);
  });
};

window.addEventListener("scroll", () => {
  toggleClasses(
    header,
    [
      "shadow-lg",
      "dark:sm:bg-slate-900",
      "dark:bg-slate-800",
      "dark:text-white",
      "bg-white",
    ],
    window.scrollY > 0
  );
});

// Typed.js animations
new Typed(".typedTexts", {
  strings: ["Video Editor", "Logo Creator", "Developer", "Web Designer", " "],
  loop: true,
  typeSpeed: 120,
  backSpeed: 80,
  backDelay: 2000,
});

new Typed(".typedText", {
  strings: ["Dexter", "Glomer", "Dexter", " "],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ScrollReveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal("header", {});
sr.reveal(".homeall", { delay: 100 });
sr.reveal(".projecthead", { delay: 100 });
sr.reveal(".contacthead", { delay: 100 });
sr.reveal(".contactdiv", { delay: 300 });
sr.reveal(".aboutintro", { interval: 200 });

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about1", { delay: 200 });
srLeft.reveal(".about3", { delay: 200 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".about2", { delay: 200 });
srRight.reveal(".project1", { delay: 400 });
srRight.reveal(".project2", { delay: 200 });
srRight.reveal(".project3", { delay: 50 });
srRight.reveal(".lastpart", { delay: 100 });
