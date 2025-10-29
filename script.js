/**
 * =================================================================
 * SCRIPT.JS - FUNGSI JAVASCRIPT UNTUK WEBSITE KAFE (V2)
 * =================================================================
 *
 * Fungsi Utama:
 * 1. Smooth Scrolling.
 * 2. Header Style on Scroll.
 * 3. Menampilkan DETAIL MENU (Nama, Deskripsi, Harga, dan Gambar Placeholder) saat diklik.
 */

document.addEventListener('DOMContentLoaded', function() {

    // Data Menu (Simulasi Database Sederhana)
    const menuData = {
        "Banjarnegarano": {
            harga: "Rp 25.000",
            gambar: "bnano.png",
            desc: "Kekuatan dan kesegaran esensi kopi lokal Banjarnegara."
        },
        "Latte Dingin Premium": {
            harga: "Rp 35.000",
            gambar: "iced_latte.jpg",
            desc: "Keseimbangan sempurna antara kopi spesial dan susu dingin creamy."
        },
        "Cappuccino": {
            harga: "Rp 30.000",
            gambar: "cappuccino.jpg",
            desc: "Kelembutan busa microfoam dengan kekuatan rasa kopi seimbang."
        },
        "Americano Panas": {
            harga: "Rp 20.000",
            gambar: "americano.jpg",
            desc: "Kopi hitam murni yang menyegarkan, disajikan panas."
        },
        "Mochaccino": {
            harga: "Rp 38.000",
            gambar: "mochaccino.jpg",
            desc: "Paduan kopi, coklat Belgia, dan susu yang harmonis."
        },
        "Kopi Filter Manual": {
            harga: "Mulai Rp 40.000",
            gambar: "filter_coffee.jpg",
            desc: "Pilihan biji spesial, diseduh secara hati-hati (V60/Chemex)."
        },
        "Matcha Latte": {
            harga: "Rp 45.000",
            gambar: "matcha_latte.jpg",
            desc: "Teh hijau Jepang otentik dengan susu creamy dan sedikit manis."
        },
        "Coklat Panas Signature": {
            harga: "Rp 33.000",
            gambar: "hot_chocolate.jpg",
            desc: "Coklat gelap mewah, kental, dan sangat memuaskan."
        },
        "Teh Earl Grey": {
            harga: "Rp 22.000",
            gambar: "earl_grey.jpg",
            desc: "Aroma bergamot yang elegan dan menenangkan."
        },
        "Smoothie Mangga": {
            harga: "Rp 40.000",
            gambar: "mango_smoothie.jpg",
            desc: "Kesegaran buah mangga murni yang dibekukan."
        },
        "Es Jeruk Nipis": {
            harga: "Rp 28.000",
            gambar: "lime_juice.jpg",
            desc: "Minuman asam manis yang menyegarkan dan menyehatkan."
        },
        "Sparkling Lychee": {
            harga: "Rp 37.000",
            gambar: "sparkling_lychee.jpg",
            desc: "Sensasi soda dengan potongan buah leci manis."
        },
        "Kopi Susu Gula Aren": {
            harga: "Rp 32.000",
            gambar: "kopi_gula_aren.jpg",
            desc: "Kopi susu kekinian dengan pemanis gula aren alami."
        },
        "Cold Brew Nitro": {
            harga: "Rp 45.000",
            gambar: "nitro_cold_brew.jpg",
            desc: "Kopi diseduh dingin, disajikan dengan nitrogen untuk tekstur lembut."
        },
        "Wedang Jahe Hangat": {
            harga: "Rp 25.000",
            gambar: "wedang_jahe.jpg",
            desc: "Minuman tradisional rempah yang menghangatkan badan."
        },
        // Makanan
        "Croissant Mentega": {
            harga: "Rp 18.000",
            gambar: "croissant.jpg",
            desc: "Renyah di luar, lembut di dalam, cocok untuk kopi."
        },
        "Cheesecake New York": {
            harga: "Rp 48.000",
            gambar: "cheesecake.jpg",
            desc: "Krim keju padat dengan rasa yang kaya dan *crust* yang renyah."
        },
        "Sandwich Ayam Pesto": {
            harga: "Rp 55.000",
            gambar: "pesto_sandwich.jpg",
            desc: "Roti gandum dengan isian ayam panggang dan saus pesto basil."
        },
        "Donut Coklat Premium": {
            harga: "Rp 20.000",
            gambar: "chocolate_donut.jpg",
            desc: "Donut lembut dengan glaze coklat spesial yang meleleh."
        },
        "Kentang Goreng Truffle": {
            harga: "Rp 35.000",
            gambar: "truffle_fries.jpg",
            desc: "Kentang goreng renyah dengan minyak truffle aromatik dan taburan keju."
        }
    };

    // --- 1 & 2. FUNGSI SMOOTH SCROLLING dan HEADER STYLE (Kode dari respons sebelumnya) ---
    
    // Smooth Scrolling
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header Style on Scroll
    const header = document.querySelector('.header');
    const scrollThreshold = 10;
    function updateHeaderStyle() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeaderStyle);
    updateHeaderStyle();


    // --- 3. MENAMPILKAN DETAIL MENU SAAT DIKLIK (Fungsi Baru) ---
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemName = this.querySelector('h3').textContent;
            
            // Cek apakah data menu tersedia
            if (menuData[itemName]) {
                const data = menuData[itemName];
                
                // --- Kunci Logika di sini ---
                
                // Menampilkan detail menggunakan alert (untuk demonstrasi)
                alert(
                    `— DETAIL PRODUK —\n\n` +
                    `Nama: ${itemName}\n` +
                    `Deskripsi: ${data.desc}\n` +
                    `\n` +
                    `Harga: ${data.harga}\n\n` +
                    ` ${data.gambar}`
                );

                // Di konsol, kita bisa menampilkan data yang terstruktur
                console.log('Produk Diklik:', {
                    nama: itemName,
                    deskripsi: data.desc,
                    harga: data.harga,
                    gambar_file: data.gambar
                });
                
            } else {
                alert(`Detail untuk ${itemName} tidak ditemukan.`);
            }
        });
    });
});
// ... (Kode JS sebelumnya untuk Smooth Scrolling dan Header Style) ...

    // --- 4. FUNGSI POPUP GELEMBUNG LOKASI ---
    const locationButton = document.getElementById('location-button');
    const locationPopup = document.getElementById('location-popup');

    if (locationButton && locationPopup) {
        
        // 4A. FUNGSI UNTUK MENAMPILKAN/MENYEMBUNYIKAN POPUP SAAT DIKLIK
        locationButton.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah tautan melompat
            
            // Toggle (mengubah) status kelas visible
            locationPopup.classList.toggle('visible'); 

            // Tambahan: Pastikan popup tersembunyi saat user mengklik di tempat lain
            if (locationPopup.classList.contains('visible')) {
                document.addEventListener('click', hidePopupOutside, true);
            }
        });
        
        // 4B. FUNGSI UNTUK MENYEMBUNYIKAN POPUP KETIKA KLIK DI LUAR
        function hidePopupOutside(e) {
            // Jika elemen yang diklik BUKAN tombol atau popup itu sendiri
            if (!locationButton.contains(e.target) && !locationPopup.contains(e.target)) {
                locationPopup.classList.remove('visible');
                document.removeEventListener('click', hidePopupOutside, true);
            }
        }
        
        /* OPSI ALTERNATIF: Popup saat kursor diarahkan (hover)
        locationButton.addEventListener('mouseenter', function() {
            locationPopup.classList.add('visible');
        });
        locationButton.addEventListener('mouseleave', function() {
            locationPopup.classList.remove('visible');
        });
        */
    }
    
// ... (Akhir dari kode JS) ...

