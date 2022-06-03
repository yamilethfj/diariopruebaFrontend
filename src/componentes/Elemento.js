import React from 'react';

//Css
import './components.css';

const Elemento = ({icon, text}) => {
  return (
    <div className='elemento-body'>
        <div className='img-body-elemento'>
            <img  src={icon} alt="React Logo"  className='img-elemento'/>
        </div>
        <br />
        <div className='texto-body-elemento'>
            <label className='text-elemento'>{text}</label>
        </div>
    </div>
  )
}

export default Elemento;