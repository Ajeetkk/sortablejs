import React, { Component } from "react";
import ReactClock from "react-clock-app";
import Card from "./Card";
import { PrimaryButton } from "office-ui-fabric-react";
import EngineImg from "../images/engine-1.png";
import SidebarCard from "./SidebarCard";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AboutTitle: "About Engine",
      AboutSubTitle: "Engine Portal",
      AboutDesc:
        "Red Alarm from engine governor ECU: Linit value for fuel temperature exceeded.",
      ReadMore: "Read More",
      EngineTitle: "Engine Details",
      EngineSubTitle: "09290990"
    };
  }

  render() {
    var cShowHide = localStorage.getItem("clockShowHide");
    // static contextType = ClockCotext;
    // let ctx = this.context;
    return (
      <>
        {cShowHide === "1" ? (
          <Card>
            <ReactClock />
          </Card>
        ) : (
          ""
        )}

        <Card
          dataFromTitle={this.state.AboutTitle}
          dataFromSubTitle={this.state.AboutSubTitle}
          cardIcon="fas fa-calendar-week fa-2x text-gray-300"
          dataID="1"
        />

        <Card
          dataFromTitle={this.state.EngineTitle}
          dataFromSubTitle={this.state.EngineSubTitle}
          cardIcon="fas fa-toolbox fa-2x text-gray-300"
          dataID="2"
        />
        <Card
          dataFromTitle={this.state.AboutTitle}
          dataFromSubTitle={this.state.AboutSubTitle}
          cardIcon="fas fa-calendar-week fa-2x text-gray-300"
          dataID="3"
        />
        <Card
          dataFromTitle={this.state.EngineTitle}
          dataFromSubTitle={this.state.EngineSubTitle}
          cardIcon="fas fa-toolbox fa-2x text-gray-300"
          dataID="4"
        />

        <SidebarCard
          name="About Engine"
          value="20102030"
          icons="fas fa-cogs fa-3x text-gray-300"
          dataID="5"
        >
          <div className="expand-content-show">
            <div className="float-left">
              <img src={EngineImg} className="img-responsive" alt="" />
            </div>
            <div className="float-left">
              <br />
              <h4>{this.state.AboutTitle}</h4>
              <p>{this.state.AboutDesc}</p>
              <PrimaryButton
                data-automation-id="test"
                text={this.state.ReadMore}
                onClick={this._alertClicked}
                allowDisabledFocus={true}
              />
            </div>
          </div>
        </SidebarCard>
        <SidebarCard
          name="Engine Information"
          value="23482340"
          icons="fas fa-users-cog fa-3x text-gray-300"
          dataID="6"
        >
          <div className="expand-content-show">
            <div className="float-left">
              <br />
              <h4>{this.state.EngineTitle}</h4>
              <p>{this.state.AboutDesc}</p>
              <PrimaryButton
                data-automation-id="test"
                text={this.state.ReadMore}
                onClick={this._alertClicked}
                allowDisabledFocus={true}
              />
            </div>
            <div className="float-left">
              <img src={EngineImg} className="img-responsive" alt="" />
            </div>
          </div>
        </SidebarCard>
      </>
    );
  }
}

export default Widget;
