let infoBtn = document.querySelector("#info-btn");
let closeContactInfoBtn = document.querySelector("#close-contact-info");
let contactInfo = document.querySelector(".contact-info");
let menuBtn = document.querySelector("#menu-btn");
let searchBtn = document.querySelector("#search-btn");
let loginBtn = document.querySelector("#login-btn");

infoBtn.onclick = () => {
  toggleSection(contactInfo);
};

closeContactInfoBtn.onclick = () => {
  contactInfo.classList.remove("active");
};

menuBtn.onclick = () => {
  toggleSection(document.querySelector(".header .navbar"));
};

searchBtn.onclick = () => {
  toggleSection(document.querySelector(".header .search-form"));
};

loginBtn.onclick = () => {
  toggleSection(document.querySelector(".header .login-form"));
};

window.addEventListener("scroll", () => {
  closeOtherSections();
});

function toggleSection(section) {
  section.classList.toggle("active");
  closeOtherSections(section);
}

function closeOtherSections(currentSection) {
  const sections = [
    document.querySelector(".contact-info"),
    document.querySelector(".header .navbar"),
    document.querySelector(".header .search-form"),
    document.querySelector(".header .login-form")
  ];

  sections.forEach((section) => {
    if (section !== currentSection) {
      section.classList.remove("active");
    }
  });
}


var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//about section
function toggleReadMore() {
  var aboutText = document.getElementById('aboutText');
  var readMoreBtn = document.querySelector('.btn');

  if (aboutText.style.display === 'none') {
      aboutText.style.display = 'block';
      readMoreBtn.textContent = 'read less';
  } else {
      aboutText.style.display = 'none';
      readMoreBtn.textContent = 'read more';
  }
}


//reviews slider

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//blogs slider
var swiper = new Swiper(".blogs-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


//logo slider
var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});




// let navbar = document.querySelector(".header .navbar");
// let searchForm = document.querySelector(".header .search-form");
// let loginForm = document.querySelector(".header .login-form");
// let contactInfo = document.querySelector(".header .contact-info");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//   searchForm.classList.remove("active");
//   loginForm.classList.remove("active");
// };

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
//   navbar.classList.remove("active");
//   loginForm.classList.remove("active");
// };

// document.querySelector("#login-btn").onclick = () => {
//   loginForm.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
// };

// document.querySelector("#info-btn").onclick = () => {
//   contactInfo.classList.add("active");
// };
// document.querySelector("#close-contact-info").onclick = () => {
//   contactInfo.classList.remove("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
//   loginForm.classList.remove("active");
//   contactInfo.classList.remove("active");
// };

