import simpsons from './assets/Img/Simpsons.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import stilo from "./style.css"



function App() {
  return (
    
    <Container style={stilo}>
    <div className="text-center">
      <img src={simpsons} width="100%" alt='homero'/>
      <div className='text-center my-5'>
      <Button variant="warning">Obtener frase</Button>
      </div>
      
    </div>
    </Container>
  );
}

export default App;
