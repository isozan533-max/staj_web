let input = document.getElementById("kullaniciInput");
let buton = document.getElementById("girisBtn");
let mesaj = document.getElementById("selamlamaMesaji");

// Sayfa yüklendiğinde LocalStorage kontrolü
window.addEventListener("load", function () {
  let kayitliKullanici = localStorage.getItem("aktifKullanici");
  if (kayitliKullanici) {
    mesaj.textContent = "Tekrar hoş geldin, " + kayitliKullanici + "!";
  }
});

// Butona tıklandığında çalışacak fonksiyon
buton.addEventListener("click", function () {
  let deger = input.value.trim();

  if (deger === "") {
    alert("Lütfen adınızı boş bırakmayın!");
    return;
  }

  // LocalStorage'a kaydet
  localStorage.setItem("aktifKullanici", deger);

  // Ekranda göster
  mesaj.textContent = "Harika, kaydın alındı: " + deger;
  input.value = "";

  console.log("Kullanıcı başarıyla kaydedildi ve arayüz güncellendi.");
});
