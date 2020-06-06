import React, { Component } from 'react'
// import Cards from './component/Cards/Cards'
// import Chart from './component/Chart/Chart'
import './App.module.css'
import FormControl from '@material-ui/core/FormControl';
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import Cards from './component/Cards/Cards';
import Charts from './component/Chart/Charts';
import ApexChart from './component/Apexchart/ApexChart';
import ChartComp from './component/ChartsComp/ChartsComp';




export class App extends Component {
  statedata = {}
  state = {
    total: [],
    statewis: [],                           // statewise data
    selectedstate: undefined,                      //selected Country
    allstates: [
       
    ],
    statelist:[

    ],
    statedata: undefined
  }

  //  async componentDidMount(){
  //     const fetchedData = await fetchData()
  //     this.setState({data:fetchedData})
  //   }

  // My way
  componentDidMount() {
    
    const url = "https://api.covid19india.org/data.json"
 
    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
      var index=0;
      this.setState({ total: data.cases_time_series[data.cases_time_series.length - 1] })
      this.setState({ statewis: data.statewise[0]})
      this.setState({allstates: data})
      
      let v = '';
      
      // this.setState({cases_time_series : cases_time_series[cases_time_series.length-1]})
      // console.log(this.state.time.cases_time_series[this.state.time.cases_time_series.length-2])
      
    }).catch(err=>{
      console.log(err)
    })


  }
  handleChange = (event) => {
//    this.state.selectedstate=event.target.value ;

    this.setState(function(state) {
      return {
        selectedstate: event.target.value
      };
    });

    this.setState(function(state) {
      console.log(state.selectedstate)
      return {statedata: state.allstates.statewise.filter(item=>{
        if(item.state==state.selectedstate){
          return true;
        }
      })};
    });
    console.log(this.state.selectedstate)

    this.setState()
  };

  loopstates =()=>{
    
  //  for(let a=0; a<38; a++){
  //   <h1>{this.state.allstates.statewise[a].state}</h1>
  // }
  
  
  }

 
  render(){
    console.log(this.state.selectedstate)
   console.log(this.state.statewis)
    console.log(this.state.statedata)   //undefined
    console.log(this.state.allstates)
    const { total, statewis, allstates} = this.state;
    const { active, confirmed, deaths, deltaconfirmed, deltadeaths, deltarecovered, lastupdatedtime, recovered, state, statecode, statenotes } = this.state.statewis;
    const confirmedInt = parseInt(confirmed);
        

    // if(isNaN(confirmedInt)){
    //   return null;
    // }
    if(this.state.allstates.statewise===undefined){
      return "Loading...";
    }
    
    // console.log(this.state.allstates.statewise[this.state.allstates.statewise.length].active)
    return (
      <div className="container">
        
         <Cards statewis={this.state.statewis} selectedstate={this.state.selectedstate} statewise={this.state.statedata}/>  
        <div className="state-selector" >
          <h2 style={{textAlign:"center"}}>Select State</h2>
        <FormControl style={{display:'flex',flexDirection:'column',alignItems:"center", marginBottom:"2vh"}}>
          {/* <InputLabel style={{}} id="demo-simple-select-label">State</InputLabel> */}
          <Select style={{width:"50vw"}} labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.selectedstate}
            onChange={this.handleChange}>
          
          {
             
             this.state.allstates.statewise.map(function(item, i){
              return <MenuItem value={item.state} >{item.state}</MenuItem>
            })
         
        }

          </Select>
          
        </FormControl> 
        </div>
        {/* <ChartComp/> */}
       <ApexChart statewise={this.state.statedata} alldata={this.state.allstates} statewis={this.state.statewis}/>
          {/* <Charts className="chart" alldata={this.state.allstates} statewise={this.state.statedata} />  */}
      </div>
    )
  }
}


export default App
