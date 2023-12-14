
import { Link } from "react-router-dom";
import './navbar.css'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {

    const {logout,isPending} =useLogout()
    const {user}=useAuthContext()

    return(
          <div className="navbar">
            <ul>
                <li className="logo">
                    <h1>L</h1>
                    <h1>H</h1>
                    <h1>U</h1>
                    <span>Bilgi İşlem Destek Koordinatörlüğü</span>
                </li>

                {!user &&(
                    <>
                <li>
                    <Link to="/login"> Giriş </Link>
                </li>
                <li>
                    <Link to="/signup"> Üye ol </Link>
                </li>
                    </>
                )}
                    {user &&(
                  <li>
                    {!isPending && <button className="logout-btn" onClick={logout}> Çıkış </button>}
                    {isPending && <button className="logout-btn" onClick={logout}> Çıkış Yapılıyor </button>}
                    </li>
                    )}
            </ul>
          </div>  
    )
}