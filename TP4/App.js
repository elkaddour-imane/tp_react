
import './App.css';
import App3 from './tp3/App3';
import App2 from './tp2/App2';
import App1 from './tp1/App1';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import  Route from 'react-router-dom/Route';
import navbarstyle from './navbar.css';

function App() {
  return (
   <>
   <Router>
   <div className="navbar">
        <ul className="links">
        <li><NavLink to="/tp1" className="link" activeStyle={{color:'red',backgroundColor:'rgb(230,230,230);'}}> tp1 </NavLink></li>
        <li><NavLink to="/tp2" className="link" activeStyle={{color:'red'}}> tp2 </NavLink></li>
        <li><NavLink to="/tp3" className="link" activeStyle={{color:'red'}}> tp3 </NavLink></li>
        </ul>
        </div>
        <Route path='/tp1' render={()=><App1/>}/>
        <Route path='/tp2' render={()=><App2/>}/>
        <Route path='/tp3' render={()=><App3/>}/>
    </Router>
   </>
  );
}

export default App;
