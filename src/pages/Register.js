//React 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest} from '../actions';

// CSS
import './css/Login.css';

const Register = props => {

    const [credentials, setCredentials] = useState({
        email: '',
        name: '',
        password: ''
    })

    const inputChanged = event =>{
        // Esto no toma el objeto con los valores 
        // Lo coma como si fuera vacío
        // const cred=credentials;
        // cred[event.target.name] = event.target.value;
        // this.setState({
        //     credentials: cred
        // });
        setCredentials({
            ...credentials, 
            [event.target.name]: event.target.value
        })

    }

    const login = event =>{
        console.log(credentials);

        props.loginRequest(credentials);
        props.history.push('/');
        // fetch('http://127.0.0.1:8000/auth/', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(this.state.credentials)
        // })
        // .then(data=>data.json())
        // .then(
        //     data=>{
        //         console.log(data.token);
        //     }
        // ).catch(error=> console.error(error))
    }

    


    return(
        
        <React.Fragment>
            <section className="login-container">
                <form className="" action="">
                    <h1>Registrate!</h1>
                    <br/>
                    <label htmlFor="">
                        Email:
                        <input 
                            type="text"
                            name="email"
                            placeholder="user@direction.com"
                            value={credentials.email}
                            onChange={inputChanged}
                        />
                    </label>
                    <label>
                        Name:
                        <input 
                        type="text"
                        name="name"
                        placeholder="example"
                        value={credentials.name}
                        onChange={inputChanged}
                        />
                    </label>
                    <br/>
                    <label htmlFor="">
                        Password:
                        <input 
                            type="password"
                            name="password"
                            placeholder="*************"
                            value={credentials.password}
                            onChange={inputChanged}
                            />
                    </label>
                    <br/>
                    <button onClick={login}>Login!</button>

                </form>     
            </section>
            
            {/* <button onClick={register}>Register!</button> */}
        </React.Fragment>

    );
}

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Register);


// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||
// ||



// class Login extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             credentials: {
                // username: '',
                // password: ''
//             }
//         }
//     }

    // login = event =>{
    //     // console.log(this.state.credentials);
    //     fetch('http://127.0.0.1:8000/auth/', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(this.state.credentials)
    //     })
    //     .then(data=>data.json())
    //     .then(
    //         data=>{
    //             console.log(data.token);
    //         }
    //     ).catch(error=> console.error(error))
    // }

//     register = event =>{
//         // console.log(this.state.credentials);
//         fetch('http://127.0.0.1:8000/api/users/', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(this.state.credentials)
//         })
//         .then(data=>data.json())
//         .then(
//             data=>{
//                 console.log(data.token);
//             }
//         ).catch(error=> console.error(error))
//     }

    // inputChanged = event =>{
    //     // Esto no toma el objeto con los valores 
    //     // Lo coma como si fuera vacío
    //     const cred=this.state.credentials;
    //     cred[event.target.name] = event.target.value;
    //     this.setState({
    //         credentials: cred
    //     });
    // }

//     render(){
//         return(
            // <React.Fragment>
            //     <h1>Bienvenido!</h1>
            //     <label htmlFor="">
            //         Username:
            //         <input 
            //             type="text"
            //             name="username"
            //             placeholder="user@direction.com"
            //             value={this.state.credentials.username}
            //             onChange={this.inputChanged}
            //         />
            //     </label>
            //     <label htmlFor="">
            //         Password:
            //         <input 
            //             type="password"
            //             name="password"
            //             placeholder="*************"
            //             value={this.state.credentials.password}
            //             onChange={this.inputChanged}
            //             />
            //     </label>
            //     <button onClick={this.login}>Login!</button>
            //     <button onClick={this.register}>Register!</button>
            // </React.Fragment>
//         );
//     } 
// }

// export default Login;