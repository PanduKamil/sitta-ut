// Login
var form = document.getElementById("formLogin");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var valid = true;
    
    document.getElementById("errEmail").textContent = "";
    document.getElementById("errPassword").textContent = "";

    if (email === "") {
        document.getElementById("errEmail").textContent = "Email harus diisi";
        valid = false;
    }

    if (password < 6) {
        document.getElementById("errPassword").textContent = "Password minimal 6 karakter.";
        valid = false;
    }

    if (valid === false) {
        return;
    }
    // if (email === "" || password === "") {
    //     alert("Email dan password wajid diisi");
    //     return;
    // }

    var user = null;
    for (var i = 0; i < dataPengguna.length; i++) {
        if (dataPengguna[i].email === email && dataPengguna[i].password === password) {
             user = dataPengguna[i];
        }
    }

    if (user === null) {
        alert("Email/password yang anda masukan salah");
    } else {
        sessionStorage.setItem("namaLogin", user.nama);
        sessionStorage.setItem("roleLogin", user.role);
        sessionStorage.setItem("lokasiLogin", user.lokasi);
        location.href = "dashboard.html";
    }
});

// Pop-up Lupa password
var modalLupa = document.getElementById("modalLupa");

document.getElementById("btnLupa").addEventListener("click", function () {
   modalLupa.classList.add("show");
});

document.getElementById("tutupLupa").addEventListener("click", function () {
   modalLupa.classList.remove("show");
});

// Pop-up daftar
var modalDaftar = document.getElementById("modalDaftar");

document.getElementById("btnDaftar").addEventListener("click", function () {
   modalDaftar.classList.add("show");
});

document.getElementById("tutupDaftar").addEventListener("click", function () {
   modalDaftar.classList.remove("show");
   bersihkanDaftar();
});

//function bersihkandaftar
function bersihkanDaftar() {
    document.getElementById("formDaftar").reset;
    document.getElementById("errDfNama").textContent = "";
    document.getElementById("errDfEmail").textContent = "";
    document.getElementById("errDfPassword").textContent = "";
}

// Daftar
document.getElementById("formDaftar").addEventListener("submit", function (e) {
    e.preventDefault();
    var nama = document.getElementById("dfNama").value.trim();
    var email = document.getElementById("dfEmail").value.trim();
    var password = document.getElementById("dfPassword").value;
    var lokasi = document.getElementById("dfLokasi").value;
    var valid = true;

    //penghapus pesan Error sebelumnya
    document.getElementById("errDfNama").textContent = "";
    document.getElementById("errDfEmail").textContent = "";
    document.getElementById("errDfPassword").textContent = "";

    if (nama === "") {
        document.getElementById("errDfNama").textContent = "Nama wajib diisi";
        valid = false;
    }
    if (email === "") {
        document.getElementById("errDfEmail").textContent = "Email wajib diisi";
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById("errDfPassword").textContent = "Password minimal 6 karakter.";
        valid = false;
    }
    if (valid === false) {
        return;
    }

    dataPengguna.push({ nama: nama, email: email, password: password, role: "UPBJJ-UT", lokasi: lokasi});
    alert("Pendaftaran behasil. Silahkkan login.");
    modalDaftar.classList.remove("show");
    document.getElementById("formDaftar").reset();
});


