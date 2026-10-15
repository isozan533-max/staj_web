let input = document.getElementById("isimInput");
let kaydetBtn = document.getElementById("kaydetBtn");
let yazisi = document.getElementById("hosgeldinYazisi");

// 1) Sayfa ilk açıldığında LocalStorage'da kayıtlı bir veri var mı kontrol et
let kayitliIsim = localStorage.getItem("kullaniciAdi");

if (kayitliIsim) {
  yazisi.textContent = "Tekrar hoş geldin, " + kayitliIsim + "!";
}

// 2) Kaydet butonuna basıldığında veriyi tarayıcının hafızasına kaydet
kaydetBtn.addEventListener("click", function () {
  let girilenDeger = input.value.trim();

  if (girilenDeger === "") {
    alert("Lütfen bir isim yazın!");
    return;
  }

  // LocalStorage'a veri yazma
  localStorage.setItem("kullaniciAdi", girilenDeger);

  // Ekranda göster
  yazisi.textContent = "Hoş geldin, " + girilenDeger + "!";
  input.value = "";

  console.log("İsim LocalStorage'a kaydedildi:", girilenDeger);
});
