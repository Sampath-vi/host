import React from "react";
import ReactDOM from "react-dom";
import Counter from 'remote/counter';
import Health from 'remote/health';
import AddNewPost from 'remote/post';

import "./index.css";

const App = () => (
  <div className="container">
    <Counter additionalCount={5} />
    <Health />
    <AddNewPost
      onClick={(e) => {}}
      onChange={(title, body) => {
        console.log(title, body);
      }}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
