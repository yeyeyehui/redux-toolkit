import { ReactReduxContext, useSelector } from "react-redux";

import { useContext } from "react";

import counter from "./counter.js";

function App() {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const { number } = useSelector((store) => store.counter);

  return (
    <>
      <p
        onClick={() =>
          dispatch((dispatch) => {
            setTimeout(() => {
              dispatch(counter.actions.asyncAdd(number + 5));
            }, 1000);
          })
        }
      >
        {number}
      </p>
      <button onClick={() => dispatch(counter.actions.add())}>+</button>
      <button onClick={() => dispatch(counter.actions.minus(2))}>-</button>
    </>
  );
}

export default App;
