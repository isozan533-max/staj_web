// 1) Normal Fonksiyon Tanımlama ve Çalıştırma
function selamla(isim) {
  console.log("Merhaba, " + isim + "! Hoş geldin.");
}

selamla("İbrahim");
selamla("Stajyer");

// 2) Değer Döndüren (Return) Fonksiyon
function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

let sonuc = topla(40, 60);
console.log("40 ile 60'ın toplamı (Fonksiyon ile):", sonuc);

// 3) Ok Fonksiyonu (Arrow Function - Modern JavaScript)
const carp = (a, b) => {
  return a * b;
};

console.log("5 ile 8'in çarpımı (Arrow Function ile):", carp(5, 8));
