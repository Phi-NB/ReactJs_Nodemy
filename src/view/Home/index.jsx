import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import actionCreator from "../../redux/action";

function Home(props) {
  useEffect(() => {
    console.log("Props", props);
  }, []);
  return (
    <>
      <p>Home</p>
      <h1>{props.count.count}</h1>
      <button
        onClick={() => {
          //   props.dispatch({ type: "INCREASE" });
          props.increase(props.count);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          props.decrease(props.count);
        }}
      >
        DECREASE
      </button>
      
      <button
        onClick={() => {
          props.fetchData();
        }}
      >
        FETCH DATA
      </button>
    </>
  );
}

// hàm mapStateToProps dùng để láy data trong store để trả về tầng component
const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

// Chọn data từ store dể lấy về dùng cho component

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (newcount) => {
      dispatch(actionCreator.increase(newcount));
    },
    decrease: (newcount) => {
      dispatch(actionCreator.decrease(newcount));
    },
    fetchData: () => dispatch(actionCreator.fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
