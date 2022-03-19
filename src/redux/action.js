import { INCREASE, DECREASE, LOGIN } from "./actionName";
const actionCreator = {
  increase: (count) => ({ type: INCREASE, payload: { count } }),
  decrease: (count) => ({ type: DECREASE, payload: { count } }),
  fetchData: () => async (dispatch) => {
    const data = await fetch("https://swapi.dev/api/people").then((resp) =>
      resp.json()
    );
    console.log(data);
    dispatch({ type: "FETCH", payload: data.result });
  },
  loginAction: (token) => ({ type: LOGIN, payload: { token } }),
};

export default actionCreator;
