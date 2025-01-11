function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar ul');
    const menuOverlay = document.querySelector('.menu-overlay');
  
    navbarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }
  
  
  
  
  function createStars() {
    const starsContainer = document.querySelector('.stars');
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3 + 2; // Storlek mellan 2 och 5 px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      starsContainer.appendChild(star);
      teleportStar(star);
    }
  }
  
  function teleportStar(star) {
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = '0';
  
    setTimeout(() => {
      star.style.opacity = '1';
    }, Math.random() * 2000);
  
    setTimeout(() => {
      star.style.opacity = '0';
      setTimeout(() => {
        teleportStar(star);
      }, 2000);
    }, 3000 + Math.random() * 2000);
  }
  
  window.addEventListener('load', () => {
    const logoScreen = document.getElementById('logo-screen');
    const logoImage = logoScreen.querySelector('img');
    const navbar = document.querySelector('.navbar');
    const videoSection = document.getElementById('video');
  
    // Fade in loggan
    setTimeout(() => {
      logoImage.classList.add('visible');
    }, 500);
  
    // Fade ut loggan
    setTimeout(() => {
      logoScreen.classList.add('hidden');
      navbar.classList.add('visible');
    }, 2000);
  
    // Paus innan video och rubrik fades in
    setTimeout(() => {
      videoSection.classList.remove('hidden');
      videoSection.classList.add('visible');
    }, 4500);
  });
  
  