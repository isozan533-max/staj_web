let gorevInput = document.getElementById("gorevInput");
let ekleBtn = document.getElementById("ekleBtn");
let gorevListesi = document.getElementById("gorevListesi");

ekleBtn.addEventListener("click", function () {
  let gorevMetni = gorevInput.value.trim();

  if (gorevMetni === "") {
    alert("Lütfen boş bir görev girmeyin!");
    return;
  }

  // 1. Yeni bir li elementi oluştur
  let li = document.createElement("li");
  li.textContent = gorevMetni;

  // 2. Görevi silmek için küçük bir silme butonu oluştur
  let silBtn = document.createElement("button");
  silBtn.textContent = "Sil";
  silBtn.className = "sil-btn";

  // Silme butonuna tıklandığında ilgili li elementini listeden kaldır
  silBtn.addEventListener("click", function () {
    li.remove();
  });

  // 3. Sil butonunu li'nin içine ekle
  li.appendChild(silBtn);

  // 4. li elementini ana ul listesine ekle
  gorevListesi.appendChild(li);

  // Input alanını temizle
  gorevInput.value = "";
});
