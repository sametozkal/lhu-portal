
import './signup.css'
import { useState } from 'react'


export default function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayname,setDisplayName] = useState('')
  const [thumbnail,setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  
  const handleChange = (e) => {
    setThumbnail(null)
    let secilen = e.target.files[0]
    //console.log(selected)
  
    if (!secilen) {
      setThumbnailError('Lütfen bir tane resim dosyası seçiniz')
      return
    }
    if (!secilen.type.includes('image')) {
      setThumbnailError('Lütfen resim dosyası seçiniz')
      return
    }
  
    setThumbnailError(null)
    setThumbnail(secilen)
    console.log('thumbnail güncellendi')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email!=='' && password !=='' && displayname !=='' && thumbnail!==null){
      console.log(email, password, displayname, thumbnail)
    }
  
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Üye Olma Sayfası</h2>
      <label>
        <span>Email: </span>
        <input type='email' required 
        value={email} 
        onChange={(e)=> setEmail(e.target.value)}/>
      </label>
      <label>
        <span>Parola: </span>
        <input type='password' required 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
      </label>
      <label>
        <span>Kullanıcı Adı: </span>
        <input type='text' required 
        value={displayname} 
        onChange={(e)=> setDisplayName(e.target.value)}/>
      </label>
      <label>
        <span>Profil Resmi: </span>
        <input type='file' required onChange={handleChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className='btn'>Üye ol</button>
    </form>
  )
}
