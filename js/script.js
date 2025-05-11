function mostrarCarta() {
    document.getElementById("mensaje").style.display = "block";
  
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = window.innerHeight + "px";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  }
  