// Öğrenci bilgilerini içeren nesne (Object)
let ogrenci = {
  ad: "Ozan",
  yas: 16,
  bolum: "Web Geliştirme",
  stajyerMi: true,
};

// Nesne bilgilerini doğrudan ekrandaki HTML div'ine yazdıralım
let alan = document.getElementById("sonucAlani");

alan.innerHTML = `
    <b>Öğrenci Adı:</b> ${ogrenci.ad} <br>
    <b>Yaş:</b> ${ogrenci.yas} <br>
    <b>Bölüm:</b> ${ogrenci.bolum} <br>
    <b>Staj Durumu:</b> ${ogrenci.stajyerMi ? "Aktif Stajyer 🚀" : "Değil"}
`;
