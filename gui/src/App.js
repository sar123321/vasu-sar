import './App.css';
// import Dashboard from './Dashboard';
// import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Authentication from './Authentication';
import Whatisit from './whatisit';
import WaitList from './components/waitlist/waitlist.component'

function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/about">
          <Whatisit />
        </Route>
        {/* display only waitlist and what is it component */}
        <Route path="/">
          {/* <WaitList/> */}
          <Authentication />
        </Route>
      </Switch>  
      </div>
    </Router>
  );
}

export default App;
