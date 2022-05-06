import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ProvideAuth } from "./context/ProvideAuth";
import EntryList from "./views/EntryList/EntryList";
import Login from "./views/Login/Login";

export default function App() {
  return (
    <>
      <ProvideAuth>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <EntryList />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}
