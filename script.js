// Mengambil elemen dari HTML
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

// Ketika tombol menu diklik
menuButton.addEventListener("click", function () {

    // Menampilkan / menyembunyikan menu
    navMenu.classList.toggle("show");

});