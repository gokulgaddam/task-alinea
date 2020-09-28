import React from "react";
import Navitem from "./Navitem";
import "./Navitems.css";

class Navitems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: {
        Home: [],
        Company: ["About", "Newsroom", "Careers"],
        Learn: ["Blog", "Guides", "Help Center"],
        Legal: ["Privacy Policy", "Terms of Use", "Trademarks"],
      },
    };
  }

  render() {
    let elements = Object.keys(this.state.elements).map((ele) => {
      return <Navitem element={ele} arr={this.state.elements[ele]}></Navitem>;
    });
    return <ul className="nav-items d-flex flex-column ">{elements}</ul>;
  }
}

export default Navitems;
