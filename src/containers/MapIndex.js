import { connect } from "react-redux";
import MapIndex from "../components/MapIndex";
import { apiServer } from "../config/constants";
import { setMaps } from "../actions/map";

const mapStateToProps = state => ({
  maps: state.map.maps,
});

const mapDispatchToProps = dispatch => ({
  getMaps: async () => {
    const data = await fetch(`${apiServer}/v1/maps`);
    const json = await data.json();
    dispatch(setMaps(json));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapIndex);
