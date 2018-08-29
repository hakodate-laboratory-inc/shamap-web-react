import { connect } from "react-redux";
import { apiServer } from "../config/constants";
import { setMap } from "../actions/map";
import Map from "../components/Map";

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => ({
  fetchMap: async map_slug => {
    const resMap = await fetch(`${apiServer}/v1/maps/${map_slug}`);
    const jsonMap = await resMap.json();
    dispatch(setMap(jsonMap));

    const resPin = await fetch(`${apiServer}/v1/maps/${map_slug}/pins`);
    const jsonPin = await resPin.json();
    console.log("pins: ", jsonPin);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
