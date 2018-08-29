import { connect } from "react-redux";
import { getLocation } from "../middlewares/location";
import { apiServer } from "../config/constants";
import PostButton from "../components/PostButton";

const mapStateToProps = state => {
  console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  post: async (map_slug, layer_id, text) => {
    const position = await getLocation();
    const res = await fetch(`${apiServer}/v1/maps/${map_slug}/pins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),
      },
      body: JSON.stringify({
        v1_pin: {
          layer_id,
          location: `POINT(${position.join(" ")})`,
          context: JSON.stringify({ text }),
        },
      }),
    });
    const json = await res.json();
    console.log(json);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostButton);
