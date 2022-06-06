import React from 'react'

//Css
import './components.css';


const Formulario = ({submitForm, setNombre, setTelefono, setEmail, nombre, telefono, email}) => {
  return (
      <div className='form-body'>
          <label className='title-form'>Déjanos tus datos</label><br />
            <label >Nombre</label><br />
            <input type="text" className='input-form' value={nombre} onChange={(element) => setNombre(element.target.value)}/><br />

            <label >Telefono</label><br />
            <input type="number" className='input-form' value={telefono} onChange={(element) => setTelefono(element.target.value)}/><br />

            <label>Correo electronico</label><br />
            <input type="email" className='input-form' value={email} onChange={(element) => setEmail(element.target.value)} /><br />

            <button className='btn-form' onClick={()=>submitForm()}>Enviar</button>
        </div>
  )
}

export default Formulario;