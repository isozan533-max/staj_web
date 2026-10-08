// 1. Dizi (Array) Oluşturma
let diller = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log("Toplam Dil Sayısı:", diller.length);
console.log("İlk Dil:", diller[0]);

// 2. Klasik for Döngüsü
console.log("--- For Döngüsü İle ---");
for (let i = 0; i < diller.length; i++) {
  console.log(`${i + 1}. Dil: ${diller[i]}`);
}

// 3. forEach Döngüsü ile HTML Listesine Ekleme
let ulElemani = document.getElementById("liste");

diller.forEach(function (dil) {
  let li = document.createElement("li");
  li.textContent = dil;
  ulElemani.appendChild(li);
});
