import Topbar from "./components/topbar/topbar.jsx";
import Homepage from "./pages/homepage/homepage.jsx";
import Single from "./pages/single/single.jsx";
import Write from "./pages/write/write.jsx"
import Settings from "./pages/settings/settings.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Topbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/posts">
        <Homepage />
      </Route>
      <Route path="/register">
        <Register/>
        {/* {currentUser ? <Homepage /> : <Register />} */}
      </Route>
      <Route path="/login">
        <Login/>
        {/* {currentUser ? <Homepage /> : <Login />} */}
        </Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write">
        <Write/>
        {/* {currentUser ? <Write /> : <Login />} */}
        </Route>
      <Route path="/settings">
        <Settings/>
        {/* {currentUser ? <Settings /> : <Login />} */}
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
