import { connect } from "react-redux";
import { apiServer } from "../config/constants";
import { setMap, unsetMap, setLayers, setPins } from "../actions/map";
import Map from "../components/Map";

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => ({
  fetchMap: async map_slug => {
    const resMap = await fetch(`${apiServer}/v1/maps/${map_slug}`);
    const jsonMap = await resMap.json();
    if (!jsonMap) {
      dispatch(unsetMap());
      return; // Because map is notfound
    }
    dispatch(setMap(jsonMap));

    const resLayer = await fetch(`${apiServer}/v1/maps/${map_slug}/layers`);
    const jsonLayer = await resLayer.json();
    dispatch(setLayers(jsonLayer));

    const resPin = await fetch(`${apiServer}/v1/maps/${map_slug}/pins`);
    const jsonPin = await resPin.json();
    dispatch(setPins(jsonPin));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
