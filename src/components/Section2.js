import React from "react";
import Card from "./Card";

class Section2 extends React.Component {
  constructor() {
    super();
    this.state = {
      card1: {
        color: "#eefde2",
        features: [
          "Charcoal Black Metal Card",
          "2.15% Bonus Rate Checking ACcount",
          "5% Cash back on brand you love",
          "Free Cash Withdrawls",
          "Phone & Chat Support",
        ],
        memFee: "11.99/m",
        minOpeningDep: "$1000",
        card: "metal",
        percentage: "2.15%",
        darkCol: "#00a86b",
        cashBack: "5%",
        perColor: "#4343ee",
        bottomLine: "Free for 6 months",
        active: true,
        addAtms: 3,
        bottomColor: "#e2f6e3",
        totSpots: 2500,
        filledSpots: 2223,
      },
      card2: {
        color: "#f7f7fb",
        features: [
          "Free Debit Card",
          "1.65% Bonus Rate Checking ACcount",
          "4% Cash back on brand you love",
          "Free Cash Withdrawls",
          "Phone & Chat Support",
        ],
        memFee: "6.99/m",
        minOpeningDep: "$500",
        card: "PREMIUM",
        percentage: "1.65%",
        darkCol: "#b2b2b2",
        cashBack: "5%",
        perColor: "#000",
        bottomLine: "Coming Soon",
        active: false,
        addAtms: 2,
        bottomColor: "#f7f7fb",
        totSpots: 2000,
        filledSpots: 0,
      },
      card3: {
        color: "#f7f7fb",
        features: [
          "Free Debit Card",
          "1.15% Bonus Rate Checking ACcount",
          "3% Cash back on brand you love",
          "Free Cash Withdrawls",
          "Phone & Chat Support",
        ],
        memFee: "No",
        minOpeningDep: "0",
        card: "BASIC",
        percentage: "1.15%",
        darkCol: "#b2b2b2",
        cashBack: "3%",
        perColor: "#000",
        bottomLine: "Free Forever",
        active: false,
        addAtms: 0,
        bottomColor: "#f7f7fb",
        totSpots: 2000,
        filledSpots: 0,
      },
    };
  }
  render() {
    return (
      <div className="container" style={{ position: "relative", zIndex: "5" }}>
        <div classsName="row">
          <div className="col-12">
            <h1 style={{ fontWeight: "bolder" }}>SIGN UP EARLY TO SAVE MORE</h1>
            <p className="lead">
              Anim culpa commodo eu cillum ad eu commodo dolor est dolore ad
              consequat proident aliqua.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Card
              color={this.state.card1.color}
              cardName={this.state.card1.card}
              percentage={this.state.card1.percentage}
              darkCol={this.state.card1.darkCol}
              cashBack={this.state.card1.cashBack}
              perColor={this.state.card1.perColor}
              active={this.state.card1.active}
              features={this.state.card1.features}
              addAtms={this.state.card1.addAtms}
              minDep={this.state.card1.minOpeningDep}
              memFee={this.state.card1.memFee}
              bottomColor={this.state.card1.bottomColor}
              bottomLine={this.state.card1.bottomLine}
              totSpots={this.state.card1.totSpots}
              filledSpots={this.state.card1.filledSpots}
            />
          </div>
          <div className="col-md-4">
            <Card
              color={this.state.card2.color}
              cardName={this.state.card2.card}
              percentage={this.state.card2.percentage}
              darkCol={this.state.card2.darkCol}
              cashBack={this.state.card2.cashBack}
              perColor={this.state.card2.perColor}
              active={this.state.card2.active}
              features={this.state.card2.features}
              addAtms={this.state.card2.addAtms}
              minDep={this.state.card2.minOpeningDep}
              memFee={this.state.card2.memFee}
              bottomColor={this.state.card2.bottomColor}
              bottomLine={this.state.card2.bottomLine}
              totSpots={this.state.card2.totSpots}
              filledSpots={this.state.card2.filledSpots}
            />
          </div>
          <div className="col-md-4">
            <Card
              color={this.state.card3.color}
              cardName={this.state.card3.card}
              percentage={this.state.card3.percentage}
              darkCol={this.state.card3.darkCol}
              cashBack={this.state.card3.cashBack}
              perColor={this.state.card3.perColor}
              active={this.state.card3.active}
              features={this.state.card3.features}
              addAtms={this.state.card3.addAtms}
              minDep={this.state.card3.minOpeningDep}
              memFee={this.state.card3.memFee}
              bottomColor={this.state.card3.bottomColor}
              bottomLine={this.state.card3.bottomLine}
              totSpots={this.state.card2.totSpots}
              filledSpots={this.state.card2.filledSpots}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
