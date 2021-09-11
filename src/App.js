import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Game } from "./Game";
import {Home} from "./Home";

function App() {
  return (
    <Router>
      <div className="Container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Game">Game</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
