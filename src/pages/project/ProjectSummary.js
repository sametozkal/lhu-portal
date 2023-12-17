import Avatar from "../../components/Avatar"
import { useFirestore } from "../../hooks/useFirestore"
import { useAuthContext } from "../../hooks/useAuthContext"
import {useNavigate} from 'react-router-dom'

export default function ProjectSummary({ proje }) {

    const {user}=useAuthContext();
    const navigate=useNavigate()

    const {dokumanSil}=useFirestore('projeler')

    const handleClick=(e)=>{
    dokumanSil(proje.id)
    navigate('/')
    }

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{proje.isim}</h2>
        <p>Bu projeyi oluşturan : {proje.olusturan.kullanicilar}</p>

        <p className="date">
          Proje Bitiş Tarihi: {proje.bitisTarihi.toDate().toLocaleString('tr-TR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="details">
          {proje.aciklama}
        </p>
        <h4>Proje Kullanıcıları:</h4>
        <div className="project-users">
          {proje.projeKullaniciListesi.map(k => (
            <div key={k.id}>
              <Avatar src={k.fotoUrl} />
            </div>
          ))}
        </div>
      </div>

      {user.uid === proje.olusturan.id &&(
        <button className="btn" onClick={handleClick}>Tamamla</button>
        )}
    </div>
  )
}
