// TYPING EFFECT
const roles = ["DevOps Engineer","Cloud Engineer","Automation Specialist"];

let i=0,j=0,current="",deleting=false;

function type(){
  const el=document.querySelector(".typing");

  if(!deleting && j<=roles[i].length){
    current=roles[i].substring(0,j++);
  } else if(deleting && j>=0){
    current=roles[i].substring(0,j--);
  }

  el.textContent=current;

  if(j===roles[i].length) deleting=true;
  if(j===0 && deleting){
    deleting=false;
    i=(i+1)%roles.length;
  }

  setTimeout(type,deleting?100:200);
}
type();


// PARTICLES
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{
  constructor(){
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*canvas.height;
    this.size=Math.random()*2;
    this.speedX=Math.random()*0.3-0.15;
    this.speedY=Math.random()*0.3-0.15;
  }

  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;

    if(this.x>canvas.width) this.x=0;
    if(this.x<0) this.x=canvas.width;
    if(this.y>canvas.height) this.y=0;
    if(this.y<0) this.y=canvas.height;
  }

  draw(){
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function init(){
  particles=[];
  for(let i=0;i<80;i++){
    particles.push(new Particle());
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  init();
});
