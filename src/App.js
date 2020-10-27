import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "pages/Details";
import Home from "pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:pokemonName">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
