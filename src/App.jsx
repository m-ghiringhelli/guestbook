import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login/Login";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
