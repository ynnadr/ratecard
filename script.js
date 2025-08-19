const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;
    if (description.style.display === 'block') {
      description.style.display = 'none';
      button.textContent = 'Baca Selengkapnya';
    } else {
      description.style.display = 'block';
      button.textContent = 'Tutup';
    }
  });
});
