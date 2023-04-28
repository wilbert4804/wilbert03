import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './assets/componentes/Location'
import ResidentList from './assets/componentes/ResidentList'

function App() {

  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.LocationId.value
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    axios.get(URL)
         .then((res) => setLocation(res.data))
         .catch((err) => console.log(err))
  }

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  //console.log(URL)
  axios.get(URL)
       .then((res) => setLocation(res.data))
       .catch((err) => console.log(err))
  }, [])

  return (
      <section className='App grid place-content-center text-center min-h-screen bg-[url(/images/fondo.png)]  px-2'>
        <div>
        <img src='/images/principal.png' className='text-center max-w-[600px] mx-auto '/>
        </div>
       
      <div>
      <form onSubmit={handleSubmit}>
        <div className='py-0'>
          <input id='LocationId' placeholder='type a location Id' className='bg-black backdrop-opacity-70 text-white border-2 border-lime-700' type='text' />
          <button className='text-white bg-green-700 border-2 border-lime-700'>Search <i className='bx bx-search'></i></button>
        </div>
        <h2 className='text-green-500 py-10'>welcome to the universe!</h2>
      </form>
      </div>
      <Location location={location} />
      <ResidentList location={location} />
      </section>
  )
}

export default App
