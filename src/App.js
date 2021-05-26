import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from "./pages";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
