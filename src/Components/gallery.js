import React, { Component } from "react";
// import dragula from "dragula";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = [
          data.results.map(pic => {
            return (
              <>
                <img src={pic.picture.medium} key={pic.picture.medium} alt="" />
              </>
            );
          })
        ];
        this.setState({ pictures: pictures });
      })
      .catch(function(err) {
        console.log("Fetch Error:", err);
      });
  }
  render() {
    return (
      <section
        className="gallery-section"
        id="element"
        onDragStart={this.preventDragHandler}
      >
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col">
                <div className="desc">
                  <h3>Photo Gallery</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry.
                  </p>
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {this.state.pictures}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
