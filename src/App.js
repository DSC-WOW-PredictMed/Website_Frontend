import React from 'react';
import "./styles/styles.scss";
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Heart from './pages/Heart';
import Predict from './pages/Predict';
import Liver from './pages/Liver';
import Kidney from './pages/Kidney';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/predict/heart" component={Heart} />
        <Route exact path="/predict/liver" component={Liver} />
        <Route exact path="/predict/kidney" component={Kidney} />
      </Switch>
    </div>
  );
}

export default App;
