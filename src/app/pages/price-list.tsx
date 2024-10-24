import { Link } from "react-router-dom";

export default function PriceList() {
  return (
    <>
      <h2>✦ полноценные работы ✦</h2>
      <h3>halfbody - 3500р fullbody - 4000р</h3>
      <div
        style={{
          margin: "auto",
          gap: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src="https://i.pinimg.com/564x/12/c0/74/12c0746e4f0568cd70c3e077114b05c1.jpg"
          style={{ borderRadius: "30px" }}
        />
        <img
          src="https://i.pinimg.com/564x/73/c1/f0/73c1f0e615edbd857494bd111a051075.jpg"
          style={{ borderRadius: "30px" }}
        />
        <img
          src="https://i.pinimg.com/enabled_lo/564x/70/8a/28/708a28e02f1e5e0a0b0ed33d975a4979.jpg"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <Link to={"/"}>
        <button
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "grey",
            color: "white",
            margin: "10px",
          }}
        >
          return
        </button>
      </Link>
    </>
  );
}
