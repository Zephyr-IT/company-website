import Intro from "./intro/intro";
import Team from "./team/team";
import Workflow from "./workflow/workflow";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <Switch>
      <Route path="/">
        <Intro />
        <Workflow />
        <Team />
      </Route>
    </Switch>
  );
};

export default Home;
