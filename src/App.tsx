import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decremented, incremented } from "./redux/slices";
import { Navbar, Text } from "./Components";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

  const [textState, setTextState] = useState<string>("Text awal");

  const onChangeState = () => {
    setTextState("button clicked");
  };

  return (
    <main className="h-screen">
      <Navbar />
      <h1>Counter: {count}</h1>

      <div className="flex gap-3">
        <button
          className="bg-gray-200 border border-gray-300 p-2"
          onClick={() => dispatch(incremented())}
        >
          Increment
        </button>
        <button
          className="bg-gray-200 border border-gray-300 p-2"
          onClick={() => dispatch(decremented())}
        >
          Decrement
        </button>
      </div>

      <br />
      <br />
      <Text>{textState}</Text>
      <br />
      <button className="" onClick={onChangeState}>
        Change State
      </button>
    </main>
  );
};

export default App;
