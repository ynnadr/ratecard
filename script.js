document.addEventListener('DOMContentLoaded', () => {

  // PERBAIKAN: Logika accordion yang lebih efisien dan modern
  const allCards = document.querySelectorAll('.service-card');

  allCards.forEach((card) => {
    const readMoreBtn = card.querySelector('.read-more');

    readMoreBtn.addEventListener('click', () => {
      // Cek apakah kartu yang diklik sudah terbuka
      const isAlreadyOpen = card.classList.contains('is-open');

      // Tutup semua kartu terlebih dahulu
      allCards.forEach(c => {
        c.classList.remove('is-open');
        c.querySelector('.read-more').textContent = 'Baca Selengkapnya';
      });

      // Jika kartu yang diklik tadi belum terbuka, buka sekarang
      if (!isAlreadyOpen) {
        card.classList.add('is-open');
        readMoreBtn.textContent = 'Tutup';
      }
    });
  });

  // Kode WhatsApp tetap sama karena sudah bagus
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');

  whatsappBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const layanan = btn.getAttribute('data-layanan');
      const pesan = `Halo, saya tertarik dengan layanan ${layanan}. Bisakah saya mendapatkan informasi lebih lanjut?`;
      const nomorWhatsApp = '6281234567890'; // ganti dengan nomor WhatsApp Anda
      const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
      window.open(url, '_blank');
    });
  });

});
