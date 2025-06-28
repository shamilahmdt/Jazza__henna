  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });

  const toggleBtn = document.getElementById('whatsappToggle');
  const popup = document.getElementById('whatsappPopup');
  const closeBtn = document.getElementById('closePopup');

  toggleBtn.addEventListener('click', () => {
      popup.classList.toggle('hidden');
  });

  closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
  });