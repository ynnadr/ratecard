document.addEventListener('DOMContentLoaded', () => {

  // --- LOGIKA ACCORDION (KARTU LAYANAN) ---
  const allCards = document.querySelectorAll('.service-card');
  let currentOpenCard = null;

  allCards.forEach((card) => {
    const readMoreBtn = card.querySelector('.read-more');

    readMoreBtn.addEventListener('click', () => {
      const isAlreadyOpen = card.classList.contains('is-open');

      // Tutup kartu yang sedang terbuka (jika ada)
      if (currentOpenCard && currentOpenCard !== card) {
        currentOpenCard.classList.remove('is-open');
        updateReadMoreButtonText(currentOpenCard.querySelector('.read-more'));
      }

      // Toggle kartu yang diklik
      card.classList.toggle('is-open');
      updateReadMoreButtonText(readMoreBtn);

      // Set kartu yang sedang terbuka
      currentOpenCard = card.classList.contains('is-open') ? card : null;
    });
  });

  // --- BARU: LOGIKA PENGALIH BAHASA ---
  const langButtons = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-en]');
  
  const switchLanguage = (lang) => {
    // Set atribut lang pada tag <html> untuk SEO & aksesibilitas
    document.documentElement.lang = lang;

    translatableElements.forEach(el => {
      // Ganti teks konten utama
      if (el.dataset[lang]) {
        el.textContent = el.dataset[lang];
      }
    });

    // Handle kasus khusus untuk tombol WhatsApp
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(btn => {
      const serviceName = btn.getAttribute(`data-layanan-${lang}`);
      btn.setAttribute('data-layanan-active', serviceName);

      // Ganti juga teks di dalam tombolnya
      const span = btn.querySelector('span');
      if (span) {
          span.textContent = span.dataset[lang];
      }
    });
    
    // Perbarui teks tombol "Read More" di semua kartu
    allCards.forEach(card => {
        updateReadMoreButtonText(card.querySelector('.read-more'));
    });
  };

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hapus kelas 'active' dari semua tombol
      langButtons.forEach(btn => btn.classList.remove('active'));
      // Tambah kelas 'active' ke tombol yang diklik
      button.classList.add('active');
      
      const selectedLang = button.dataset.lang;
      switchLanguage(selectedLang);
    });
  });

  // --- LOGIKA TOMBOL WHATSAPP (Diperbarui agar bilingual) ---
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');

  whatsappBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.lang;
      const layanan = btn.getAttribute(`data-layanan-${currentLang}`);
      const pesan = currentLang === 'id' 
        ? `Halo, saya tertarik dengan layanan ${layanan}. Bisakah saya mendapatkan informasi lebih lanjut?`
        : `Hello, I'm interested in the ${layanan} service. Can I get more details?`;
        
      const nomorWhatsApp = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
      const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
      window.open(url, '_blank');
    });
  });

  // Fungsi helper untuk update teks tombol "Read More"
  const updateReadMoreButtonText = (button) => {
      const card = button.closest('.service-card');
      const lang = document.documentElement.lang;
      if (card.classList.contains('is-open')) {
          button.textContent = button.dataset[`${lang}Close`];
      } else {
          button.textContent = button.dataset[`${lang}Read`];
      }
  };

  // Inisialisasi bahasa saat halaman dimuat
  switchLanguage(document.documentElement.lang);
});
