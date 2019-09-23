import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import "./App.css";
import "./Css/All.css";
import "./Css/headerComponent.css";
import "./dragula.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Packery from "./Pages/Packery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper" className="content">
          <Navbar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="container-fluid">
              <Header />
              <div className="row">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about-us" component={AboutUs} />
                  <Route path="/packery" component={Packery} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
