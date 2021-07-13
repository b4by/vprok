import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/home'

function App() {
 return (
    <Router>
        <Switch>
          <Route path="/about">
            <div />
          </Route>
          <Route path="/users">
            <div />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
 );
}

export default App;
