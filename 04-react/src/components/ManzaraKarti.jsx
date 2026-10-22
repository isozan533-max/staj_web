export default function ManzaraKarti({ manzara }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        height: "320px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
        border: "2px solid rgba(255, 255, 255, 0.1)",
        marginBottom: "25px",
        backgroundColor: "#1e293b",
      }}
    >
      <img
        src={manzara.url}
        alt={manzara.isim}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "15px",
          background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          zIndex: "2",
        }}
      >
        {manzara.isim}
      </div>
    </div>
  );
}
