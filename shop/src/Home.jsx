import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Bioloģiskais medus</h1>
        <p>
          Iegādājies bioloģisko medu no Mārtiņa bioloģiskās lauksaimniecības, kas jau vairākus gadus pastāv Madonas novadā.
          
        </p>
        <Link to="/products" className="btn btn-default">
          Iepirkties
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
