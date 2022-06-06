import React, { useState} from 'react'
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
        //https://us-central1-pruebadiario-bab0e.cloudfunctions.net/diario // nube
        //http://localhost:5000/pruebadiario-bab0e/us-central1/diario/formulario?nombre=${nombre}&telefono=${telefono}&email=${email} //local get
        //http://localhost:5000/pruebadiario-bab0e/us-central1/diario/formulario //local post
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(nombre.length < 10  ){
             alert("longuitud de nombre incorrecta");
        }

        if(telefono.length !== 8){
            alert("longuitud de numero de telefono incorrecta");
        }
        console.log(emailRegex.test(email));
        if(email.length <=  0 || !emailRegex.test(email)){
            alert("Email incorrecto");
        }

        if(emailRegex.test(email) && telefono.length === 8 && nombre.length > 10 ){
            axios
                .post(`http://localhost:5000/pruebadiario-bab0e/us-central1/diario/formulario`, { nombre: nombre, telefono: telefono, email: email })
                .then((response) => {
                    alert("Datos Guardados");
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        
        
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