import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
import { Outlet } from "react-router-dom";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__rectangle"></div>
        <Outlet />
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;
