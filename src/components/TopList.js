import React from "react";
import Chart from "./Chart";

class TopList extends React.Component{
  render(){
    if(!this.props.entry) return null;
    const topList = this.props.entry.map((entry, index) => {
      return(
        <Chart key={index} chart={entry}></Chart>
      )
    })
    return <React.Fragment>
      {topList}
    </React.Fragment>
  }
}

export default TopList;
