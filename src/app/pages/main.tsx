export default function Main() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginTop: "150px",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/af/40/eb/af40eba6b62a9e9e6b177d0829bd5362.jpg"
          style={{ borderRadius: "100%", height: "300px", width: "300px" }}
        ></img>
        <button
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "grey",
            color: "white",
          }}
        >
          PRICELIST
        </button>
        <button
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "grey",
            color: "white",
          }}
        >
          T.O.S
        </button>
      </div>
    </main>
  );
}
