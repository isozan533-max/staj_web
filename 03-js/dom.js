// HTML elemanlarını seçme
let baslik = document.getElementById("baslik");
let paragraf = document.getElementById("paragraf");
let btnBaslik = document.getElementById("btnBaslik");
let btnStil = document.getElementById("btnStil");

// Başlığı Değiştirme Butonu Olayı (Event Listener)
btnBaslik.addEventListener("click", function () {
  baslik.textContent = "Başlık JavaScript Tarafından Değiştirildi!";
  baslik.style.color = "#2980b9";
});

// Stili Değiştirme Butonu Olayı
btnStil.addEventListener("click", function () {
  paragraf.style.backgroundColor = "#2ecc71";
  paragraf.style.color = "#ffffff";
  paragraf.style.fontWeight = "bold";
});
