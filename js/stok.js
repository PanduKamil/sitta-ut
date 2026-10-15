// if (sessionStorage.getItem("namaLogin") === null) {
//     location.href = "index.html";
// }

var tbody = document.getElementById("tbStok");
// var modalTambah = document.getElementById("modalTambah");

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
});
document.getElementById("tutupTambahStok").addEventListener("click", function() {
    modalTambah.classList.remove("show");
});

document.getElementById("formStok").addEventListener("submit", function(e) {
    e.preventDefault();

    var Lokasi = document.getElementById("stkLokasi").value;
    var kode = document.getElementById("stkKode").value;
    var nama = document.getElementById("stkNama").value;
    var jenis = document.getElementById("stkJenis").value;
    var edisi = document.getElementById("stkEdisi").value;
    var stok = document.getElementById("stok").value;

    dataBahanAjar.push({
        kodeLokasi: Lokasi,
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