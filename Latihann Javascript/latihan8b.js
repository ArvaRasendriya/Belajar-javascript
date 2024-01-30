// Daftar menu dan harga
var menu = {
    "Pasta": 47000,
    "Burger": 57000,
    "Sandwich": 46000,
    "Kentang Goreng": 37000
};

// Menampilkan daftar menu beserta harga
var menuList = "";
for (var item in menu) {
    menuList += item + " - Rp" + menu[item] + "\n";
}

// Memilih menu
var pesanan = prompt("Silakan pilih menu yang ingin dipesan:\n" + menuList);
var jumlah = prompt("Masukkan jumlah " + pesanan + " yang ingin dipesan:");

// Menghitung total biaya
var totalBiaya;
if (menu.hasOwnProperty(pesanan)) {
    totalBiaya = menu[pesanan] * parseInt(jumlah);
    alert("Anda telah memesan " + jumlah + " " + pesanan + ". Total biaya: Rp" + totalBiaya);
} else {
    alert("Maaf, menu tidak tersedia.");
}
