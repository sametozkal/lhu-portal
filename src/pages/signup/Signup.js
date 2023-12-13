
import './signup.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'


export default function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [thumbnail,setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const {error,isPending,signup}=useSignup();
  
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
    if(email!=='' && password !=='' && displayName !=='' && thumbnail!==null){
      signup(email, password, displayName, thumbnail)
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
        value={displayName} 
        onChange={(e)=> setDisplayName(e.target.value)}/>
      </label>
      <label>
        <span>Profil Resmi: </span>
        <input type='file' required onChange={handleChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Üye ol</button>}
      {isPending && <button className='loading-btn'>Yükleniyor</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
