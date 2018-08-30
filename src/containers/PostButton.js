import { connect } from "react-redux";
import { getLocation } from "../middlewares";
import { apiServer } from "../config/constants";
import PostButton from "../components/PostButton";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  post: async (map_slug, layer_id, text, images) => {
    const position = await getLocation();
    const data = new FormData();
    data.append("v1_pin[layer_id]", layer_id);
    data.append("v1_pin[location]", `POINT(${position.join(" ")})`);
    data.append("v1_pin[context]", JSON.stringify({text}));
    if(images[0]) data.append("v1_pin[images]", images[0]);
    const res = await fetch(`${apiServer}/v1/maps/${map_slug}/pins`, {
      method: "POST",
      headers: {
        "access-token": localStorage.getItem("access-token"),
        "client": localStorage.getItem("client"),
        "uid": localStorage.getItem("uid"),
      },
      body: data,
    });
    const json = await res.json();
    console.log(json);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostButton);
