import simpsons from './assets/Img/Simpsons.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import stilo from "./style.css"
import {useEffect, useState} from "react"
import Cardhomero from './components/Cardhomero';
import Spinner from './components/Spinner';



function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    
    try {
        //mostrar el spinner
        setMostrarSpinner(true)
        const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        console.log(respuesta)
        const dato = await respuesta.json();
        console.log(dato[0]);
        setPersonaje(dato[0]);
        //mostrar el componente frase
        setMostrarSpinner(false);
        
      } catch (error) {
        console.log(error)
        //mostrar un mensaje al usuario que ocurrio un error
      }
  }

  //condicion logica operador ternario ?
  // (condicion logica)?(logica a ejecutar si cumplo la condicion):(else)
  const mostrarComponente = (mostrarSpinner)?(<Spinner></Spinner>):(<Cardhomero personaje={personaje}></Cardhomero>)


  return (
    
    <Container style={stilo}>
    <div className="text-center">
      <img src={simpsons} width="100%" alt='homero'/>
      <div className='text-center my-5'>
      <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
      </div>
    </div>
    {
      mostrarComponente
    }
    </Container>
  );
}

export default App;
