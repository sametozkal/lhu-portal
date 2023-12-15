import './dashboard.css'
import {useCollection} from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList';

export default function Dashboard() {
  const {documents,error}=useCollection('projeler');

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectList projeler={documents}/>}
    </div>
  )
}