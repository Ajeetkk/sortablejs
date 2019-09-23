import React from "react";

function PackeryPoc() {
  return (
    <div className="App">
      <div className="grid">
        <div className="grid-sizer" />
        <div className="grid-item" style={{ height: "450px" }}>
          <div className="title-container">
            <div className="title">
              <h4>ABC Company</h4>
              <h6>Top 5 most successful offers</h6>
            </div>
          </div>
        </div>

        <div className="grid-item" style={{ height: "750px" }}>
          <div className="title-container">
            <div className="title">
              <h4>Offer opportunity</h4>
              <h6>Top 10 CTR offers that are in bottom 50% of usage</h6>
            </div>
          </div>
        </div>

        <div className="grid-item" style={{ height: "750px" }}>
          <div className="title-container">
            <div className="title">
              <h4>Offer risk</h4>
              <h6>Offers in top 50% of usage that have lowest CTR</h6>
            </div>
          </div>
        </div>

        <div className="grid-item" style={{ height: "450px" }}>
          <div className="title-container">
            <div className="title">
              <h4>Best performing offers by position in email</h4>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="title-container">
            <div className="title">
              <h4>Most frequently swapped offers</h4>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="title-container">
            <div className="title">
              <h4>Top 10 most used offers</h4>
              <h6 />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="title-container">
            <div className="title">
              <h4>Most direct offers for driving direct repsonse</h4>
              <h6>Top 5 most successful offers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackeryPoc;
