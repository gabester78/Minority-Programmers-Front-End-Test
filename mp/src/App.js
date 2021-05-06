import './scss/App.scss';
import Navbar from "./components/nav_bar.js";
import Home from "./components/home.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/incubator" component={Incubator} />
        <Route path="/learn" component={Learn} /> */}
      </Switch>
    </div>
  );
}

export default App;
