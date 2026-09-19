// Ambil semua link navbar
const navLinks = document.querySelectorAll(".nav-menu a");

// Tambahkan event ketika link diklik
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Hapus class active dari semua link
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        // Tambahkan active ke link yang diklik
        this.classList.add("active");

    });
});

// Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});