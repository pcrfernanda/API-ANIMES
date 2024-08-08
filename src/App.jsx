import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [animes, setAnimes] = useState([])
  const [filtro, setFiltro] = useState([null, null])

  async function getAnimes() {
    const res = await fetch("./animes.json")
    const data = await res.json()
    setAnimes(data)
  }

  useEffect(() => {
    getAnimes()
  }, [])

  function Filtro(anime) {
    if (filtro[0] == null) {
      return true
    } else if (anime[filtro[0]].includes(filtro[1])) {
      return true
    }
    return false;
  }

  return (
    <>
      <main>
        <div className='titulos'>
          <button onClick={() => setFiltro([null, null])}>
            Home
          </button>
          <button onClick={() => setFiltro(["type", "Movie"])}>
            Filmes
          </button>
          <button onClick={() => setFiltro(["type", "Series"])}>
            Series
          </button>
          <button onClick={() => setFiltro(["genre", "Action"])}>
            Ação
          </button>
        </div>
      </main>
      <main className="cards">
        {animes.filter(Filtro).map(anime => (
          <div key={anime.id} className='card-dentro'>
            <div className='card-edit' >
              <img src={anime.image} alt={anime.image} /> 
            </div>
            <p>
              {anime.title}
            </p>
            <p>
              {anime.year}
            </p>
            <p>
              {anime.duration}
            </p>
            <p className='bottom'>
              {anime.genre}
            </p>   
          </div>
        ))}
      </main>
    </>
  )
}

export default App
