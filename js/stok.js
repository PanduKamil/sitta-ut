var tbody = document.getElementById("tbStok")

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