import NavBar from "./components/NavBar.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import MyInstallations from './pages/Installations.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/installations' component={MyInstallations}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
