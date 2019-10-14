import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogIndex from "./HogIndex";
import HogSearch from "./HogSearch"

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: []
    };
  }

  componentDidMount() {
    this.fetchHogs();
  }

  fetchHogs = () => {
    fetch("http://localhost:3001/hogs")
      .then(response => response.json())
      .then(hogs => {
        this.setState({
          hogs: hogs
        })
        // console.log(this.state.hogs)
      })
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HogSearch hogs={this.state.hogs}/>
        <br/>
        <br/>
        <HogIndex hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
