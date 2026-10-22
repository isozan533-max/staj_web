import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ManzaraKarti from "./components/ManzaraKarti";
import SayacKontrolleri from "./components/SayacKontrolleri";
import GeriBildirim from "./components/GeriBildirim";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [sayac, setSayac] = useState(0);
  const [manzaralar, setManzaralar] = useState([]);
  const [loading, setLoading] = useState(true);

  // Global temayı alıyoruz
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=30")
      .then((res) => res.json())
      .then((data) => {
        const formatliVeri = data.map((item, index) => ({
          isim: `Canlı Keşif #${index + 1} (Fotoğrafçı: ${item.author})`,
          url: item.download_url,
        }));
        setManzaralar(formatliVeri);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
          color: theme === "dark" ? "#38bdf8" : "#0284c7",
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        🌀 Canlı Manzaralar Yükleniyor...
      </div>
    );
  }

  const aktifIndex = Math.abs(sayac) % manzaralar.length;
  const aktifManzara = manzaralar[aktifIndex];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        color: theme === "dark" ? "#fff" : "#0f172a",
        backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
        transition: "all 0.3s ease",
      }}
    >
      {/* Üst Menü */}
      <Navbar />

      {/* Sayfa Yönlendirmeleri */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                aktifIndex={aktifIndex}
                toplamManzara={manzaralar.length}
              />
              <ManzaraKarti manzara={aktifManzara} />
              <SayacKontrolleri sayac={sayac} setSayac={setSayac} />
            </>
          }
        />

        <Route path="/geribildirim" element={<GeriBildirim />} />
      </Routes>
    </div>
  );
}

export default App;
