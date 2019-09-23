import React, { Component } from "react";

class DescriptionCard extends Component {
  constructor(props) {
    super(props);
    this.state = { categorie: "mb-4 col-xl-6 drag-disable", isActive: false };
  }

  handleRemovePost = () => {
    this.setState({ categorie: "hide-post" });
  };

  handleTogglePost = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <section
        className={this.state.categorie}
        id="element"
        data-id={this.props.dataID}
      >
        <div className="card shadow">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              {this.props.title}
            </h6>
            <div className="dropdown no-arrow">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                style={{ marginRight: "20px" }}
                aria-expanded="false"
              >
                <i className="fas fa-cog fa-lg fa-fw text-gray-400" />
              </a>
              <a
                href="#"
                onClick={this.handleTogglePost}
                style={{ marginRight: "20px" }}
              >
                <i className="fas fa-arrows-alt-v fa-lg text-gray-400" />
              </a>
              <a href="#" onClick={this.handleRemovePost}>
                <i className="fas fa-times fa-lg text-gray-400" />
              </a>

              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here{" "}
                </a>
              </div>
            </div>
          </div>

          <div
            className={
              this.state.isActive === false ? "card-body" : "hide-post"
            }
          >
            <h5>{this.props.subtitle}</h5>
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}
export default DescriptionCard;
