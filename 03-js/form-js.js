let form = document.getElementById("kayitFormu");
let inputAd = document.getElementById("kullaniciAd");
let hataMesaji = document.getElementById("hataMesaji");
let sonuc = document.getElementById("sonuc");

form.addEventListener("submit", function (event) {
  // Formun varsayılan olarak sayfayı yenilemesini engeller
  event.preventDefault();

  let deger = inputAd.value.trim();

  // Doğrulama (Validation)
  if (deger === "") {
    hataMesaji.textContent = "Kullanıcı adı boş bırakılamaz!";
    sonuc.textContent = "";
  } else if (deger.length < 3) {
    hataMesaji.textContent = "Kullanıcı adı en az 3 karakter olmalıdır!";
    sonuc.textContent = "";
  } else {
    hataMesaji.textContent = "";
    sonuc.textContent = `Tebrikler ${deger}, kaydınız başarıyla alındı!`;
    inputAd.value = ""; // Input'u temizle
  }
});
