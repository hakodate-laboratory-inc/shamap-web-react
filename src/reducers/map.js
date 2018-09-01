const initialState = {
  maps: [],
  id: null,
  title: null,
  slug: null,
  description: null,
  layers: [],
  pins: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "SET_MAPS":
      const maps = action.payload;
      return {
        ...state,
        maps,
      }
    case "SET_MAP":
      const { id, title, slug, description } = action.payload;
      return {
        ...state,
        id,
        title,
        slug,
        description,
      };
    case "UNSET_MAP":
      return initialState;
    case "SET_LAYERS":
      return {
        ...state,
        layers: action.payload,
      }
    case "SET_PINS":
      return {
        ...state,
        pins: action.payload,
      };
    default:
      return state;
  }
};
