import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Navitem(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const style = useSpring({
    tension: 120,
    transform: menuOpen ? `translateY(0%)` : `translateY(-50%)`,
    mass: 1,
    delay: 100,
    padding: 0,
    margin: 0,
  });
  const arrow = useSpring({
    transform: menuOpen ? `rotateY(180deg)` : `rotateY(10deg)`,
    cursor: `pointer`,
  });
  const nested = useSpring({
    display: menuOpen ? `block` : `none`,
    transform: menuOpen ? `translateX(0)` : `translateX(-100%)`,
    config: {
      tension: 120,
      mass: 5,
    },
  });

  let nestedElements = props.arr.map((ele) => {
    return (
      <li className="mt-3" style={{ fontWeight: "500", fontSize: "40px" }}>
        {ele}
      </li>
    );
  });

  return (
    <li key={props.key} className="nav-item my-auto row">
      <div className="col-3"></div>
      <animated.div style={style} className="col-auto">
        {props.element}
      </animated.div>
      <animated.div style={arrow} className="d-inline mr-auto">
        <a
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {props.arr.length ? " >" : null}
        </a>
      </animated.div>

      <animated.div style={nested} className="col-3 mr-auto">
        <ul className="mr-auto ">{nestedElements}</ul>
      </animated.div>
    </li>
  );
}

export default Navitem;
