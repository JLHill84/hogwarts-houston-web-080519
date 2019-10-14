import React, { Component } from "react";

class HogTile extends Component {
  render() {
    return (
      <div
        className="ui eight wide columm"
        onClick={() => console.log(this.props.specialty)}
      >
        <div className="ui instant move reveal">
          <h3> {this.props.name}</h3>
          <div className="visible content">
          <img src={this.props.image} alt="" />
          </div>
          <div className="hidden content">
              <h3>Specialty: {this.props.specialty}</h3>
              <h4>Greased: {this.props.greased ? "Greased" : "Not Greased"}</h4>
              <h4>Weight: {this.props.weight}</h4>
              <h4>Highest Medal Achieved: {this.props.highestMedalAchieved}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HogTile;
