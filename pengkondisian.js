var x = prompt("masukan angka : ");
// alert("selamat datang " + nama);

if(x % 2 == 0) {
    alert(x + "bilangan genap");
}   else if (x % 2 == 1) {
    alert(x + "bilangan ganjil");
} else {
    alert("data bukan anggka");
}

if (confirm("Kamu manusia ?? ")) {
    Location = "http://google.com";
}   else{
    alert("anda dipenjara");
}