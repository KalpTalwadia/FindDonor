import './App.css';
import {Navbar} from './components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/home';
import { Register } from './pages';
import {AuthProvider} from './context/firebase-context'

function App() {
  return (
    <Router>
    <AuthProvider>

       <Navbar/>
    <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path="/register" exact component={Register}/>
    </Switch>
 
    </AuthProvider>
    </Router>
  );
}

export default App;
