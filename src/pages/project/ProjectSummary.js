import Avatar from "../../components/Avatar"

export default function ProjectSummary({ proje }) {

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{proje.isim}</h2>
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
    </div>
  )
}
