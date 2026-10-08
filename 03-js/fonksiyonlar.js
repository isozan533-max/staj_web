// 1. Parametresiz Fonksiyon
function selamVer() {
  alert("Merhaba! JavaScript fonksiyonu başarıyla çalıştı.");
  console.log("Kullanıcı butona tıkladı ve selam verildi.");
}

// 2. Parametreli Fonksiyon
function toplamaYap(sayi1, sayi2) {
  let sonuc = sayi1 + sayi2;
  alert("Gelen sayıların toplamı: " + sonuc);
  console.log(`${sayi1} + ${sayi2} = ${sonuc}`);
}

// 3. Değer Döndüren (Return) Fonksiyon
function karesiniAl(sayi) {
  return sayi * sayi;
}

let hesaplananDeger = karesiniAl(5);
console.log("5'in karesi:", hesaplananDeger);
