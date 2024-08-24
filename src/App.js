
import './App.css';
import {Navbar} from './components'
//import store from './redux/store'
import { Provider } from 'react-redux';
import{Home} from './pages'


function App() {

  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
