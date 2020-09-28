import React from "react";
import VisibilitySensor from "react-visibility-sensor";

function Card(props) {
  let width = (props.filledSpots * 100) / props.totSpots;
  let remSpots = props.totSpots - props.filledSpots;
  let features = props.features.map((feat) => {
    console.log(props.addAtms);
    return (
      <li style={{ padding: "5px 0 5px 0" }}>
        <span color={props.darkCol}>&#x2714;{feat}</span>
      </li>
    );
  });
  return (
    <div className="card rounded" style={{ width: "100%" }}>
      <div
        style={{
          height: "40vh",

          backgroundColor: props.color,
        }}
      >
        <h5
          style={{ marginTop: "20vh", letterSpacing: "5px" }}
          className="lead"
        >
          {props.cardName}
        </h5>
        <h1
          style={{
            fontWeight: "1000",
            color: props.perColor,
            letterSpacing: "5px",
          }}
        >
          {props.percentage}
        </h1>
        <p className="mt-3">
          <span
            className="rounded mr-3"
            style={{
              backgroundColor: props.darkCol,
              padding: "5px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            {props.cashBack}
          </span>
          <span style={{ opacity: "0.7" }}>cash back</span>
        </p>
      </div>
      <div style={{ hight: "15vh", padding: "20px 0 20px 0" }}>
        <div style={{ margin: "0 10px 0 10px" }}>
          <p>{remSpots} spots left</p>
          <div
            className="rounded"
            style={{
              width: "100%",
              height: "6px",

              backgroundColor: "#b2b2b2",
            }}
          >
            <div
              className="rounded"
              style={{
                width: `${width}%`,
                height: "6px",

                backgroundColor: "#00ab6b",
              }}
            ></div>
          </div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: props.perColor,
              color: "white",
              fontWeight: "bolder",
              fontSize: "23px",
              width: "90%",
              margin: "5%",
              padding: "10px",
            }}
            disabled={!props.active}
            className="btn btn-block btn-rounded"
          >
            Sign Up Now
          </button>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <h4
          style={{
            opacity: 0.7,
            letterSpacing: "10px",
            padding: "35px 0 15px 35px",
            borderTop: "solid 0.5px black",
          }}
        >
          INCLUDES
        </h4>
        <ul>{features}</ul>
        <p style={{ padding: "10px", opacity: "0.7", fontSize: "14px" }}>
          Fund your account with a minimum opening deposit of {props.minDep}
          {props.addAtms
            ? `". ${props.addAtms} additional free ATM withdrawls per month from out of network ATMs"`
            : " "}
        </p>
      </div>
      <div
        style={{
          height: "20vh",
          backgroundColor: props.bottomColor,
          fontSize: "20px",
          fontWeight: "bold",
          padding: "20px 0 5px 0",
        }}
      >
        <p>
          <del>{props.memFee} Membership Fee</del>
        </p>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "24px",
            color: props.darkCol,
          }}
        >
          {props.bottomLine}
        </p>
      </div>
    </div>
  );
}

export default Card;
