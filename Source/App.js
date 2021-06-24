import './App.css';
import Header from './Header';
import Home from './Home';
import Order from './Order';
import Cuisine from './Cuisine';
import Contact from './Contact';
import Footer from './Footer';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/order" component={Order}/>
      <Route path="/cuisine" component={Cuisine}/>
      <Route path="/contact" component={Contact}/>
      <Footer/>
      </Router>
       
    </div>
  );
}

export default App;
