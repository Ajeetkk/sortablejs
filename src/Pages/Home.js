import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Dragula from "react-dragula";
// import dragula from "dragula";
// import Sortable from "sortablejs/modular/sortable.complete.esm.js";
import Sortable from "sortablejs";
import Sidebar from "../Components/Sidebar";
import Widget from "../Components/Widget";
// import ReactClock from "react-clock-app";
import Description from "../Components/Description";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "../App.css";
import "../Css/All.css";
import "../Css/headerComponent.css";
import "../Css/home.css";
import GalleryPage from "./GalleryPage";

class Home extends Component {
  // config
  componentDidMount() {
    Sortable.create(document.getElementById("left"), {
      group: {
        name: "shared"
        // pull: "clone", // To clone: set pull to 'clone'
        // put: true // Do not allow items to be put into this list
      },
      // sort: false, // To disable sorting: set sort to false
      animation: 350,
      dataIdAttr: "data-id",
      // draggable: ".item",
      store: {
        /**
         * Get the order of elements. Called once during initialization.
         * @param   {Sortable}  sortable
         * @returns {Array}
         */
        get: function(sortable) {
          var order = localStorage.getItem(sortable.options.group.name);

          console.log("Left Get = " + order);
          return order ? order.split("|") : [];
        },

        /**
         * Save the order of elements. Called onEnd (when the item is dropped).
         * @param {Sortable}  sortable
         */
        set: function(sortable) {
          var order = sortable.toArray();
          console.log("Left set = " + order);
          localStorage.setItem(sortable.options.group.name, order.join("|"));
        }
      },
      onEnd: function(/**Event*/ evt) {
        console.log(evt.item.dataset.id, "datasetID"); // element's new index within parent
        // var order = sortable.toArray();
        // $(".visuaplayoutCol02").attr(
        //   "value",
        //   $(".visuaplayoutCol01").attr("value") + "," + evt.item.dataset.id
        // );
      }
    });

    // sort: false
    Sortable.create(document.getElementById("right"), {
      group: {
        name: "shared"
        // pull: "clone" // To clone: set pull to 'clone'
      },
      animation: 350,
      dataIdAttr: "data-id",
      // draggable: ".item",

      store: {
        /**
         * Get the order of elements. Called once during initialization.
         * @param   {Sortable}  sortable
         * @returns {Array}
         */
        get: function(sortable) {
          var order = localStorage.getItem(sortable.options.group.name);
          console.log("right get = " + order);
          return order ? order.split("|") : [];
        },

        /**
         * Save the order of elements. Called onEnd (when the item is dropped).
         * @param {Sortable}  sortable
         */
        set: function(sortable) {
          var order = sortable.toArray();
          console.log("right set = " + order);

          localStorage.setItem(sortable.options.group.name, order.join("|"));
        }
      },
      onEnd: function(/**Event*/ evt) {
        console.log(evt.item.dataset.id, "datasetID"); // element's new index within parent
        // var order = sortable.toArray();
        // $(".visuaplayoutCol02").attr(
        //   "value",
        //   $(".visuaplayoutCol01").attr("value") + "," + evt.item.dataset.id
        // );
      },
      onAdd: function(/**Event*/ evt) {
        console.log(evt.item.dataset.id, " onAdd datasetID");
      }
    });
  }

  render() {
    // $(function() {
    //   alert("js");
    //   $("section").sortable({
    //     revert: true,
    //     placeholder: "card"
    //   });
    // });
    return (
      <div id="parentDiv">
        <div className="container1 col-xl-9" id="left">
          <Widget />
          {/* <ReactClock /> */}
          <Description />
        </div>
        <div className="container1 col-xl-3 side-panel" id="right">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Home;
