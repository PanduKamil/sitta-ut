if (sessionStorage.getItem("namaLogin") === null) {
    location.href = "index.html";
}

document.getElementById("formCari").addEventListener("submit", function (e) {
    e.preventDefault();

    var nomor = document.getElementById("nomorDO").value.trim();
    var hasil = document.getElementById("hasil");

    //bersihkan pesan lama dan sembunyikan hasil sebelumnya
    document.getElementById("errNomorDO").textContent = "";
    hasil.hidden = true;

    if (nomor === "") {
        document.getElementById("errNomorDO").textContent = "Nomor DO tidak boleh kosong.";
        return;
    }

    var d = dataTracking[nomor];

    if (d === undefined) {
        document.getElementById("errNomorDO").textContent = "Nomor DO tidak ditemukan.";
        alert("Data pengirim untuk nomor" + nomor + " tidak ditemukan.");
        return;
    }

    // tampilkan hasil
    document.getElementById("rNama").textContent = d.nama;
    document.getElementById("rStatus").textContent = "Status: " + d.status;
    document.getElementById("rEkspedisi").textContent = d.ekspedisi;
    document.getElementById("rTanggal").textContent = d.tanggalKirim;
    document.getElementById("rJenis").textContent = d.paket;
    document.getElementById("rTotal").textContent = d.total;
    hasil.hidden = false;

});