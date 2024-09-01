
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Video Editor", "Logo Creator", "Developer", ""],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

var typingEffect = new Typed(".typedTexts",{
    strings : ["Dexter Pimentel", ""],
    loop : true,
    typeSpeed : 120,
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
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function myFacebook() {
  window.location.href = "https://www.facebook.com/glomer.pimentel";
}

function myInstagram() {
  window.location.href = "https://www.instagram.com/dex_licht/";
}

function myGitHub() {
  window.location.href = "https://github.com/Dextarfinity";
}

function myLinkedIn() {
  window.location.href = "https://www.linkedin.com/in/dexter-pimentel-07302a2a7/";
}

function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'assets/Glomer Pimentel Cover Letter.pdf'; // Path to your PDF file
  link.download = 'Glomer Pimentel Cover Letter.pdf'; // Name for the downloaded file
  link.click();
}

// Attach the downloadPDF function to the button's onclick event
document.getElementById('downloadButton').onclick = downloadPDF;
function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'assets/Glomer Pimentel Cover Letter.pdf'; // Path to your PDF file
  link.download = 'Glomer Pimentel Cover Letter.pdf'; // Name for the downloaded file
  link.click();
}

// Attach the downloadPDF function to the button's onclick event
document.getElementById('downloadButton1').onclick = downloadPDF;

function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'assets/Glomer Pimentel Cover Letter.pdf'; // Path to your PDF file
  link.download = 'Glomer Pimentel Cover Letter.pdf'; // Name for the downloaded file
  link.click();
}

// Attach the downloadPDF function to the button's onclick event
document.getElementById('downloadButton2').onclick = downloadPDF;

function hireMe() {
  const email = 'xdfeverharsh@gmail.com';
  const subject = 'Hiring Inquiry'; // Optional: Set a default subject
  const body = 'Hello, I would like to hire you for...'; // Optional: Set a default body

  // Create a Gmail URL
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Redirect to the Gmail link
  window.location.href = gmailLink;
}

// Attach the hireMe function to the button's onclick event
document.getElementById('hireMeButton').onclick = hireMe;
