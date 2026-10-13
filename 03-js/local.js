let isimInput = document.getElementById("isimInput");
let kaydetBtn = document.getElementById("kaydetBtn");
let silBtn = document.getElementById("silBtn");
let mesaj = document.getElementById("mesaj");

// 1. Sayfa yüklendiğinde daha önce kaydedilmiş veri var mı kontrol et
let kayitliIsim = localStorage.getItem("kullaniciAdi");
if (kayitliIsim) {
  mesaj.textContent = `Tekrar hoş geldin, ${kayitliIsim}! (Local Storage'dan yüklendi)`;
}

// 2. Veriyi Kaydetme (setItem)
kaydetBtn.addEventListener("click", function () {
  let deger = isimInput.value.trim();
  if (deger !== "") {
    localStorage.setItem("kullaniciAdi", deger);
    mesaj.textContent = `Hoş geldin, ${deger}! Başarıyla kaydedildi.`;
    isimInput.value = "";
  } else {
    alert("Lütfen geçerli bir isim girin!");
  }
});

// 3. Veriyi Silme (removeItem)
silBtn.addEventListener("click", function () {
  localStorage.removeItem("kullaniciAdi");
  mesaj.textContent =
    "Veri hafızadan silindi. Sayfayı yenilersen hatırlandığını göreceksin.";
});
