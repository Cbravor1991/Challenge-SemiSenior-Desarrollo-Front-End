
import './App.css';
import {Navbar} from './components'
import store from './redux/store'
import { Provider } from 'react-redux';
import{Home} from './pages'



function App() {

  return (
    <Provider store={store}>
    <div>
    <Navbar/>
    <Home/>
    </div>
    </Provider>
  );
}

export default App;
