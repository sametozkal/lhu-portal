import React from 'react'
import './onlineUsers.css'
import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar'

export default function OnlineUsers() {

    const {isPending,error,documents}=useCollection('kullanicilar')

  return (
<div className="user-list">
    <h2>Kullanıcı Listesi</h2>
    {isPending && <div>Kullanıcılar Yükleniyor...</div>}
    {error && <div>{error}</div>}
    {documents && documents.map( k=>(
      <div key={k.id} className="user-list-item">
         {k.online && <span className="online-user"></span>}
        <span>{k.kullaniciAd}</span>
        <Avatar src={k.fotoUrl} />
      </div>
      ))}
</div>
  )
}
