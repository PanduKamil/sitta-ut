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

var modalPanel = document.getElementById("modalPanel");

function tampilRekap() {
    document.getElementById("panelJudul").textContent = "Rekap Bahan Ajar";

    var kepala = document.getElementById("panelHead");
    var isi = document.getElementById("panelBody");
    kepala.textContent = "";    
    isi.textContent = "";

    //baris judul kolom
    var barisJudul = document.createElement("tr");
    var judul = ["kode", "Nama Bahan Ajar", "jenis", "Stok"];

    for (var i = 0; i < judul.length; i++) {
        var th = document.createElement("th");
        th.textContent = judul[i];
        barisJudul.appendChild(th);
    }
    kepala.appendChild(barisJudul);

    //baris isi data
    for (var i = 0; i < dataBahanAjar.length; i++) {
        var b = dataBahanAjar[i];
        var baris = document.createElement("tr");
        var kolom = [b.kodeBarang, b.namaBarang, b.jenisBarang, b.stok];
        for (var j = 0; j < kolom.length; j++) {
            var td = document.createElement("td");
            td.textContent = kolom[j];
            baris.appendChild(td);
        }
        isi.appendChild(baris);
    }

    modalPanel.classList.add("show");
}

document.getElementById("linkRekap").addEventListener("click", function (event) {
    event.preventDefault();
    tampilRekap();
});

document.getElementById("tutupPanel").addEventListener("click", function (event) {
    modalPanel.classList.remove("show");
});