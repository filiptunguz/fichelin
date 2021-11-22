import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import './App.scss';
import Home from "./components/Home/Home";

function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
