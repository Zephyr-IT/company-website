import { Switch, Route } from "react-router-dom";
import AboutHeader from "./about_header/about_header";

const AboutUs = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutHeader />
      </Route>
    </Switch>
  );
};

export default AboutUs;
