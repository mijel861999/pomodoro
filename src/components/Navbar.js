// React
import React from 'react';
import { Link } from 'react-router-dom'; 

// Redux
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
//CSS
import './styles/Navbar.css';

//IMAGES
import canguro from '../images/logo.png';

//STYLE COMPONENTS
import { ButtonText, LinkMIK } from './StyledComponents';

const Navbar = ( props ) =>{

    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const logout = () =>{
        props.logoutRequest({});
    }

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
                                {hasUser?
                                    <LinkMIK to="/">{user.name}</LinkMIK>:
                                    null
                                }
                                <div className="perfil-image-container">
                                    { hasUser ? 
                                            <img src={gravatar(user.email)} alt={user.email}/>:
                                            <p>F</p>
                                    }
                                </div>
                                {hasUser?
                                    <ButtonText primary="true" onClick={logout} to="/">Logout</ButtonText>: 
                                    <LinkMIK to="/login/">Iniciar Sesión</LinkMIK>
                                }
                                {hasUser?
                                    null:
                                    <LinkMIK to="/register">Regístrate</LinkMIK>
                                }
                            </section>
                    </section>
                </nav>
            </React.Fragment>
        );
}

// export default Navbar;
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);