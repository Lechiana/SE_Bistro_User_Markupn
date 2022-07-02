import React from "react";

import { Chart, Series } from "devextreme-react/chart";
import { dataSource } from "./data/DataBarChart";

class BarChart extends React.Component {
  render() {
    return (
      <div className="widthBarChart bg-neutral-focus">
        <Chart className="p-5" dataSource={dataSource}>
          <Series
            valueField="oranges"
            argumentField="day"
            name="ยอดขาย"
            type="bar"
            color="#d926a9"
          />
        </Chart>
      </div>
    );
  }
}

export default BarChart;
