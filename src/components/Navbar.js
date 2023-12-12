
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return(
          <div className="navbar">
            <ul>
                <li className="logo">
                    <h1>L</h1>
                    <h1>H</h1>
                    <h1>U</h1>
                    <span>Bilgi İşlem Destek Koordinatörlüğü</span>
                </li>
                <li>
                    <Link to="/login"> Giriş </Link>
                </li>
                <li>
                    <Link to="/signup"> Üye ol </Link>
                </li>
                <li>
                    <button className="logout-btn"> Çıkış </button>
                </li>
            </ul>
          </div>  
    )
}