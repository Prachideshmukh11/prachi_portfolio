const roles = ["DevOps Engineer", "Cloud Engineer", "Automation Specialist"];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {
  const el = document.querySelector(".typing");

  if (!deleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  } else if (deleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  el.textContent = current;

  if (j === roles[i].length) deleting = true;
  if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 40 : 90);
}

type();
