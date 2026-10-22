export default function Header({ aktifIndex, toplamManzara }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          lineHeight: "1.4",
          padding: "10px 0",
          background: "linear-gradient(45deg, #ff007f, #7928ca, #00dfd8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px",
        }}
      >
        ✨ Ozan Bulmuş Sayaç ✨
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
        Dünya Turu Keşfi ( {aktifIndex + 1} / {toplamManzara} Vitrin) 🚀
      </p>
    </div>
  );
}
