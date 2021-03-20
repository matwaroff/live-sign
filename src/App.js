import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnTheAir from "./components/OnTheAir";
import OTAButton from "./components/OTAButton";

function App() {
    const [status, setStatus] = useState(false);
  return (
      <div className="App">
        <Router>
            <Switch>
              <Route path="/button">
                  <OTAButton status={status} setStatus={setStatus}/>
              </Route>
              <Route path="/">
                  <OnTheAir status={status} setStatus={setStatus}/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
