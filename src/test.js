import React, { Component } from 'react'

export class Testing extends Component {
    state={
        total : [],
        statewise: []
    }

    componentDidMount(){
        const url= "https://api.covid19india.org/data.json"
        fetch(url).then(response=> response.json()).then(data=>{
            console.log(data)
            this.setState({total: data.statewise[0]})
            this.setState({statewise:data.statewise})
            // this.setState({cases_time_series : cases_time_series[cases_time_series.length-1]})
            // console.log(this.state.time.cases_time_series[this.state.time.cases_time_series.length-2])
            console.log(this.state.total)
            console.log(this.state.statewise)
        })
    }
    render() {
        return (
            <div>
                <h1>Hero</h1>
            </div>
        )
    }
}

export default Testing
