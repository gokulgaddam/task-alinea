import React from "react";
import { animated } from "react-spring";
import Navitems from "./Navitems";
import "./Menu.css";

function Menu({ style }) {
  return (
    <animated.div style={style} className="row  menu">
      <div className="second-block">
        <Navitems />
      </div>
    </animated.div>
  );
}

export default Menu;
