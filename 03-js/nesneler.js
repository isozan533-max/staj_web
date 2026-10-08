// 1. Basit Nesne (Object) Oluşturma
let ogrenci = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yas: 22,
  bolum: "Yazılım Mühendisliği",
  stajyerMi: true,
};

console.log("Öğrenci Adı:", ogrenci.ad);
console.log("Öğrenci Bölümü:", ogrenci.bolum);

// 2. Nesne Dizisi (Array of Objects)
let ogrenciler = [
  { id: 1, ad: "Ahmet", not: 85 },
  { id: 2, ad: "Ayşe", not: 92 },
  { id: 3, ad: "Mehmet", not: 60 },
];

console.log("--- Öğrenci Listesi ---");
ogrenciler.forEach(function (item) {
  console.log(`ID: ${item.id} - İsim: ${item.ad} - Not: ${item.not}`);
});
