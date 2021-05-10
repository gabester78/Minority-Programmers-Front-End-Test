import './scss/App.scss';
import Home from "./components/home.js";
import Incubator from "./components/incubator.js";
import Incubator_details from "./components/incubator_details.js";
import Learn from "./components/learn.js";
import Modules from "./components/modules.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/incubator" component={Incubator} />
        <Route path="/incubator_details" component={Incubator_details} />
        <Route path="/learn" component={Learn} />
        <Route path="/modules" component={Modules} />
      </Switch>
    </div>
  );
}

export default App;
