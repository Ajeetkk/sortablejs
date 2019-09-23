import React, { Component } from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import EngineImg from "../images/engine-1.png";
import SidebarCard from "../Components/SidebarCard";
import Chart from "../Components/Chart";
import Gallery from "../Components/gallery";

class AboutEngine extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="card border-left-warning shadow page-space">
          <h3>About Us</h3>
          <div>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
        <Gallery />
        <Gallery />
        <SidebarCard
          name="About Engine"
          value="20102030"
          icons="fas fa-cogs fa-3x text-gray-300"
        >
          <div className="expand-content-show">
            <div className="float-left">
              <img src={EngineImg} className="img-responsive" />
            </div>
            <div className="float-left">
              <br />
              <h4>Engine Information</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <PrimaryButton
                data-automation-id="test"
                text="Read More"
                onClick={this._alertClicked}
                allowDisabledFocus={true}
              />
            </div>
          </div>
        </SidebarCard>

        <SidebarCard
          name="Engine Service Details"
          value="23482340"
          icons="fas fa-users-cog fa-3x text-gray-300"
        >
          <div className="expand-content-show">
            <div className="float-left">
              <br />
              <h4>Engine Service Details</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <PrimaryButton
                data-automation-id="test"
                text="Read More"
                onClick={this._alertClicked}
                allowDisabledFocus={true}
              />
            </div>
            <div className="float-left">
              <img src={EngineImg} className="img-responsive" alt="" />
            </div>
          </div>
        </SidebarCard>

        <Chart />
      </div>
    );
  }
}

export default AboutEngine;
