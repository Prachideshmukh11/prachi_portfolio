const roles = ["DevOps Engineer", "AWS Specialist", "Automation Expert"];
let i = 0, j = 0, deleting = false;

function type() {
  let current = roles[i];
  document.getElementById("typing").textContent =
    current.substring(0, j);

  if (!deleting) j++;
  else j--;

  if (j === current.length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();
