import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import sequoia from "../video/sequoia.jpg";
import polychain from "../video/polychain.png";
import consensys from "../video/consensys.png";
import Spring from "react-spring/renderprops";
function Section1() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: "5",
        marginTop: "20vh",
        width: "100%",
      }}
    >
      <h4
        className="col-12"
        style={{
          color: "Black",
          letterSpacing: "10px",
        }}
      >
        BACKED BY THE BEST
      </h4>
      <div className="container">
        <div className="row" style={{}}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className="col-md-4 mt-5 "
                style={{
                  height: "30vh",

                  opacity: isVisible ? 1 : 0,
                  transition: " 0.5s ease-in",
                }}
              >
                <img src={sequoia} className="img-fluid" />
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className="col-md-4 mt-5 "
                style={{
                  height: "30vh",

                  opacity: isVisible ? 1 : 0,
                  transition: " 0.5s ease-in",
                }}
              >
                <img src={polychain} className="img-fluid" />
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className="col-md-4 mt-3 "
                style={{
                  height: "25vh",

                  opacity: isVisible ? 1 : 0,
                  transition: " 0.5s ease-in",
                }}
              >
                <img src={consensys} className="img-fluid" />
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: "10vh", marginBottom: "10vh" }}
      >
        <div className="row">
          <div
            className="col-5 "
            className=""
            style={{
              height: "35vh",
              width: "35vw",

              backgroundColor: "black",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "12em",
              }}
              className="mt-5"
            >
              2.15%
            </p>
            <p style={{ color: "white", marginTop: "10vh" }}>
              Bonus rates on deposits
            </p>
          </div>
          <div className="col-6 offset-1">
            <h1 style={{ lineHeight: "50px" }}>
              Use Our Checking Account To Acheive Your Financial Goals
            </h1>
            <p style={{ lineHeight: "30px" }}>
              Velit nulla fugiat aliqua sit non irure nisi officia laborum duis.
              Adipisicing sit laboris consequat mollit irure enim incididunt
              sunt officia nulla labore excepteur. Consequat eiusmod aliquip
              irure excepteur laborum et laboris occaecat irure laborum. Sunt
              est cupidatat commodo cupidatat.Esse ipsum laboris incididunt
              labore aliquip sit sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
