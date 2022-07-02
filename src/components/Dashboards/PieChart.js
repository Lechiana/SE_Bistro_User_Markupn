import React from "react";
import PieChart, {
  Legend,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";
import { dataSource } from "./data/DataPieChart";
import "./style.css";

class pieChart extends React.Component {
  render() {
    return (
      <div className="widthPieChart bg-neutral-focus">
        <PieChart className="px-5" palette="Bright" dataSource={dataSource}>
          <Legend
            orientation="horizontal"
            itemTextPosition="right"
            horizontalAlignment="center"
            verticalAlignment="bottom"
            columnCount={4}
          />

          <Series argumentField="country" valueField="medals">
            <Label
              visible={true}
              position="columns"
              customizeText={customizeText}
            >
              <Font size={20} />
              <Connector visible={true} width={1} />
            </Label>
          </Series>
        </PieChart>
      </div>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default pieChart;
