import { DECREASE, INCREASE } from "../actionName";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case INCREASE:
      newState.count = newState.count + 1;
      return newState;
    case DECREASE:
      newState.count = newState.count - 1;
      return newState;
    default:
      return { ...state, ...action.payload };
  }
};

export default reducer;
