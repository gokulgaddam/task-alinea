import React from "react";
import { useSpring, animated } from "react-spring";

import "./Navbar.css";
function Navbar(props) {
  const topBar = useSpring({
    transform: props.menu ? `rotate(45deg) ` : `rotate(0deg) `,
    position: `relative`,
    top: props.menu ? `8px` : `0px`,
    backgroundColor: props.menu ? `black` : `white`,
  });
  const midBar = useSpring({
    opacity: props.menu ? 0 : 1,
    width: props.menu ? `25px` : `30px`,
  });
  const lowBar = useSpring({
    transform: props.menu ? `rotate(-45deg) ` : `rotate(0deg) `,
    position: `relative`,
    bottom: props.menu ? `8px` : `0px`,
    width: props.menu ? `25px` : `20px`,
    backgroundColor: props.menu ? `black` : `white`,
  });
  const buttonAnimation = useSpring({
    backgroundColor: props.menu ? `white` : `black`,
    cursor: `pointer`,
  });
  console.log(props.menu);
  return (
    <div className="d-flex flex-row justify-content-around container ">
      <p className="" style={{ position: "relative", zIndex: "5" }}>
        Brand Name
      </p>

      <div className="ml-auto" style={{ position: "relative", zIndex: "5" }}>
        <button className=" btn btn-rounded login mr-3">Login</button>
        <button className=" btn btn-rounded signup mr-3 ">Signup</button>
      </div>

      <animated.div
        className=" toggler "
        onClick={() => props.setMenu(!props.menu)}
        style={buttonAnimation}
      >
        <div className="menu-icon">
          <animated.div style={topBar} className={`bar`}></animated.div>
          <animated.div style={midBar} className={`bar`}></animated.div>
          <animated.div style={lowBar} className={`bar`}></animated.div>
        </div>
      </animated.div>
    </div>
  );
}

export default Navbar;
/*
 */
