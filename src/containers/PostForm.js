import { connect } from "react-redux";
import { getLocation } from "../middlewares";
import { apiServer } from "../config/constants";
import PostForm from "../components/PostForm";

const mapStateToProps = state => ({
  map_slug: state.map.slug,
  layer: state.map.layers[0],
});

const mapDispatchToProps = dispatch => ({
  post: (map_slug, layer_id, text, images) => {
    return new Promise(async(resolve, reject) => {
      try {
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
        resolve(json);
      } catch(err) {
        reject(err);
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
