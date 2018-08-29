import React, { Component } from "react";
import { Map as OSM, TileLayer, Marker } from "react-leaflet";
import PostButton from "../containers/PostButton";

class Map extends Component {
  componentDidMount() {
    const { match, fetchMap } = this.props;
    const { map_slug } = match.params;
    fetchMap(map_slug);
  }

  render () {
    const { match, map } = this.props;
    return (
      <div>
        { map.id ?
          <div>
            <h3>This is Map {map.slug}</h3>
            <PostButton map_slug={map.slug} layer_id={map.layers[0].id} />
            <OSM center={[41.814262, 140.757193]} zoom={11} style={{ height: "calc(100vh - 64.44px)" }}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              { map.pins.map(pin => (
                <Marker key={pin.id} position={pin.latlng} />
              )) }
            </OSM>
          </div>
        : <p>Map "{match.params.map_slug}" is not found :(</p> }
      </div>
    );
  }
}

export default Map;

