// React
import React from 'react';
import { Link } from 'react-router-dom'; 

//CSS
import './styles/Navbar.css';

//IMAGES
import canguro from '../images/logo.png';

//STYLE COMPONENTS
import { ButtonText, LinkMIK } from './StyledComponents';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className="container-fluid">
                    <section className="row">
                            <section className="Logo__section col-sm-12 col-md-1 align-items-center pt-3">
                                <div className = "Logo__container">
                                    <Link to="/">
                                        <img src={canguro} alt=""/>
                                    </Link>
                                </div>
                                <p>MIK</p>    
                            </section>
                            <section className="Navigation__section col-sm-12 col-md-6 offset-md-4 pl-4">
                                <LinkMIK to="/">Portafolio</LinkMIK>
                                <LinkMIK to="/">Sobre mi</LinkMIK>
                                <ButtonText primary="true" to="/">Contáctame</ButtonText> 
                            </section>
                    </section>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;