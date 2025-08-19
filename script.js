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

const whatsappBtns = document.querySelectorAll('.whatsapp-btn');

whatsappBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const layanan = btn.getAttribute('data-layanan');
    const pesan = `Halo, saya tertarik dengan layanan ${layanan}.`;
    const nomorWhatsApp = '6281234567890'; // ganti dengan nomor WhatsApp Anda
    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
  });
});
