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

    var langkah = d.perjalanan;

    //progress bar
    var terakhir = langkah[langkah.length - 1].keterangan;
    var persen;

    if (terakhir.indexOf("Selesai Antar") === 0) {
        persen = 100;
    }else {
        persen = Math.floor((langkah.length / 6) * 100);
    }
    document.getElementById("rBar").style.width = persen + "%";

    //timeline
    var daftar = document.getElementById("rJalan");
    daftar.textContent= "";
    for (var i = langkah.length - 1; i >= 0; i--) {
        var li = document.createElement("li");
        li.textContent = langkah[i].keterangan; 
        var waktu = document.createElement("small");
        waktu.textContent = langkah[i].waktu;
        li.appendChild(waktu);
        daftar.appendChild(li);
    }
    hasil.hidden = false;

});