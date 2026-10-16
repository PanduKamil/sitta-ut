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

function isiPanel(judulModal, kolomJudul, dataBaris){
    document.getElementById("panelJudul").textContent = judulModal;

    var kepala = document.getElementById("panelHead");
    var isi = document.getElementById("panelBody");
    kepala.textContent = "";    
    isi.textContent = "";

        //baris judul kolom
    var barisJudul = document.createElement("tr")
    for (var i = 0; i < kolomJudul.length; i++) {
        var th = document.createElement("th");
        th.textContent = kolomJudul[i];
        barisJudul.appendChild(th);
    }
    kepala.appendChild(barisJudul);

    //baris isi data
    for (var i = 0; i < dataBaris.length; i++) {
        var baris = document.createElement("tr");
        for (var j = 0; j < dataBaris[i].length; j++) {
            var td = document.createElement("td");
            td.textContent = dataBaris[i][j];
            baris.appendChild(td);
        }
        isi.appendChild(baris);
    }

    modalPanel.classList.add("show");
}
function tampilRekap() {
    var data = [];
    for (var i = 0; i < dataBahanAjar.length; i++) {
        var b = dataBahanAjar[i];
        data.push([b.kodeBarang, b.namaBarang, b.jenisBarang, b.stok]);
    }
    isiPanel("Rekap Bahan Ajar", ["Kode", "Nama Bahan Ajar", "Jenis", "Stok"], data);
}

function tampilMonitoring() {
    var data = [];
    for (var nomor in dataTracking) {
        var t = dataTracking[nomor];
        data.push([nomor, t.nama, t.ekspedisi, t.status]);
    }
    isiPanel("Monitoring Progress DO Bahan Ajar", ["No. DO", "Nama", "Ekspedisi", "Status"], data);
}

function tampilHistori() {
    var data = [];
    for (var nomor in dataTracking) {
        var t = dataTracking[nomor];
        data.push([nomor, t.nama, t.tanggalKirim, t.total]);
    }
    isiPanel("Histori Transaksi Bahan Ajar", ["No. DO", "Nama", "Tanggal Kirim", "Total"], data);
}

document.getElementById("linkRekap").addEventListener("click", function (e) {
    e.preventDefault();
    tampilRekap();
});
document.getElementById("linkMonitoring").addEventListener("click", function (e) {
    e.preventDefault();
    tampilMonitoring();
});
document.getElementById("linkHistori").addEventListener("click", function (e) {
    e.preventDefault();
    tampilHistori();
});

document.getElementById("tutupPanel").addEventListener("click", function () {
    modalPanel.classList.remove("show");
});

document.getElementById("silangPanel").addEventListener("click", function () {
    modalPanel.classList.remove("show");
});