
import { Link } from "react-router-dom";
import './navbar.css'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
         /*
                <li>
                    <Link to="/signup"> Üye ol </Link>
                </li>  
        */
        
    const {logout,isPending} =useLogout()
    const {user}=useAuthContext()

    return(
          <div className="navbar">
            <ul>
                <li className="logo">
                    <h1>D</h1>
                    <h1>E</h1>
                    <h1>S</h1>
                    <h1>M</h1>
                    <h1>E</h1>
                    <h1>R</h1>
                    <span>Bilgi İşlem Paneli</span>
                
                </li>
              
                {!user &&(
                    <>
                <li>
                    <Link to="/login"> Giriş </Link>

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