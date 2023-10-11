import React, { useState } from "react";

const MoreCounters = () => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);

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

  return (
    <div>
      <h3>Applying complex states</h3>
      <div>
        {clicks.left}
        <button onClick={handleLeftClicks}>Left Counter</button>
      </div>
      <div>
        {clicks.right}
        <button onClick={handleRightClicks}>Right Counter</button>
      </div>
    </div>
  );
};

export default MoreCounters;
