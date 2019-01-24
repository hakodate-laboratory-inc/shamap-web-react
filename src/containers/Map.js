import { connect } from "react-redux";
import { apiServer } from "../config/constants";
import { setMap, unsetMap, setLayers, setPins, addPin } from "../actions/map";
import Map from "../components/Map";

const mapStateToProps = state => ({
  map: state.map,
  user: state.reduxTokenAuth.currentUser.attributes,
});

const mapDispatchToProps = dispatch => ({
  fetchMap: async map_slug => {
    try {
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
    } catch(err) {
      console.error(err);
    }
  },
  addPin: pinData => {
    dispatch(addPin(pinData));
  },
  unsetMap: () => {
    dispatch(unsetMap());
  },
  deletePin: async (map_slug, id) => {
    try {
      const res = await fetch(`${apiServer}/v1/maps/${map_slug}/pins/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "access-token": localStorage.getItem("access-token"),
          "client": localStorage.getItem("client"),
          "uid": localStorage.getItem("uid"),
        }),
      });
      if (res.ok) {
        alert("削除が完了しました");
      } else {
        alert("削除に失敗しましてん...");
      }
    } catch(e) {
      alert(e);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
