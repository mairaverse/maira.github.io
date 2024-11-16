// nih ini untuk tambahan animasi lstar belakangnya ya
for (let i = 0; i < 100; i++) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = Math.random() * 100 + "vw";
  circle.style.animationDuration = Math.random() * 5 + 5 + "s";
  circle.style.opacity = Math.random();
  document.querySelector(".background").appendChild(circle);
}
