export default function SayacKontrolleri({ sayac, setSayac }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: "20px",
          textShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
        }}
      >
        {sayac}
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => setSayac(sayac + 1)}
          style={{
            padding: "12px 28px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #10b981, #059669)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
          }}
        >
          Arttır (+) 🎉
        </button>

        <button
          onClick={() => setSayac(sayac - 1)}
          style={{
            padding: "12px 28px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(239, 68, 68, 0.4)",
          }}
        >
          Azalt (-) 📉
        </button>
      </div>
    </div>
  );
}
