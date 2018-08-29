import React from "react";

export default ({ map_slug, layer_id, post }) => (
  <button onClick={() => post(map_slug, layer_id)}>送信!</button>
);
