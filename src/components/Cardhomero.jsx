import homero from '../assets/Img/Homero.png'
import { Card, Col, Row } from 'react-bootstrap';

const Cardhomero = ({personaje}) => {
    return (
        <Card className='m-5'>
            <Card.Body>
         <Row>
            <Col md={4}>
                <img src={personaje.image} alt={personaje.character} className="w-100"/>
            </Col>
            <Col md={8}>
            <Card.Title>
                    <h3 className='my-2'>{personaje.character}</h3>
            </Card.Title>
                <Card.Text>
                    {personaje.quote}
                </Card.Text>
            </Col>
        </Row>
            </Card.Body>
        </Card>
    );
};

export default Cardhomero;