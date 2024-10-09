import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decremented, incremented } from "./redux/slices";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
};

export default App;
