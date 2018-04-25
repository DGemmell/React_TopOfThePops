import React from "react";
import Header from "../components/Header"
import TopList from "../components/TopList"


class TopBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chart: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({entry:json.feed.entry}));
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        {/* <TopList
          entry={this.state.entry} /> */}
          test
      </React.Fragment>
    )
  }

}


export default TopBox;
