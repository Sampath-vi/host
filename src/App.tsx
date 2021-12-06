import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const Counter = lazy(() => import('remote/counter'));
const Health = lazy(() => import('remote/health'));
import NewPost from "./newPost";
import "./index.css";
import { Spin } from 'antd';
import "antd/dist/antd.css";


const App = () => (
  <Suspense fallback={<Spin />}>
    <div className="container">
      <Counter additionalCount={5} />
      <Health />
      <NewPost />
    </div >
  </Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
