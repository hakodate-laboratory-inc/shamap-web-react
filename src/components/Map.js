import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    const { match, fetchMap } = this.props;
    const { map_slug } = match.params;
    fetchMap(map_slug);
  }

  render () {
    const { match } = this.props;
    return (
      <div>
        <h3>This is Map {match.params.map_slug}</h3>
      </div>
    );
  }
}

export default Map;

