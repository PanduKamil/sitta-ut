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


