(this.webpackJsonpcovidstat=this.webpackJsonpcovidstat||[]).push([[0],{102:function(e,t){},106:function(e,t,a){},13:function(e,t,a){e.exports={container:"Cards_container__3iS_i",card:"Cards_card__rG9kq",confirmed:"Cards_confirmed__3Ji7_",active:"Cards_active__2dusk",recovered:"Cards_recovered__1lJhQ",deaths:"Cards_deaths__2xYgX"}},200:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),r=a(6),n=a.n(r),o=(a(95),a(25)),i=a(26),c=a(28),d=a(27),m=(a(96),a(233)),_=a(234),u=a(235),h=a(226),g=a(230),f=a(231),p=a(232),v=a(13),E=a.n(v),b=a(19),y=a.n(b),w=a(40),x=a.n(w);var C=function(e){return console.log(e),console.log(e.statewise),console.log(e.selectedstate),void 0===e.statewise||void 0===e.statewis.confirmed?null:l.a.createElement("div",{className:E.a.container},l.a.createElement(h.a,{container:!0,spacing:4,justify:"center"},l.a.createElement(h.a,{style:{borderRadius:"50px",backgroundColor:"#ede7f6"},item:!0,component:g.a,xs:12,md:2,className:x()(E.a.card,E.a.confirmed)},l.a.createElement(f.a,null,l.a.createElement(p.a,{gutterBottom:!0},"Confirmed"),l.a.createElement(p.a,{variant:"h5"},l.a.createElement(y.a,{style:{color:"slateblue"},start:0,end:parseInt(e.statewise[0].confirmed),duration:2.5,seperator:","})),l.a.createElement(p.a,null,(new Date).toGMTString().slice(5,17)),l.a.createElement(p.a,{gutterBottom:!0},"Confirmed Today"),l.a.createElement(p.a,{variant:"body2"},l.a.createElement(y.a,{style:{color:"slateblue"},start:0,end:parseInt(e.statewise[0].deltaconfirmed),duration:2.5,seperator:","})))),l.a.createElement(h.a,{style:{borderRadius:"50px",backgroundColor:"#e3f2fd"},item:!0,component:g.a,xs:12,md:2,className:x()(E.a.card,E.a.active)},l.a.createElement(f.a,null,l.a.createElement(p.a,{gutterBottom:!0},"Active"),l.a.createElement(p.a,{variant:"h5"},l.a.createElement(y.a,{style:{color:"#42a5f5"},start:0,end:parseInt(e.statewise[0].active),duration:2.5,seperator:","})),l.a.createElement(p.a,null,(new Date).toGMTString().slice(5,17)))),l.a.createElement(h.a,{style:{borderRadius:"50px",backgroundColor:"#e8f5e9"},item:!0,component:g.a,xs:12,md:2,className:x()(E.a.card,E.a.recovered)},l.a.createElement(f.a,null,l.a.createElement(p.a,{gutterBottom:!0},"Recovered"),l.a.createElement(p.a,{variant:"h5"},l.a.createElement(y.a,{style:{color:"#00e658"},start:0,end:parseInt(e.statewise[0].recovered),duration:2.5,seperator:","})),l.a.createElement(p.a,null,(new Date).toGMTString().slice(5,17)),l.a.createElement(p.a,{gutterBottom:!0},"Recovered Today"),l.a.createElement(p.a,{variant:"body2"},l.a.createElement(y.a,{style:{color:"#00e658"},start:0,end:parseInt(e.statewise[0].deltarecovered),duration:2.5,seperator:","})))),l.a.createElement(h.a,{style:{borderRadius:"50px",backgroundColor:"#ffebee"},item:!0,component:g.a,xs:12,md:2,className:x()(E.a.card,E.a.deaths)},l.a.createElement(f.a,null,l.a.createElement(p.a,{gutterBottom:!0},"Deaths"),l.a.createElement(p.a,{variant:"h5"},l.a.createElement(y.a,{style:{color:"#f44336"},start:0,end:parseInt(e.statewise[0].deaths),duration:2.5,seperator:","})),l.a.createElement(p.a,null,(new Date).toGMTString().slice(5,17)),l.a.createElement(p.a,{gutterBottom:!0},"Died Today"),l.a.createElement(p.a,{variant:"body2"},l.a.createElement(y.a,{style:{color:"#f44336"},start:0,end:parseInt(e.statewise[0].deltadeaths),duration:2.5,seperator:","}))))))},k=(a(102),a(61)),S=a.n(k);a(106);var M=function(e){console.log(e.alldata.cases_time_series[e.alldata.cases_time_series.length-1].date);var t=[{theme:"fusion",name:"Total Confirmed",data:[e.alldata.cases_time_series[e.alldata.cases_time_series.length-1].totalconfirmed,e.alldata.cases_time_series[e.alldata.cases_time_series.length-12].totalconfirmed,e.alldata.cases_time_series[e.alldata.cases_time_series.length-20].totalconfirmed,e.alldata.cases_time_series[e.alldata.cases_time_series.length-28].totalconfirmed,e.alldata.cases_time_series[e.alldata.cases_time_series.length-35].totalconfirmed]},{name:"Total Recovered",data:[e.alldata.cases_time_series[e.alldata.cases_time_series.length-1].totalrecovered,e.alldata.cases_time_series[e.alldata.cases_time_series.length-12].totalrecovered,e.alldata.cases_time_series[e.alldata.cases_time_series.length-20].totalrecovered,e.alldata.cases_time_series[e.alldata.cases_time_series.length-28].totalrecovered,e.alldata.cases_time_series[e.alldata.cases_time_series.length-35].totalrecovered]},{name:"Total Deaths",data:[e.alldata.cases_time_series[e.alldata.cases_time_series.length-1].totaldeceased,e.alldata.cases_time_series[e.alldata.cases_time_series.length-12].totaldeceased,e.alldata.cases_time_series[e.alldata.cases_time_series.length-20].totaldeceased,e.alldata.cases_time_series[e.alldata.cases_time_series.length-28].totaldeceased,e.alldata.cases_time_series[e.alldata.cases_time_series.length-35].totaldeceased]}],a={chart:{},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:[(new Date).toGMTString().slice(5,12),e.alldata.cases_time_series[e.alldata.cases_time_series.length-12].date,e.alldata.cases_time_series[e.alldata.cases_time_series.length-20].date,e.alldata.cases_time_series[e.alldata.cases_time_series.length-28].date,e.alldata.cases_time_series[e.alldata.cases_time_series.length-35].date]},tooltip:{x:{format:"dd MMM"}}};return l.a.createElement("div",{style:{backgroundColor:"white",textAlign:"center"}},l.a.createElement("br",null),l.a.createElement("h2",{style:{fontWeight:"800"}},"All India Covid Stats Graphical Representation"),l.a.createElement("br",null),l.a.createElement("div",{className:"Apex"},l.a.createElement(S.a,{options:a,series:t,type:"area",height:250,style:{width:"60%"}}),l.a.createElement(S.a,{options:a,series:t,type:"bar",height:250,style:{width:"60%"}})))},T=a(83),I={labels:["January","February","March","April","May"],datasets:[{label:"Rainfall",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80,81,56]}]},B=(l.a.Component,function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).statedata={},e.state={total:[],statewis:[],selectedstate:void 0,allstates:[],statelist:[],statedata:void 0},e.handleChange=function(t){e.setState((function(e){return{selectedstate:t.target.value}})),e.setState((function(e){return console.log(e.selectedstate),{statedata:e.allstates.statewise.filter((function(t){if(t.state==e.selectedstate)return!0}))}})),console.log(e.state.selectedstate),e.setState()},e.loopstates=function(){},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){console.log(t);e.setState({total:t.cases_time_series[t.cases_time_series.length-1]}),e.setState({statewis:t.statewise[0]}),e.setState({allstates:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){console.log(this.state.selectedstate),console.log(this.state.statewis),console.log(this.state.statedata),console.log(this.state.allstates);var e=this.state,t=(e.total,e.statewis,e.allstates,this.state.statewis),a=(t.active,t.confirmed);t.deaths,t.deltaconfirmed,t.deltadeaths,t.deltarecovered,t.lastupdatedtime,t.recovered,t.state,t.statecode,t.statenotes,parseInt(a);return void 0===this.state.allstates.statewise?"Loading...":l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"state-selector",style:{marginBottom:"5vh",padding:"2vh",backgroundColor:"#18ffff",position:"sticky",top:"0px"}},l.a.createElement("h2",{style:{textAlign:"center",backgroundColor:"#18ffff",fontWeight:"800"}},"Select State"),l.a.createElement(m.a,{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#18ffff",marginBottom:"2vh"}},l.a.createElement(_.a,{style:{width:"50vw",textAlign:"center",borderBottom:"none",borderRadius:"50px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#eeeeee"},labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.selectedstate,onChange:this.handleChange},this.state.allstates.statewise.map((function(e,t){return l.a.createElement(u.a,{style:{padding:"1vh"},value:e.state},e.state)}))))),l.a.createElement(C,{statewis:this.state.statewis,selectedstate:this.state.selectedstate,statewise:this.state.statedata}),l.a.createElement(M,{statewise:this.state.statedata,alldata:this.state.allstates,statewis:this.state.statewis}))}}]),a}(s.Component));s.Component;n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a(200)},95:function(e,t,a){},96:function(e,t,a){e.exports={container:"App_container__3chMn","state-selector":"App_state-selector__2TdUg"}}},[[90,1,2]]]);
//# sourceMappingURL=main.0cf65918.chunk.js.map