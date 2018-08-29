export const setMap = mapData => ({
  type: "SET_MAP",
  payload: mapData,
});

export const unsetMap = () => ({
  type: "UNSET_MAP",
});

export const setLayers = layerData => ({
  type: "SET_LAYERS",
  payload: layerData,
});

export const setPins = pinData => ({
  type: "SET_PINS",
  payload: pinData,
});
