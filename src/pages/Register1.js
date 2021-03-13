//React 
import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            credentials: {
                username: '',
                password: ''
            }
        }
    }


    register = event =>{
        // console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data=>data.json())
        .then(
            data=>{
                console.log(data.token);
            }
        ).catch(error=> console.error(error))
    }

    inputChanged = event =>{
        // Esto no toma el objeto con los valores 
        // Lo coma como si fuera vacío
        const cred=this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({
            credentials: cred
        });
    }

    render(){
        return(
            <React.Fragment>
                <h1>Bienvenido, Registrate por favor!</h1>
                <label htmlFor="">
                    Username:
                    <input 
                        type="text"
                        name="username"
                        placeholder="user@direction.com"
                        value={this.state.credentials.username}
                        onChange={this.inputChanged}
                    />
                </label>
                <label htmlFor="">
                    Password:
                    <input 
                        type="password"
                        name="password"
                        placeholder="*************"
                        value={this.state.credentials.password}
                        onChange={this.inputChanged}
                        />
                </label>
                <button onClick={this.register}>Register!</button>
            </React.Fragment>
        );
    } 
}

export default Register;