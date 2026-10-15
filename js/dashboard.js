var nama = sessionStorage.getItem("namaLogin");

if (nama === null) {
    location.href = "index.html";
} else{
    
    var jam = new Date().getHours();
    var sapaan;
    if (jam < 11) {
        sapaan = "pagi";
    } else if (jam < 15) {
        sapaan = "siang";
    } else if (jam < 18) {
        sapaan = "sore";
    } else {
        sapaan = "malam";
    }
    document.getElementById("greeting").textContent = "Selamat  " + sapaan + ", " + nama;
    document.getElementById("peran").textContent =
        sessionStorage.getItem("roleLogin") + " - " + sessionStorage.getItem("lokasiLogin");
}

document.getElementById("keluar").addEventListener("click", function () {
    sessionStorage.clear();
    location.href = "index.html";
});