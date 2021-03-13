//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

// css
import './index.css';

// import App from './App';
import App from './routes/App'
import reportWebVitals from './reportWebVitals';

// Librerías
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const initialState={
    "user": {},
    "todos": 
        [
            "Hacer tarea de matemática", 
            "Hacer tarea de comunicación", 
            "Hacer tarea de lenguaje",
            "Hacer tarea de ciencia y ambiente",
        ],
    "important": [],
}

const store=createStore(reducer, initialState)

const container=document.getElementById('App');

ReactDOM.render(
        <Provider store={store}>
                <App/> 
        </Provider>
,container);    