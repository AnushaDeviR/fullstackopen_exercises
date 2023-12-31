import React, { useState } from "react";

const MoreCounters = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  // 👆🏼 can also be written as:

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClicks = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };

  const handleRightClicks = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  const [allClicks, setAllClicks] = useState([]); //array handlers
  const [total, setTotal] = useState(0);

  const handleLeftConcat = () => {
    setAllClicks(allClicks.concat("L"));
    console.log("left before: ", left);
    const updateLeft = left + 1;
    setLeft(updateLeft);
    console.log("left after: ", left);
    setTotal(updateLeft + right);
  };

  const handleRightConcat = () => {
    setAllClicks(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(left + updateRight);
  };

  const handleConcatClear = () => {
    setLeft(0);
    setRight(0);
    setAllClicks([]);
  };

  return (
    <div>
      <h3>Applying complex states</h3>
      <div>
        {clicks.left} <button onClick={handleLeftClicks}>Left Counter</button>
      </div>
      <div>
        {clicks.right}{" "}
        <button onClick={handleRightClicks}>Right Counter</button>
      </div>
      <h3>Handling Arrays</h3>
      <div>
        {left} <button onClick={handleLeftConcat}>Concat 'L'</button>
      </div>
      <div>
        {right} <button onClick={handleRightConcat}>Concat 'R'</button>
        <br />
        <br />
        <button onClick={handleConcatClear}>Clear Concat</button>
        <p>{allClicks.join(" ")}</p>
        <p> Total: {total}</p>
      </div>
    </div>
  );
};

export default MoreCounters;
