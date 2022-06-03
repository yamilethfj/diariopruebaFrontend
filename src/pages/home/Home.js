import React, {useState} from 'react'
import axios from 'axios'

//Css
import './Home.css';

//Components
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Elemento from '../../componentes/Elemento';
import Formulario from '../../componentes/Formulario';

//SVG
import Datos from "./../../assets/img/datos.svg"; 
import Facebook from "./../../assets/img/facebook.svg";
import Historial from "./../../assets/img/historial.svg";
import Instagram from "./../../assets/img/instagram.svg";
import Reconocimiento from "./../../assets/img/reconocimiento.svg";

//Datos
const DATA_ELEMENTOS = [
    {icon: Datos, text:"Lorem ipsum dolor sit amet, consectetur adopc elitm, de to"},
    {icon: Facebook, text:"Lorem ipsum dolor sit amet, consectetur adopc elitm, de to"},
    {icon: Historial, text:"Lorem ipsum dolor sit amet, consectetur adopc elitm, de to"},
    {icon: Instagram, text:"Lorem ipsum dolor sit amet, consectetur adopc elitm, de to"},
    {icon: Reconocimiento, text:"Lorem ipsum dolor sit amet, consectetur adopc elitm, de to"},
]; 

const Home = () => {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = () =>{
        //https://us-central1-pruebadiario-bab0e.cloudfunctions.net/diario
        //http://localhost:5000/pruebadiario-bab0e/us-central1/diario/formulario?nombre=${nombre}&telefono=${telefono}&email=${email}
        //http://localhost:5000/pruebadiario-bab0e/us-central1/diario/formulario
        axios
        .post(`https://us-central1-pruebadiario-bab0e.cloudfunctions.net/diario/formulario`, { nombre: nombre, telefono: telefono, email: email })
        .then((response) => {
            alert("Datos Guardados");
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
     return (
    <div className='home-page'>
        <div className="scroll">
        <Header />
        <br /> 
            <div className='title-body'>
                <label className='texto-home'> 
                <label className='text1'>¿Nemo enim ipsam voluptatem </label> 
                <label className='text2'>quia <label className='text-red'>75,000 voluptas</label> sit</label> 
                <label className='text3'>aspernatur?</label></label>
            </div>

            <div className='elementos-container'>
            {
                DATA_ELEMENTOS.map((elemento, i) => {
                    return <Elemento icon={elemento.icon} text={elemento.text} key={i} />
                })
            }
            </div>
            <br /> 
            <Formulario submitForm={submitForm} nombre={nombre} setNombre={setNombre} telefono={telefono} setTelefono={setTelefono} email={email} setEmail={setEmail}/>
            <br /> 
            <br /> 
            <Footer/>
        </div>
        
    </div>
  )
}

export default Home;