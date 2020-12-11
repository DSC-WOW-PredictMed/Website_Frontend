import React from 'react';
import Navbar1 from './components/common/navbar';
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
    <Navbar1/>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/predict/heart" component={Heart} />
        <Route exact path="/predict/liver" component={Liver} />
      </Switch> */}
    </div>
  );
}

export default App;
