import React, { Component, Fragment } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import packery from "packery";
import Draggabilly from "draggabilly";

class Demo extends Component {
  componentDidMount() {
    // external js: packery.pkgd.js
    $(document).ready(function() {
      $grid = $(".grid").packery({
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 5
      });

      // get item elements, jQuery-ify them
      var $itemElems = $($grid.packery("getItemElements"));
      // make item elements draggable
      $itemElems.draggable().resizable();
      // bind Draggable events to Packery
      $grid.packery("bindUIDraggableEvents", $itemElems);

      // handle resizing
      var resizeTimeout;
      $itemElems.on("resize", function(event, ui) {
        // debounce
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(function() {
          $grid.packery("fit", ui.element[0]);
        }, 100);
      });

      var counter = 0;
      var isDragging = false;
      $grid.on("mousedown", ".resize", function(event) {
        $(window).mousemove(function() {
          isDragging = true;
          $(window).unbind("mousemove");
        });
        $grid.packery("layout");
      });
      $grid.on("mouseup", ".resize", function(event) {
        var wasDragging = isDragging;
        isDragging = false;
        $(window).unbind("mousemove");
        if (!wasDragging) {
          var $item = $(event.currentTarget)
            .parent()
            .parent()
            .parent();
          if (
            !$item.is(".grid-item--large") &&
            !$item.is(".grid-item--medium") &&
            !$item.is(".grid-item--full")
          ) {
            $item.addClass("grid-item--medium");
            $grid.packery("fit", event.currentTarget);
          }

          // change size of item by toggling no class
          else if ($item.is(".grid-item--full")) {
            $item.removeClass("grid-item--full");
            $grid.packery("shiftLayout");
          }

          // change size of item by toggling large class
          else if ($item.is(".grid-item--medium")) {
            $item.removeClass("grid-item--medium");
            $item.addClass("grid-item--large");
            $grid.packery("fit", event.currentTarget);
          }

          // change size of item by toggling full class
          else if ($item.is(".grid-item--large")) {
            $item.removeClass("grid-item--large");
            $item.addClass("grid-item--full");
            $grid.packery("fit", event.currentTarget);
          }
        }
      });
    });

    // make all grid-items draggable
    $grid.find(".grid-item").each(function(i, gridItem) {
      var draggie = new Draggabilly(gridItem);
      // bind drag events to Packery
      $grid.packery("bindDraggabillyEvents", draggie);
    });

    function orderItems() {
      var itemElems = $grid.packery("getItemElements");
      $(itemElems).each(function(i, itemElem) {
        $(itemElem)
          .find("h6:first:child")
          .html(i + 1);
      });
    }

    $grid.on("layoutComplete", orderItems);
    $grid.on("dragItemPositioned", orderItems);

    $grid.on("dragItemPositioned", function(event, draggedItem) {
      $grid.packery("layout");
    });
  }

  render() {
    return (
      <Fragment>
        <div className="head">
          <h1>eCRM asset usage and performance</h1>
          <h6>
            Review how assets and offers are being used in the system. Identify
            which offers could be used more effectively and those that should be
            retired.
          </h6>
        </div>
        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item" style={{ height: "450px" }}>
            <div className="title-container">
              <div className="title">
                <h4>Most direct offers for driving direct repsonse</h4>
                <h6>Top 5 most successful offers</h6>
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item" style={{ height: "450px" }}>
            <div className="title-container">
              <div className="title">
                <h4>Offer opportunity</h4>
                <h6>Top 10 CTR offers that are in bottom 50% of usage</h6>
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item" style={{ height: "750px" }}>
            <div className="title-container">
              <div className="title">
                <h4>Offer risk</h4>
                <h6>Offers in top 50% of usage that have lowest CTR</h6>
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item" style={{ height: "450px" }}>
            <div className="title-container">
              <div className="title">
                <h4>Best performing offers by position in email</h4>
                <h6 />
                <h6 />
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="title-container">
              <div className="title">
                <h4>Most frequently swapped offers</h4>
                <h6 />
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="title-container">
              <div className="title">
                <h4>Top 10 most used offers</h4>
                <h6 />
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="title-container">
              <div className="title">
                <h4>Most direct offers for driving direct repsonse</h4>
                <h6>Top 5 most successful offers</h6>
              </div>
              <div className="options">
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">file_download</i>
                </button>
                <button type="button" className="btn btn-default resize">
                  <i className="material-icons">fullscreen</i>
                </button>
                <button type="button" className="btn btn-default">
                  <i className="fa material-icons">more_horiz</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Demo;
