import homero from '../assets/Img/Homero.png'
import { Card, Col, Row } from 'react-bootstrap';

const Cardhomero = () => {
    return (
        <Card className='m-5'>
            <Card.Body>
         <Row>
            <Col md={4}>
                <img src={homero} alt="homero simpson"/>
            </Col>
            <Col md={8}>
            <Card.Title>
                    <h3 className='my-2'>Homer Simpson</h3>
            </Card.Title>
                <Card.Text>
                    Facts are meaningléss. You could use facts to prove anything that´s even remotely true.
                </Card.Text>
            </Col>
        </Row>
            </Card.Body>
        </Card>
    );
};

export default Cardhomero;