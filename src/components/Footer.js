//React
import React from 'react';
import { Link } from 'react-dom';

//CSS
import './styles/Footer.css'

//STYLE COMPONENTS
import { ButtonText } from './StyledComponents'; 

//IMAGES
import QR from '../images/QR.jpeg'

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer>
                    <h1>Si quieres apoyarme a seguir trabajando en lo que me gusta</h1>
                    <p>Puedes apoyarme yapenadome o a través de un cafecito</p>
                    <div className="help-section">
                        <ButtonText primary="true">Apoya aquí</ButtonText>
                        <div className="yape-image-container">
                            <img src={QR} alt="QR-yape"/>
                        </div>
                        <ButtonText primary="true">Apoya aquí</ButtonText>
                    </div>
                </footer>
                <div className="phrase-section">
                    <h3 className="mb-0">Respeto y amor para todos</h3>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;