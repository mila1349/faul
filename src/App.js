import './style.scss';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Creators from './pages/Creators';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/brands" >
            <Brands/>
          </Route> 

          <Route exact path="/creators" >
            <Creators/>
          </Route>

          <Route exact path="/" >
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
