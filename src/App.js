import React from 'react';
import "./styles/styles.scss";
import Home from "./pages/Home";

const App = () => {
  return (
    <Home/>
  )
}

export default App;


{/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/predict/heart" component={Heart} />
        <Route exact path="/predict/liver" component={Liver} />
      </Switch> */}