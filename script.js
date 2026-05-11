const projects = [
  {
    title: "Student MVC System",
    description: "CRUD system using PHP MVC",
    link: "https://github.com/Earl-Triggs/Student-MVC-System.git",
    tech: [
      { name: "PHP", icon: "images/php.png" },
      { name: "MySQL", icon: "images/database.png" }
    ]
  },
  {
    title: "Airline Booking System",
    description: "Simple airline booking application",
    link: "https://github.com/Earl-Triggs/Airline-Booking-System.git",
    tech: [
      { name: "Java", icon: "images/java.png" }
    ]
  },
  {
    title: "Online Shopping Website",
    description: "E-commerce platform",
    link: "https://limoshopping.netlify.app/",
    tech: [
      { name: "HTML", icon: "images/html-5.png" },
      { name: "CSS", icon: "images/css-3.png" }
    ]
  },
  {
    title: "Video Editing",
    description: "More of a side hobby, but I have experience with video editing using Adobe Photoshop, and DaVinci Resolve. I enjoy creating short videos and animations for fun.",
    link: "https://www.tiktok.com/@triggaword",
    tech: [
      { name: "DaVinci Resolve", icon: "images/davinci.png" },
      { name: "Adobe Photoshop", icon: "images/photoshop.png" }
    ]
  },
  {
    title: "Movie Website",
    description: "A movie website that allows users to browse and search for movies, view details, and read reviews.",
    link: "https://sean-web-movies.netlify.app/",
    tech: [
      { name: "HTML", icon: "images/html-5.png" },
      { name: "CSS", icon: "images/css-3.png" },
      { name: "JavaScript", icon: "images/js.png" }
    ]
  },
  {
    title: "POS System",
    description: "A point-of-sale system for a fictional coffee shop.",
    link: "https://github.com/itszshinnn/starsbuck-pos-system",
    tech: [
      { name: "C++", icon: "images/c-.png" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {

  const projectContainer = document.getElementById("project-list");

  if (projectContainer) {
    projectContainer.innerHTML = projects.map(p => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>

        <div class="tech-icons">
        ${(p.tech || []).map(t => `
          <img src="${t.icon}" alt="${t.name}">
        `).join("")}
        </div>

        <a href="${p.link}" target="_blank" class="btn">View Project</a>
      </div>
  `).join("");
  }

  const featuredContainer = document.getElementById("featured-projects");

  if (featuredContainer) {

    let start = 0;
    const visibleCount = 2;

function renderFeatured() {
  const visible = [];

  for (let i = 0; i < visibleCount; i++) {
    const project = projects[(start + i) % projects.length];
    if (project) visible.push(project);
  }
  featuredContainer.style.opacity = 0;

  setTimeout(() => {

    featuredContainer.innerHTML = visible.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>

    <div class="tech-icons">
      ${(p.tech || []).map(t => `
        <img src="${t.icon}" alt="${t.name}">
      `).join("")}
    </div>

    <a href="${p.link}" target="_blank" class="btn">View Project</a>
    </div>
    `).join("");
    requestAnimationFrame(() => {
      featuredContainer.style.opacity = 1;
    });

  }, 200);
}

    renderFeatured();

    setInterval(() => {
      start = (start + 1) % projects.length;
      renderFeatured();
    }, 3000);
  }

});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 120) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});







const texts = [
  "Hello",
  "Kamusta",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Bonjour",
  "¡Hola!",
];

// Pinaglaruan ko lang ng onte sir hehe
const rareText = [
  "⸢This story is for just that one reader.⸥",
  "⸢Hello, Puppet of the Oldest Dream.⸥",
  "⸢■■⸥",
  "⸢Hello, World!⸥"
];

let index = 0;
const element = document.getElementById("changing-text");

function getRandomText() {
  const isRare = Math.random() < 0.01;

  if (isRare) return rareText[Math.floor(Math.random() * rareText.length)];
  index = (index + 1) % texts.length;
  return texts[index];
}

setInterval(() => {
  element.style.opacity = 0;
  setTimeout(() => {
    element.textContent = getRandomText();
    element.style.opacity = 1;
  }, 500);
}, 2500);






const track = document.querySelector(".skills-track");

