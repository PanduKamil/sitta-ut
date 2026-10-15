if (sessionStorage.getItem("namaLogin") === null) {
    location.href = "index.html";
}

var tbody = document.getElementById("tbStok");

//tampil data stok
function renderStok() {
    tbody.innerHTML = "";

    for (var i = 0; i < dataBahanAjar.length; i++) {
    var b = dataBahanAjar[i];
    
    var baris = document.createElement("tr");

    //  Sampul/gambar
    var selSampul = document.createElement("td");
    var gambar = document.createElement("img");
    gambar.src = b.cover;
    gambar.alt = "Sampul " + b.namaBarang;
    selSampul.appendChild(gambar);
    baris.appendChild(selSampul);

    //teks
    var isi = [b.kodeLokasi, b.kodeBarang, b.namaBarang, b.jenisBarang, b.edisi, b.stok];
    for (var j = 0; j < isi.length; j++) {
        var sel = document.createElement("td");
        sel.textContent = isi[j];
        if (j === 5 && b.stok < 200) {
            sel.classList.add("stok-rendah");
        }
        baris.appendChild(sel);
        }
    tbody.appendChild(baris);
    }
}
renderStok();

//modal tambah stok
var modalTambah = document.getElementById("modalTambah");
document.getElementById("btnTambah").addEventListener("click", function() {
    modalTambah.classList.add("show");
});

document.getElementById("btnBatal").addEventListener("click", function() {
    modalTambah.classList.remove("show");
    bersihkanError();
    document.getElementById("formStok").reset();
});
document.getElementById("tutupTambahStok").addEventListener("click", function() {
    modalTambah.classList.remove("show");
    bersihkanError();
    document.getElementById("formStok").reset();
});



function bersihkanError() {
    document.getElementById("errStkLokasi").textContent = "";
    document.getElementById("errStkKode").textContent = "";
    document.getElementById("errStkNama").textContent = "";
    document.getElementById("errStkEdisi").textContent = "";
    document.getElementById("errStok").textContent = "";
}   

document.getElementById("formStok").addEventListener("submit", function(e) {
    e.preventDefault();

var lokasi = document.getElementById("stkLokasi").value.trim();
var kode = document.getElementById("stkKode").value.trim();
var nama = document.getElementById("stkNama").value.trim();
var jenis = document.getElementById("stkJenis").value;
var edisi = document.getElementById("stkEdisi").value.trim();
var stok = document.getElementById("stok").value;
var valid = true;

bersihkanError();

if (lokasi === "") {
    document.getElementById("errStkLokasi").textContent = "Lokasi harus diisi.";
    valid = false;
}

if (kode === "") {
    document.getElementById("errStkKode").textContent = "Kode harus diisi.";
    valid = false;
}else {
    for (var i = 0; i < dataBahanAjar.length; i++) {
        if (dataBahanAjar[i].kodeBarang.toLowerCase() === kode.toLowerCase()) {
            document.getElementById("errStkKode").textContent = "Kode sudah ada.";
            valid = false;
        }
    }
}

if (nama === "") {
    document.getElementById("errStkNama").textContent = "Nama harus diisi.";
    valid = false;
}
if(edisi === "" || isNaN(edisi) || Number(edisi) < 1   ) {
    document.getElementById("errStkEdisi").textContent = "Edisi harus diisi dengan angka.";
    valid = false;
}
if (stok === "" ||  Number(stok) < 0) {
    document.getElementById("errStok").textContent = "Stok harus diisi dengan angka >= 0.";
    valid = false;
}

if (valid === false) {
    return;
}

dataBahanAjar.push({    
        kodeLokasi: lokasi,
        kodeBarang: kode,
        namaBarang: nama,
        jenisBarang: jenis,
        edisi: edisi,
        stok: Number(stok),
        cover: ""
    });

    renderStok();
    modalTambah.classList.remove("show");
    document.getElementById("formStok").reset();
});


