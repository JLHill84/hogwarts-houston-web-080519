import React, { Component } from "react";
import HogTile from "./HogTile";
import HogSearch from "./HogSearch";

class HogIndex extends Component {
  render() {
    return (
        
      <div className="ui grid container">
         
         
           
        {this.props.hogs.map(hog => (
          <HogTile
            key={hog.id}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedalAchieved={hog.highestMedalAchieved}
            image={hog.image}
            
          />
        ))}

        
      </div>
    );
  }
}

export default HogIndex;
