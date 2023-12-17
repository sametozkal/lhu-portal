import './login.css'
import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'

export default function Login() {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const {error,isPending,login}=useLogin();

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)
  }

  return (
   <form className='auth-form' onSubmit={handleSubmit}>
    <h2>Giriş Sayfası</h2>
    
    <label>
      <span>Email: </span>
      <input type='email' required 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}/>

      <span>Parola: </span>
      <input type='password' required 
       value={password} 
       onChange={(e)=>setPassword(e.target.value)}/>
       
    </label>
    
    {!isPending && <button type='submit' className='btn'> Giriş Yap</button>}
    {isPending && <button className='loading-btn'> Yükleniyor</button>}
    {error && <div className='error'>{error}</div>} 
    <br /> <hr />
    <span>Designed by <i>Samet Özkal</i> </span>
    <hr />
   </form>
  )
}
