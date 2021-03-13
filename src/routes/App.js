// React
import { BrowserRouter , Route, Switch } from 'react-router-dom';


//Pages 
// import Pomodoro from './pages/Pomodoro';
// import Login from'./pages/Login';
import Pomodoro from '../pages/Pomodoro';
import Login from '../pages/Login';

// Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from '../pages/Register';


// CSS
import '../App.css'
// import './App.css';
// import '../App.css';

function App() {
  return (
    // Encapsula cada uno de los componentes de la ruta
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Pomodoro}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
