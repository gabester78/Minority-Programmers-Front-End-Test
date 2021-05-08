import './scss/App.scss';
import Home from "./components/home.js";
import Incubator from "./components/incubator.js"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/incubator" component={Incubator} />
        {/* <Route path="/learn" component={Learn} /> */}
      </Switch>
    </div>
  );
}

export default App;
