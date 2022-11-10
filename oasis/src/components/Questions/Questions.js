import React from 'react'
import Footer from '../Footer/Footer'
import './Questions.css'

function Questions() {
  return (
    <div className='questions'>
      <div className='containerPreguntasFrecuentes'>
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className='preguntas'>
          <p>¿Pregunta pregunta?</p>
          <p>Respuesta respuesta respuesta Respuesta respuesta respuesta Respuesta respuesta respuesta</p>
          <p>¿Pregunta pregunta?</p>
          <p>Respuesta respuesta respuesta Respuesta respuesta respuesta Respuesta respuesta respuesta</p>
          <p>¿Pregunta pregunta?</p>
          <p>Respuesta respuesta respuesta Respuesta respuesta respuesta Respuesta respuesta respuesta</p>
          <p>¿Pregunta pregunta?</p>
          <p>Respuesta respuesta respuesta Respuesta respuesta respuesta Respuesta respuesta respuesta</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Questions