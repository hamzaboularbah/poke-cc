import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "pages/Details";
import Home from "pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:pokemonId" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
