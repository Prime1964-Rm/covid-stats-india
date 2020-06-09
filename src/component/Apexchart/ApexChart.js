import React from "react";
import ReactApexChart from 'react-apexcharts';
import './ApexChart.scss'

function Graph(props){
    console.log(props.alldata.cases_time_series[props.alldata.cases_time_series.length-1].date)
  
const series= [{
        theme: 'fusion',
        name: 'Total Confirmed',
        data: [
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-1].totalconfirmed,
           
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-12].totalconfirmed,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-20].totalconfirmed,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-28].totalconfirmed,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-35].totalconfirmed,
        ]
      }, {
        name: 'Total Recovered',
        data: [
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-1].totalrecovered,
           
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-12].totalrecovered,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-20].totalrecovered,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-28].totalrecovered,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-35].totalrecovered,
        ] 
      },{
        name: 'Total Deaths',
        data: [
          props.alldata.cases_time_series[props.alldata.cases_time_series.length-1].totaldeceased,
            
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-12].totaldeceased,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-20].totaldeceased,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-28].totaldeceased,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-35].totaldeceased,
        ]
      }
    ];
      const options={  
      chart: {
    
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        
      },
      xaxis: {
        type: 'datetime',
        categories: [
            new Date().toGMTString().slice(5,12),
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-12].date,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-20].date,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-28].date,
            props.alldata.cases_time_series[props.alldata.cases_time_series.length-35].date,
        ]
      },
      tooltip: {
        x: {
          format: 'dd MMM',
          
        },
      }
    }

      return(
          <div style={{backgroundColor: "white", textAlign: "center"}}>
              <br/>
              <h2 style={{fontWeight:'800'}}>All India Covid Stats Graphical Representation</h2>
              <br />
              <div className="Apex">
              <ReactApexChart  options={options} series={series} type="area" height={250} style={{width:"45%",padding:"1vw",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} />              
              <ReactApexChart options={options} series={series} type="bar" height={250} style={{width:"45%",padding:"1vw",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} />
              </div>
          </div>
      )
}

export default Graph;