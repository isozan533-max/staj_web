import { useState } from "react";

export default function GeriBildirim() {
  const [formData, setFormData] = useState({
    ad: "",
    eposta: "",
    mesaj: "",
  });

  const [mesajlar, setMesajlar] = useState([]);

  // Input değiştikçe state'i güncelleyen fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form gönderildiğinde çalışan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ad || !formData.mesaj) return;

    setMesajlar([...mesajlar, formData]);
    setFormData({ ad: "", eposta: "", mesaj: "" }); // Formu sıfırla
  };

  return (
    <div
      style={{
        marginTop: "40px",
        width: "100%",
        maxWidth: "500px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#38bdf8",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        💬 Geri Bildirim Bırak
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="text"
          name="ad"
          placeholder="Adınız Soyadınız"
          value={formData.ad}
          onChange={handleChange}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "#0f172a",
            color: "#fff",
            outline: "none",
          }}
          required
        />

        <input
          type="email"
          name="eposta"
          placeholder="E-posta Adresiniz"
          value={formData.eposta}
          onChange={handleChange}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "#0f172a",
            color: "#fff",
            outline: "none",
          }}
          required
        />

        <textarea
          name="mesaj"
          rows="3"
          placeholder="Düşüncelerinizi yazın..."
          value={formData.mesaj}
          onChange={handleChange}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "#0f172a",
            color: "#fff",
            outline: "none",
          }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(135deg, #38bdf8, #0284c7)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Gönder 🚀
        </button>
      </form>

      {/* Gönderilen Mesajların Listesi */}
      {mesajlar.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            Gelen Mesajlar ({mesajlar.length}):
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {mesajlar.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#0f172a",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  borderLeft: "3px solid #38bdf8",
                }}
              >
                <div style={{ fontWeight: "bold", color: "#fff" }}>
                  {item.ad}{" "}
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    ({item.eposta})
                  </span>
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                    marginTop: "4px",
                  }}
                >
                  {item.mesaj}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
