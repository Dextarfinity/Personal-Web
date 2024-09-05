import "./input.css";

const ELE = document.documentElement;
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-nav li");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);

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

ELE.classList.add(localStorage.getItem("theme"));

var typingEffect = new Typed(".typedTexts",{
  strings : ["Video Editor", "Logo Creator", "Developer", "Web Designer", " "],
  loop : true,
  typeSpeed : 120,
  backSpeed : 80,
  backDelay : 2000
})

var typingEffect = new Typed(".typedText",{
  strings : ["Dexter", "Glomer", "Dexter", " "],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 2000
})



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('header',{})
sr.reveal('.homeall',{delay: 100})
sr.reveal('.projecthead',{delay: 100})
sr.reveal('.contacthead',{delay: 100})
sr.reveal('.contactdiv',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.aboutintro',{interval: 200})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about1',{delay: 200})
srLeft.reveal('.about3',{delay: 200})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.about2',{delay: 200})
srRight.reveal('.project1',{delay: 400})
srRight.reveal('.project2',{delay: 200})
srRight.reveal('.project3',{delay: 50})
