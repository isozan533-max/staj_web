// 1) Dizi (Array) Tanımlama
let teknolojiler = ["HTML", "CSS", "JavaScript", "Git", "React"];

console.log("Tüm teknolojiler dizisi:", teknolojiler);
console.log("İlk eleman:", teknolojiler[0]); // HTML
console.log("Dizinin eleman sayısı:", teknolojiler.length);

// 2) Diziye yeni eleman ekleme
teknolojiler.push("Node.js");
console.log("Güncel teknoloji listesi:", teknolojiler);

// 3) For Döngüsü ile Diziyi Ekrana Yazdırma
console.log("--- Teknoloji Listesi Döngüsü ---");
for (let i = 0; i < teknolojiler.length; i++) {
  console.log(i + 1 + ". Teknoloji: " + teknolojiler[i]);
}
