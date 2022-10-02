import React from 'react';
import homero from '../assets/Img/Homero.png'

const Cardhomero = () => {
    return (
        <div className="App square border rounded m-5 d-flex bg-light">
            <img src={homero} width="50%"/>
            <div className='cartaHomero'>
            <h3 className='my-2'>Homer Simpson</h3>
            <p className='my-3'>Facts are meaningléss. You could use facts to prove anything that´s even remotely true</p>
            </div>
        </div>
    );
};

export default Cardhomero;