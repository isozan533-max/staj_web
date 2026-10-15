let input = document.getElementById("gorevInput");
let ekleBtn = document.getElementById("ekleBtn");
let liste = document.getElementById("gorevListesi");

ekleBtn.addEventListener("click", function () {
  let gorevMetni = input.value.trim();

  if (gorevMetni === "") {
    alert("Lütfen boş bir görev yazmayın!");
    return;
  }

  // Yeni bir <li> elementi oluştur
  let yeniLi = document.createElement("li");
  yeniLi.textContent = gorevMetni;

  // Listeye yeni elemanı ekle
  liste.appendChild(yeniLi);

  // Input alanını temizle
  input.value = "";

  console.log("Yeni görev eklendi:", gorevMetni);
});
