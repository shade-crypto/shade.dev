/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

class P{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.vx=(Math.random()-0.5)*0.5;
this.vy=(Math.random()-0.5)*0.5;
this.r=2;
}
update(){
this.x+=this.vx;
this.y+=this.vy;
if(this.x<0||this.x>canvas.width)this.vx*=-1;
if(this.y<0||this.y>canvas.height)this.vy*=-1;
}
draw(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();
}
}

for(let i=0;i<100;i++)particles.push(new P());

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of particles){
p.update();
p.draw();
}

requestAnimationFrame(animate);
}
animate();

/* CURSOR */
const cursor=document.querySelector(".cursor-light");

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

/* SKILLS */
const bars=document.querySelectorAll(".bar span");

window.addEventListener("scroll",()=>{
bars.forEach(b=>{
if(b.getBoundingClientRect().top<innerHeight){
b.style.width=b.dataset.width;
}
});
});

/* TABS */
const tabs=document.querySelectorAll(".tab");
const contents=document.querySelectorAll(".tab-content");

tabs.forEach(t=>{
t.onclick=()=>{
tabs.forEach(x=>x.classList.remove("active"));
contents.forEach(c=>c.classList.remove("active"));

t.classList.add("active");
document.getElementById("tab"+t.dataset.tab).classList.add("active");
}
});