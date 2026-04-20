import "./output.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { supabase } from "./supabaseClient.js";

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

// ===== BUTTON HANDLERS =====

// Download CV Button
document.getElementById("downloadButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Glomer Pimentel Cover Letter.pdf";
  link.download = "Glomer Pimentel Cover Letter.pdf";
  link.click();
});

// Hire Me Button
document.getElementById("hireMeButton").addEventListener("click", () => {
  const email = "xdfeverharsh@gmail.com";
  const subject = "Hiring Inquiry";
  const body = "Hello, I would like to hire you for...";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = gmailLink;
});

// Contact Form Submit
document.getElementById("sendButton").addEventListener("click", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate inputs
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const sendButton = document.getElementById("sendButton");
  sendButton.disabled = true;

  try {
    // Insert data into Supabase
    const { data, error } = await supabase
      .from("emails")
      .insert([{ name: name, email: email, message: message }]);

    if (error) {
      console.error("Error:", error);
      alert("There was an error sending your message.");
      sendButton.disabled = false;
    } else {
      // Success
      sendButton.innerHTML =
        'Sent <i class="fa-solid fa-check"></i>';
      sendButton.classList.add("opacity-50");

      // Clear form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // Reset button after 3 seconds
      setTimeout(() => {
        sendButton.disabled = false;
        sendButton.innerHTML = "Send";
        sendButton.classList.remove("opacity-50");
      }, 3000);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("There was an error sending your message.");
    sendButton.disabled = false;
  }
});

// Social Media Links
document.querySelectorAll(".social-icon").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href && href !== "#") {
      window.location.href = href;
    }
  });
});
