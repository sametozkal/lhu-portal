import './create.css'
import { useState,useEffect } from 'react'
import Select from 'react-select'
import {useCollection} from '../../hooks/useCollection'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useFirestore} from '../../hooks/useFirestore'
import {useNavigate} from 'react-router-dom'

export default function Create() {

  const [name,setName]=useState('')
  const [details,setDetails]=useState('')
  const [date,setDate]=useState('')
  const [category,setCategory]=useState('')
  const [projectUser,setProjectUser]=useState([])
  const [users,setUsers]=useState([])

  const [formError,setFormError]=useState(null)
  const {user}=useAuthContext();

  const {dokumanEkle,response}=useFirestore('projeler')
  const navigate=useNavigate();

  const categories=[
    {value:'sinif',label:'Sınıflar (Tahta,Projeksiyon)'},
    {value:'tedarik',label:'Malzeme Tedarik'},
    {value:'rapor',label:'Rapor'},
  ]

  const {documents}=useCollection('kullanicilar')
    console.log(documents);

  const handleSubmit=async (e)=>{
	e.preventDefault();
	setFormError(null)

	if(!category){
	  setFormError('Lütfen Kategori Seçiniz')
	  return
	}

	if(projectUser.length<1){
	  setFormError('Lütfen için Kullanıcı Seçiniz')
	  return
	}
	const olusturan={
    kullanicilar:user.displayName,
    fotoUrl:user.photoURL,
    id:user.uid
  }

  const projeKullaniciListesi=projectUser.map((k)=>{
    return {
      kullanicilar:k.value.kullanicilar,
      fotoUrl:k.value.fotoUrl,
      id:k.value.id
    }
  })

  const yeniProje={
    isim:name,
    aciklama:details,
    kategori:category.value,
    bitisTarihi:new Date(date),
    yorumlar:[],
    olusturan,
    projeKullaniciListesi
  }
    
   await dokumanEkle(yeniProje);
   if(!response.error)   {
      navigate('/')
   }  
}

  useEffect(()=>{
    if(documents){
      const options=documents.map(user=>{
        return {value:user,label:user.kullanicilar}
      })
      setUsers(options)
    }

  },[documents])

  return (
    <div className='create-form'>
      <h2 className='page-title'>Yeni Gönderi Oluşturun</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Başlık:</span>
          <input required type="text" onChange={(e)=>setName(e.target.value)} value={name}
          />
        </label>

        <label>
          <span>Açıklama:</span>
          <textarea required type="text" onChange={(e)=>setDetails(e.target.value)} value={details}
          ></textarea>
        </label>

        <label>
           <span>Kategori:</span>
           <Select placeholder="Seçiniz" options={categories} onChange={(option)=>setCategory(option)} />
        </label>

        <label>
          <span>İlgililer:</span>
          <Select placeholder="Proje için Kullanıcı Seçiniz" options={users} 
           onChange={(option)=>setProjectUser(option)} isMulti/>
        </label>

        <label>
          <span>Tarihi:</span>
          <input required type="date" onChange={(e)=>setDate(e.target.value)} value={date}
          />
        </label>

        <button className='btn'>Paylaş</button>
        {formError && <div className='error'>{formError}</div>}
        
      </form>
    </div>
  )
}