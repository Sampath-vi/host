import React, { lazy, Suspense } from "react";
import { Spin } from 'antd';

const AddNewPost = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5000)).then(
    () => import("remote/post")
  );
});

export default () => (
  <Suspense fallback={<Spin />}>
    <AddNewPost
      onClick={(e) => { }}
      onChange={(title, body) => {
        console.log(title, body);
      }}
    />
  </Suspense>
);
