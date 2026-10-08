// 1. Veri Tipleri (Data Types)
let metin = "Stajyer"; // String
let yas = 20; // Number
let stajyerMi = true; // Boolean (true/false)

console.log("Metin tipi:", typeof metin);
console.log("Yaş tipi:", typeof yas);
console.log("Boolean tipi:", typeof stajyerMi);

// 2. Koşullu İfadeler (if / else)
let not = 75;

if (not >= 85) {
  console.log("Aferin! Geçme Derecesi: PEKİYİ");
} else if (not >= 50) {
  console.log("Tebrikler! Dersi geçtiniz.");
} else {
  console.log("Maalesef dersten kaldınız.");
}

// 3. Karşılaştırma ve Mantıksal Operatörler
let ehliyetYasi = 18;

if (yas >= ehliyetYasi && stajyerMi === true) {
  console.log("Ehliyet almaya uygunsunuz ve stajyersiniz.");
}
