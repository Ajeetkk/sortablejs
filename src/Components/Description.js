import React from "react";
import DescriptionCard from "./DescriptionCard";
import Chart from "./Chart";
import { PrimaryButton } from "office-ui-fabric-react";

function Description(props) {
  return (
    <>
      <DescriptionCard title="HIHI T-FUEL" subtitle="Description" dataID="7">
        <p>
          Red Alarm from engine governor ECU: Linit value for fuel temperature
          exceeded.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <h6>Corrective Action</h6>
        <ul style={{ marginBottom: "25px" }}>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
        </ul>

        <PrimaryButton
          data-automation-id="test"
          text="Read More"
          allowDisabledFocus={true}
        />
      </DescriptionCard>

      <DescriptionCard
        title="REVENUE SOURCES"
        subtitle="Description"
        dataID="8"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h6>Corrective Action</h6>
        <ul>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
          <li>Temperature Control</li>
        </ul>
      </DescriptionCard>
      <DescriptionCard title="REPORT STATUS" subtitle="Description" dataID="9">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h6>Corrective Action</h6>
        <ul>
          <li>Reduce power</li>
          <li>Check fuel</li>
          <li>Contact MTU Customer</li>
          <li>Temperature Control</li>
        </ul>
      </DescriptionCard>

      <Chart />
    </>
  );
}

export default Description;
