import React, { Component } from 'react'
import { Line, Bar,Pie } from 'react-chartjs-2'
import styles from './Chart.module.css'
import 'chartjs-plugin-datalabels';

    const Charts=(props)=>{
        console.log(props)
        if(props.statewise===undefined){
            return null;
        }
   console.log(typeof(props.statewise[0].confirmed))
    let BarChart =(
            props.statewise.length?<Bar 
        data={{ 
                                 //dailyupdates.map(({lastupdatedtime})=> lastupdatedtime)
            datasets: [{
                data: props.statewise[0].confirmed,
                label: 'confirmed',
                borderColor: 'slateblue',
                backgroundColor:'#d1c4e9',
                fill: true,
            },{
                data: props.statewise[0].active,
                label: 'Active',
                borderColor: '#42a5f5',
                backgroundColor:'#90caf9',
                fill: true,

            },{
                data: props.statewise[0].recovered,
                label: 'Recovered',
                borderColor: '#00e658',
                backgroundColor:'#69f0ae',
                fill: true,
            },
            {
                data: props.statewise[0].deaths,
                label: 'Deaths',
                borderColor: '#f44336',
                backgroundColor: '#ff8a80',
                fill: true,
            }
        ],
        }}
        />: null
    );
    
        return (
            <div className={styles.container}>
               {BarChart}
            </div>
        )
    }


export default Charts