import React, { Component, Fragment } from "react";
import DescriptionCard from "./DescriptionCard";
import SidebarCard from "./SidebarCard";
import { PrimaryButton } from "office-ui-fabric-react";
import AboutEngine from "../images/aboutengine.jpg";
import SerialNumber from "../images/serial.jpg";
import ServiceEngine from "../images/engine-services.jpg";
import SideBarImg from "../images/about-us.png";
import AboutImg from "../images/about-us-qualified.jpg";
import DataImg from "../images/Data-Quality.jpg";
import ContactImg from "../images/contactus.png";
import Gallery from "./gallery";

function Sidebar(props) {
  return (
    <>
      <h4 className="text-center mt-4 mb-3">Add Gallery</h4>
      <p style={{ textAlign: "center" }}>Drag and drop gallery</p>

      <Gallery />
      <SidebarCard
        name="About Engine"
        value="7449309"
        icons="far fa-address-card fa-2x text-gray-300"
        sideBarImg={SideBarImg}
        dataID="11"
      >
        <div className="expand-content-show">
          <div className="float-left">
            <img src={AboutEngine} className="img-responsive" alt="" />
          </div>
          <div className="float-left">
            <h4>About Engine</h4>
            Red Alarm from engine governor ECU: Linit value for fuel temperature
            exceeded.
            <br />
            <br />
            <PrimaryButton
              data-automation-id="test"
              text="Read More"
              allowDisabledFocus={true}
            />
          </div>
        </div>
      </SidebarCard>
      <SidebarCard
        name="Serial Number"
        value="76887809"
        icons="far fa-address-card fa-2x text-gray-300"
        sideBarImg={AboutImg}
        dataID="12"
      >
        <div className="expand-content-show">
          <div className="float-left">
            <h4>Serial number</h4>
            Red Alarm from engine governor ECU: Linit value for fuel temperature
            exceeded.
            <br />
            <br />
            <PrimaryButton
              data-automation-id="test"
              text="Read More"
              allowDisabledFocus={true}
            />
          </div>
          <div className="float-left">
            <img src={SerialNumber} className="img-responsive" alt="" />
          </div>
        </div>
      </SidebarCard>
      <SidebarCard
        name="Service Details"
        value="99 Days"
        icons="far fa-address-card fa-2x text-gray-300"
        sideBarImg={DataImg}
        dataID="13"
      >
        <div className="float-left">
          <h4>Service Details</h4>
          Red Alarm from engine governor ECU: Linit value for fuel temperature
          exceeded.
          <br />
          <br />
          <PrimaryButton
            data-automation-id="test"
            text="Read More"
            allowDisabledFocus={true}
          />
        </div>
        <div className="expand-content-show">
          <div className="float-left">
            <img src={ServiceEngine} className="img-responsive" alt="" />
          </div>
        </div>
      </SidebarCard>
      <SidebarCard
        name="Contact US"
        value="080 3333 3333"
        icons="far fa-address-card fa-2x text-gray-300"
        sideBarImg={ContactImg}
        dataID="14"
      >
        <div className="expand-content-show">
          <div className="float-left">
            <img src={ContactImg} className="img-responsive" alt="" />
          </div>
          <div className="float-left">
            <h4>Germany</h4>
            Red Alarm from engine governor ECU: Linit value for fuel temperature
            exceeded.
            <br />
            <br />
            <PrimaryButton
              data-automation-id="test"
              text="Read More"
              allowDisabledFocus={true}
            />
          </div>
        </div>
      </SidebarCard>

      <DescriptionCard title="LATEST UPDATES" subtitle="Today" dataID="15">
        <p>
          Red Alarm from engine governor ECU: Linit value for fuel temperature
          exceeded.
        </p>
        <h6>Corrective Action</h6>
        <ul>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
        </ul>
      </DescriptionCard>

      <DescriptionCard title="HIHI T-FUEL" subtitle="Description" dataID="16">
        <p>
          Red Alarm from engine governor ECU: Linit value for fuel temperature
          exceeded.
        </p>
        <h6>Corrective Action</h6>
        <ul>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
        </ul>
      </DescriptionCard>

      <DescriptionCard title="HIHI T-FUEL" subtitle="Description" dataID="17">
        <h6>Corrective Action</h6>
        <ul>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
        </ul>
      </DescriptionCard>
    </>
  );
}
export default Sidebar;
