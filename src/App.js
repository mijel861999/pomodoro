// React
import { BrowserRouter , Route, Switch } from 'react-router-dom';


//Pages 
import Pomodoro from './pages/Pomodoro';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Pomodoro}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
