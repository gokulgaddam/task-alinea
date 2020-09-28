import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cover from "./components/Cover";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import { useSpring } from "react-spring";
import "./App.css";

function App() {
  const [menu, setMenu] = useState(false);
  const slideAnimation = useSpring({
    opacity: menu ? 1 : 0,
    transform: menu ? `translateY(0)` : `translateY(-100%)`,
    config: {},
  });
  return (
    <div className="App mt-3">
      <Cover />
      <header>
        <div className="App-header ">
          <div className="shade"></div>

          <Navbar menu={menu} setMenu={setMenu} />
          <div className={`${menu ? "menuOpen" : "menuClose"}`}>
            <Menu style={slideAnimation} />
          </div>
        </div>
        <div className="heading ">
          <div>
            <p className="heading-1 display-2">
              The Most Powerful Checking Account
            </p>
            <p className="heading-2 lead">
              Our Checking account gives you higher returns than a savings
              account with no hiden fees.
            </p>
          </div>
          <form class=" mt-1 mb-1 pt-1 pb-1">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="rounded"
              style={{ padding: "3px 5px 3px 5px" }}
            ></input>
            <button
              type="submit"
              className="btn btn-rounded"
              style={{
                marginLeft: "10px",
                padding: "10px 25px 10px 25px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Join Now
            </button>
          </form>
          <p>280 spots left for Priority Access</p>
        </div>
      </header>
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
