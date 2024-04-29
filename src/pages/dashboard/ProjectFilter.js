import { useState } from 'react'

const filterList = ['hepsi','benim', 'gidecek', 'gelecek', 'rapor']

export default function ProjectFilter({currentFilter,changeFilter}) {
  

  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }
  console.log(currentFilter)
  

  return (
    <div className="project-filter">
      <nav>
        <p>Filtrele: </p>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>
        ))}
      </nav>
    </div>
  )
}