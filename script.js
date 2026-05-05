const projects = [
  {
    title: "Student MVC System",
    description: "CRUD system using PHP MVC",
    tech: ["PHP", "MySQL"]
  },
  {
    title: "Airline Booking System",
    description: "Simple airline booking application",
    tech: ["Java"]
  },
  {
    title: "Online Shopping Website",
    description: "E-commerce platform for online shopping",
    tech: ["Html", "CSS", "JavaScript"]
  }
];

const container = document.getElementById("project-list");

if (container) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <small>${project.tech.join(", ")}</small>
    `;

    container.appendChild(card);
  });
}

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
  const isRare = Math.random() < 0.0001;

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