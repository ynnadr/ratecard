const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;
    const isOpen = description.style.display === 'block';

    // Tutup semua deskripsi
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach((desc) => {
      desc.style.display = 'none';
    });

    // Tutup semua tombol "Baca Selengkapnya"
    const allButtons = document.querySelectorAll('.read-more');
    allButtons.forEach((btn) => {
      btn.textContent = 'Baca Selengkapnya';
    });

    if (!isOpen) {
      description.style.display = 'block';
      button.textContent = 'Tutup';
    }
  });
});
