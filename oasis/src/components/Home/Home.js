import React from 'react'
import data from '../data.json'

function Home() {
  // console.log(data)
  const data1 = data
  // console.log(data1)

  return (
    <div>
      {
        data1 && data1.map((car, index) => {
          return(
            <div key={index}>
              <h2>{car.nombre}</h2>
              <p>{car.propiedades}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home