if (track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.classList.remove("dragging");
  });

  track.addEventListener("mouseup", () => {
    isDown = false;
    track.classList.remove("dragging");
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const walk = (e.pageX - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}



const hobbyCarousel = document.getElementById("hobbyCarousel");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const hobbyCards = document.querySelectorAll(".hobby-card");

let currentIndex = 0;

function updateCarousel() {

  hobbyCards.forEach(card => {
    card.classList.remove("active");
  });

  hobbyCards[currentIndex].classList.add("active");

  const card = hobbyCards[currentIndex];

  const scrollPosition =
    card.offsetLeft -
    (hobbyCarousel.offsetWidth / 2) +
    (card.offsetWidth / 2);

  hobbyCarousel.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
}

if (nextBtn && prevBtn) {

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % hobbyCards.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + hobbyCards.length) % hobbyCards.length;

    updateCarousel();
  });

  updateCarousel();
}

// experimenting lang poooo
document.addEventListener("DOMContentLoaded", () => {

  const texts = [
    "[Constellation, 'Demon King of Salvation', is watching your story.]",
    "[Constellation, 'God of Wine and Ecstasy', is greeting you.]",
    "[The constellation 'Prisoner of the Golden Headband' wants the X-grade Ferrarigini.]",
    "[Constellation, 'Abyssal Black Flame Dragon', is asking you if the rumour is true.]"
  ];
  
  const el = document.createElement("span");
  el.style.position = "fixed";
  el.style.fontSize = "13px";
  el.style.color = "rgba(255,255,255,0.7)";
  el.style.pointerEvents = "none";
  el.style.opacity = "0";
  el.style.transition = "opacity 0.4s ease";
  el.style.zIndex = "999";
  el.style.fontStyle = "italic";

  document.body.appendChild(el);

  function showRandomText() {
    el.textContent = texts[Math.floor(Math.random() * texts.length)];

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    el.style.left = x + "px";
    el.style.top = y + "px";

    el.style.opacity = "1";

    setTimeout(() => {
      el.style.opacity = "0";
    }, 4000);
  }

  function loop() {
    const delay = Math.random() * 30000 + 30000;
    setTimeout(() => {
      showRandomText();
      loop();
    }, delay);
  }

  loop();
});



document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".type-text");

  let delay = 0;

  paragraphs.forEach(p => {
    const text = p.textContent;
    p.textContent = "";

    setTimeout(() => {
      let i = 0;

      p.classList.add("typing");

      function type() {
        if (i < text.length) {
          p.textContent += text[i];
          i++;
          setTimeout(type, 7);
        } else {
          p.classList.remove("typing");
        }
      }

      type();
    }, delay);

    delay += text.length * 10;
  });
});


const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");

  if (themeToggle) {
    themeToggle.textContent = "🌙";
  }
}

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    themeToggle.textContent = isLight ? "🌙" : "☀️";
  });

}








document.addEventListener("DOMContentLoaded", () => {
  const hidden = document.querySelector(".hidden-content");

  if (!hidden) return;

  setTimeout(() => {
    hidden.style.opacity = "1";
  }, 2200);
});


const terminalLayer = document.getElementById("terminal-layer");

const terminalData = [
  ["system check...", "cpu: stable", "memory: ok"],
  ["network scan...", "ports open: 3", "firewall active"],
  ["loading modules...", "auth: verified", "access granted"],
  ["syncing data...", "cloud: connected", "status: online"],
  ["[Constellation, 'Demon King of Salvation', is greeting you.]"],
  ["⸢Hello, Puppet of the Oldest Dream.⸥"],
  ["syncing data...", "cloud: failed", "status: retrying..."],
  ["system check...", "cpu: overheating", "memory: critical"],
  ["⸢Tell me, you fool. If I continue to regress, will I ever get to meet you again?⸥"],
  ["loading modules...", "auth: failed", "access denied!"],
  ["[Constellation, 'Demon-like Judge of Fire', is saying Hi to you.]"],
  ["[Constellation, 'Secretive Plotter', is watching you.]"]
];

function createTerminal(lines) {
  const box = document.createElement("div");
  box.classList.add("spawn-terminal");

  box.style.top = Math.random() * 80 + "vh";
  box.style.left = Math.random() * 80 + "vw";

  let i = 0;

  function typeLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.textContent = "> " + lines[i];
      box.appendChild(p);
      i++;
      setTimeout(typeLine, 500);
    }
  }

  terminalLayer.appendChild(box);

  setTimeout(() => {
    box.classList.add("show");
    typeLine();
  }, 200);

  setTimeout(() => {
    box.style.opacity = "0";
    setTimeout(() => box.remove(), 1000);
  }, 12000);
}

function spawnLoop() {
  const data = terminalData[Math.floor(Math.random() * terminalData.length)];
  createTerminal(data);

  setTimeout(spawnLoop, Math.random() * 2000 + 800);
}

spawnLoop();