
import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import {doc,onSnapshot } from 'firebase/firestore'

export const useDocument = (koleksiyon, id) => {
    
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const ref = doc(db,'projeler',id)
  
      const unsubscribe=onSnapshot(ref,(doc)=>{
          if(doc.data()){
              setDocument({...doc.data(), id: doc.id})
              setError(null)
          }else{
              setError('Döküman bulunamadı')
          }
      },err=>{
            console.log(err.message)
            setError('Dökümana erişilemedi')
      })
  
      return () => unsubscribe()
  
    }, [koleksiyon, id])
  
    return { document, error }
  }