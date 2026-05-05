const projects = [
  {
    title: "Student MVC System",
    description: "CRUD system using PHP MVC",
    tech: [
      { name: "PHP", icon: "images/php.png" },
      { name: "MySQL", icon: "images/database.png" }
    ]
  },
  {
    title: "Airline Booking System",
    description: "Simple airline booking application",
    tech: [
      { name: "Java", icon: "images/java.png" }
    ]
  },
  {
    title: "Online Shopping Website",
    description: "E-commerce platform",
    tech: [
      { name: "HTML", icon: "images/html-5.png" },
      { name: "CSS", icon: "images/css-3.png" },
      { name: "JavaScript", icon: "images/js.png" }
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

const texts = [
  "Hello",
  "Kamusta",
  "こんにちは",
  "안녕하세요"
];

const rareText = "⸢This story is for just that one reader.⸥";

let index = 0;
const element = document.getElementById("changing-text");

function getRandomText() {
  const isRare = Math.random() < 0.01;

  if (isRare) return rareText;
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