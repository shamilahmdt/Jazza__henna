    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const items = mobileMenu.querySelectorAll('.menu-item');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');

      if (!mobileMenu.classList.contains('hidden')) {
        // Show each menu item one by one (row-by-row)
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('opacity-0', 'translate-y-5');
            item.classList.add('opacity-100', 'translate-y-0');
          }, index * 100); // Delay increases row by row
        });
      } else {
        // Reset to hidden state for next time
        items.forEach((item) => {
          item.classList.remove('opacity-100', 'translate-y-0');
          item.classList.add('opacity-0', 'translate-y-5');
        });
      }
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