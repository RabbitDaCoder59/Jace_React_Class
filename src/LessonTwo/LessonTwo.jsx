import { useState } from "react";

const LessonTwo = () => {
  // States
  // States Re simply the component memory

  // State help us persist data throughout the component re-render
  // state also forces the component to re-render.
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count+1)
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    // Without these the btn will still be disabled
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <button disabled={count == 0} onClick={handleDecrement}>
        -{" "}
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
export default LessonTwo;
