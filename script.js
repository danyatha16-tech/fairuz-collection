// 1. Efek Muncul Saat Scroll (Scroll Reveal)
const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add("active");
        }
    }
};

window.addEventListener("scroll", revealOnScroll);

// 2. Perubahan Navbar saat Scroll
const navbar = document.getElementById("navbar");

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
};

// 3. Inisialisasi awal agar elemen yang sudah di layar langsung muncul
revealOnScroll();

const WHATSAPP_NUMBER = "081944561235";
function handleFormBooking() {
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value;
    const loader = document.getElementById('loading-overlay');

    // Validasi sederhana
    if (!nama || !tanggal) {
        alert("Mohon lengkapi Nama dan Tanggal Acara Anda.");
        return;
    }

    // Tampilkan Loading
    loader.classList.remove('hidden');

    const text = `Halo Fairuz Collection 👋

Saya ingin melakukan reservasi:

👤 Nama: ${nama}
📅 Tanggal Acara: ${tanggal}
💬 Pesan: ${pesan}

Mohon info ketersediaan jadwalnya ya. Terima kasih 🙏`;
    
    // Simulasi pengecekan jadwal selama 1.5 detik
    setTimeout(() => {
        loader.classList.add('hidden');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }, 1500);
}
// === SPARKLE GENERATOR ===
const container = document.querySelector('.sparkle-container');

for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (3 + Math.random() * 5) + 's';
    sparkle.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(sparkle);
}