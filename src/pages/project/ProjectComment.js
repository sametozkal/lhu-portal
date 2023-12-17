import { useState } from "react";
import {Timestamp} from 'firebase/firestore'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";

export default function ProjectComments({proje}) {
    const { user } = useAuthContext()
    const [newComment, setNewComment] = useState('')
    const {dokumanGuncelle,response}=useFirestore('projeler')

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const yorumNesnesi = {
        kullanicilar: user.displayName,
        fotoUrl: user.photoURL,
        yorumText: newComment,
        tarih: Timestamp.fromDate(new Date()),
        id: Math.random()
      }
      await dokumanGuncelle(proje.id,{
	    yorumlar:[...proje.yorumlar,yorumNesnesi]
         })

     console.log(response);

        if(!response.error){
	        setNewComment('')
  }
    }
  
    return (
      <div className="project-comments">
        <h4>Proje Yorumları</h4>

	<ul>
	{proje.yorumlar.length > 0 && proje.yorumlar.map(y => (
	  <li key={y.id}>
		<div className="comment-author">
		  <Avatar src={y.fotoUrl} />
		  <p>{y.kullanicilar}</p>
		</div>
		<div className="comment-date">
		  <p>Tarih</p>
		</div>
		<div className="comment-content">
		  <p>{y.yorumText}</p>
		</div>
	    </li>
	    ))}
    </ul>
  
        <form className="add-comment" onSubmit={handleSubmit}>
          <label>
            <span>Yeni Yorum Ekle:</span>
            <textarea
              required
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
            ></textarea>
          </label>
          <button className="btn">Yorum Ekle</button>
        </form>
      </div>
    )
  }
