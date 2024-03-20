import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <NotFoundPage />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/" exact>
          <Redirect />
        </Route>
      </Switch>
    </Router>
  );
};
