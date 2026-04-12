const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Automation Specialist"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const element = document.querySelector(".typing");

  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = roles[i].substring(0, j--);
    }

    element.textContent = current;

    if (j === roles[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
