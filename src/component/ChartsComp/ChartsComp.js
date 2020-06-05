import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { yellow } from '@material-ui/core/colors';

class ChartComp extends Component{
state={
    chartData:{
        
    }
}
render(){
    return(
        <div className="chart">
            <Bar
                data={
                    labels=['Confirmed','Active','Recovered','Deaths'],
                datasets=[
                     {
                        label:'Number of People',
                        data:[
                         617594,
                         181045,
                         153060,
                         105162   
                            ]
                    },
                    backgrounfColor=[
                        '#ef5350','#4caf50','#eeff41','#0277bd'
                    ]
                ]
                }
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}


}

export default ChartComp;