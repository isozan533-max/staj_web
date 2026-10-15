// 1) HTML elementini ID ile seçme ve içeriğini değiştirme
let baslik = document.getElementById("baslik");
baslik.textContent = "JavaScript ile Güncellenen Başlık!";

// 2) Butona tıklama olayı (Event Listener) ekleme
let buton = document.getElementById("tiklaBtn");
let kutu = document.getElementById("renkliKutu");

buton.addEventListener("click", function () {
  // Kutunun arka plan rengini yeşile çevir ve yazısını güncelle
  kutu.style.backgroundColor = "#22c55e";
  kutu.textContent = "Harika, Tıklandı!";
  console.log("Butona başarıyla tıklandı ve DOM elemanları değiştirildi!");
});
