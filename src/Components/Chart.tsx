import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component<{}, {}> {
  public render() {
    const linedata = {
      labels: [
        "Voyager1",
        "Voyager2",
        "Voyager3",
        "Voyager4",
        "Voyager5",
        "Voyager6",
        "Voyager7",
        "Voyager8"
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [50, 10, 5, 2, 25, 30, 45, 100]
        }
      ]
    };

    return (
      <section className="Add_Widgets col-xl-12" id="element">
        <div className="card shadow">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Chart Details</h6>
          </div>

          <div className="card-body">
            <Line data={linedata} />
          </div>
        </div>
      </section>
    );
  }
}

export default Chart;
