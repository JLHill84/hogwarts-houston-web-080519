import React, { Component } from "react";

class HogSearch extends Component {
  findHog = event => {
    event.preventDefault();
    let filteredHogs = this.props.hogs.filter(hog => {
      hog.name
        .toLowerCase()
        .includes(
          `${event.target.parentElement.firstChild.value.toLowerCase()}`
        );
    });
    console.log(filteredHogs);
  };

  render() {
    return (
      <div>
        <form id="findHog">
          <input id="searchBox" type="text" placeholder="Wrassle A Piggy" />
          <input type="submit" onClick={e => this.findHog(e)} />
        </form>
      </div>
    );
  }
}

export default HogSearch;
