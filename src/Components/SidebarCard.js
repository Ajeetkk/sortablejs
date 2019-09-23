import React from "react";

function SidebarCard(props) {
  return (
    <section
      className="col-xl-6 col-md-12 mb-4 side-content item"
      id="element"
      data-id={props.dataID}
    >
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col-auto width-60">
              <img src={props.sideBarImg} className="img-responsive" alt="" />
            </div>
            <div className="col mr-2 width-40">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                {props.name}
                <i className={`${props.icons} float-right`} />
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.value}
              </div>
            </div>

            <div className="expand-content">
              {props.Title}
              {props.Description}
              {props.ReadMore}
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarCard;
