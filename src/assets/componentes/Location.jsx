import React from 'react'

const Location = ({location}) => {
    console.log(location)
  return (
    <section className='text-white text-center px-0'>
        <h2>{location?.name}</h2>
        <ul>
            <li>Type:  {location?.type}</li>
            <li>Dimension:  {location?.dimension}</li>
            <li>Population:  {location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default Location