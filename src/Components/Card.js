import React from "react";

function Card(props) {
  return (
    <section
      className="col-xl-3 col-md-6 mb-4 card-layout item"
      id="element"
      data-id={props.dataID}
    >
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                {props.dataFromTitle}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.dataFromSubTitle}
              </div>
            </div>
            <div className="col-auto">
              <i className={props.cardIcon} />
            </div>
            <div className="expand-content">{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Card;
