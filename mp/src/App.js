import './scss/App.scss';
import Home from "./components/home.js";
import Incubator from "./components/incubator.js";
import Incubator_details from "./components/incubator_details.js";
import Learn from "./components/learn.js";
import Modules from "./components/modules.js";
import Modules_white from "./components/modules_white.js";
import Activity from "./components/activity.js";
import Activity_white from "./components/activity_white.js";
import Activity1 from "./components/activity1.js";
import Activity1_white from "./components/activity1_white.js";
import Footer from "./components/footer.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <article className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/incubator" component={Incubator} />
        <Route path="/incubator_details" component={Incubator_details} />
        <Route path="/learn" component={Learn} />
        <Route path="/modules" component={Modules} />
        <Route path="/modules_white" component={Modules_white} />
        <Route path="/activity" component={Activity} />
        <Route path="/activity_white" component={Activity_white} />
        <Route path="/activity1" component={Activity1} />
        <Route path="/activity1_white" component={Activity1_white} />
      </Switch>
      <Footer />
    </article>
  );
}

export default App;
