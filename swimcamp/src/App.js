import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import OurTeam from "./components/OurTeam";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { AccountBox } from "./components/accountBox";
import Test from "./components/Test";
import UserMenu from "./components/UserMenu";

function App() {
  return (
    <>
      <Switch>
        <Route path="/test" component={Test} />
        <Route exact path="/" component={AccountBox} />
        <Route path="/profile" component={UserMenu} />
        <Route exact path="/home" component={Home} />
        <Route path="/ourteam" component={OurTeam} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
