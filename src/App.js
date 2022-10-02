import simpsons from './assets/Img/Simpsons.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Cardhomero from './components/Cardhomero';



function App() {
  return (
    
    <div className="App square border border-warning rounded " style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))'}}>
      <img src={simpsons}/>
      <div className='text-center my-5'>
      <Button variant="warning">Obtener frase</Button>{' '}
      </div>
      <Cardhomero/>
    </div>
  );
}

export default App;
