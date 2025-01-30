function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar ul');
    const menuOverlay = document.querySelector('.menu-overlay');
  
    navbarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }
  
  
  
  
  function createStars() {
    const starsContainer = document.querySelector('.stars');
  
    // Generera 100 stjärnor
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Generera slumpmässig storlek mellan 2px och 5px
      const size = Math.random() * 3 + 2; // Slumpmässig storlek mellan 2 och 5
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      // Lägg till stjärnan i behållaren
      starsContainer.appendChild(star);
  
      // Placera och animera stjärnan
      teleportStar(star);
    }
  }
  
  
  function teleportStar(star) {
    star.style.left = `${Math.random() * 100}%`; // Slumpmässig position på X-axeln
    star.style.top = `${Math.random() * 100}%`; // Slumpmässig position på Y-axeln
    star.style.opacity = '0';
  
    // Fade-in efter en slumpmässig fördröjning
    setTimeout(() => {
      star.style.opacity = '1';
    }, Math.random() * 2000);
  
    // Fade-out efter några sekunder och teleportera
    setTimeout(() => {
      star.style.opacity = '0';
      setTimeout(() => {
        teleportStar(star);
      }, 2000);
    }, 3000 + Math.random() * 2000);
  }
  
  // Anropa funktionen för att skapa stjärnor när sidan laddas
  window.addEventListener('load', createStars);
  
  
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
    }, 2000);
  
    // Paus innan navbar, video och rubrik fades in
    setTimeout(() => {
      navbar.classList.add('visible'); // Fade in menyn
      videoSection.classList.remove('hidden');
      videoSection.classList.add('visible'); // Fade in videon och rubriken
    }, 4500);
  });
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling; // Hitta svaret efter knappen
      answer.classList.toggle('visible'); // Växla klassen 'visible'
    });
  });
  