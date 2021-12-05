import React from "react";
import ReactDOM from "react-dom";
import Counter from 'remote/counter';
import Health from 'remote/health';

import "./index.css";

const App = () => (
  <div className="container">
  <Counter additionalCount={5}/>
  <Health />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
