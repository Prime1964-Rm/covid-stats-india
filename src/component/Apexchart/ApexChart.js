import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "State Wise Covid stats",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Stats",
      "yAxisName": "Number of People",
      "theme": "fusion"
      
    },
    "data": [
      {
        "label": "Venezuela",
        "value": "290"
      },
      {
        "label": "Saudi",
        "value": "260"
      },
      {
        "label": "Canada",
        "value": "180"
      },
      {
        "label": "Iran",
        "value": "140"
      },
      {
        "label": "Russia",
        "value": "115"
      },
      {
        "label": "UAE",
        "value": "100"
      },
      {
        "label": "US",
        "value": "30"
      },
      {
        "label": "China",
        "value": "30"
      }
    ]
  },
};

class ApexChart extends Component {
  render (props) {
      console.log(this.props)
    return <ReactFC statewis={this.props.statewis} {...chartConfigs} />;
  }
}

export default ApexChart