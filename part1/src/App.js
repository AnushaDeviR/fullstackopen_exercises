import { useState } from "react";
import MoreCounters from "./components/complexState";

const Hello = ({ name, age }) => {
  return (
    <p>
      Hello {name}, you are {age} years old.
    </p>
  );
};

const Display = ({ counter }) => {
  return <>{counter}</>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const now = new Date();
  const name = "Jane Doe";
  const age = 10;
  // const friends = [
  //   { name: "Peter", age: 4 },
  //   { name: "Maya", age: 10 },
  // ];
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  console.log("rendering...", counter);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <>
      <Hello name={name} age={age} />

      {/* <p>
        {friends[0].name}, {friends[0].age}
      </p>
      <p>
        {friends[1].name}, {friends[1].age}
      </p> */}

      <Display counter={counter} />
      <br />
      <Button handleClick={incrementCounter} text="Increment" />
      <Button handleClick={decrementCounter} text="Decrement" />
      <Button handleClick={resetCounter} text="Reset" />

      <p>Timestamp: {now.toString()}</p>

      <h2>A more complex state, debugging react apps</h2>

      <MoreCounters />
    </>
  );
};

export default App;
